"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  category: z.string().default("furniture"),
  is_published: z.boolean().default(false),
  order_index: z.number().default(0),
});

export type ProjectFormData = z.infer<typeof ProjectSchema>;

export async function getProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      id,
      title,
      description,
      category,
      is_published,
      order_index,
      created_at,
      updated_at,
      project_images (
        id,
        storage_path,
        is_featured
      )
    `
    )
    .order("order_index", { ascending: true });

  if (error) throw error;
  return data;
}

export async function getProject(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      id,
      title,
      description,
      category,
      is_published,
      order_index,
      created_at,
      updated_at,
      project_images (
        id,
        storage_path,
        alt_text,
        title,
        display_order,
        is_featured,
        created_at
      )
    `
    )
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function createProject(formData: ProjectFormData) {
  const supabase = await createClient();

  const validated = ProjectSchema.parse(formData);

  const { data, error } = await supabase
    .from("projects")
    .insert(validated)
    .select("id")
    .single();

  if (error) throw error;

  revalidatePath("/admin/projects");
  redirect(`/admin/projects/${data.id}`);
}

export async function updateProject(id: string, formData: ProjectFormData) {
  const supabase = await createClient();

  const validated = ProjectSchema.parse(formData);

  const { error } = await supabase
    .from("projects")
    .update(validated)
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/projects");
  revalidatePath(`/admin/projects/${id}`);
  revalidatePath("/"); // Revalidate public pages
}

export async function deleteProject(id: string) {
  const supabase = await createClient();

  // First delete all images from storage
  const { data: images } = await supabase
    .from("project_images")
    .select("storage_path")
    .eq("project_id", id);

  if (images && images.length > 0) {
    const paths = images.map((img) => img.storage_path);
    await supabase.storage.from("project-images").remove(paths);
  }

  // Delete the project (cascade will delete project_images records)
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/projects");
  revalidatePath("/"); // Revalidate public pages
  redirect("/admin/projects");
}

export async function togglePublishProject(id: string, isPublished: boolean) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("projects")
    .update({ is_published: isPublished })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin/projects");
  revalidatePath(`/admin/projects/${id}`);
  revalidatePath("/"); // Revalidate public pages
}

export async function reorderProjects(
  projectOrders: { id: string; order_index: number }[]
) {
  const supabase = await createClient();

  const updates = projectOrders.map(({ id, order_index }) =>
    supabase.from("projects").update({ order_index }).eq("id", id)
  );

  await Promise.all(updates);

  revalidatePath("/admin/projects");
  revalidatePath("/");
}
