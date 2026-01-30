"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createSignedUploadUrl(
  projectId: string,
  fileName: string
) {
  const supabase = await createClient();

  // Generate unique file path
  const timestamp = Date.now();
  const sanitizedName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
  const storagePath = `${projectId}/${timestamp}-${sanitizedName}`;

  const { data, error } = await supabase.storage
    .from("project-images")
    .createSignedUploadUrl(storagePath);

  if (error) throw error;

  return {
    signedUrl: data.signedUrl,
    storagePath,
    token: data.token,
  };
}

export async function createProjectImage(
  projectId: string,
  storagePath: string,
  altText?: string,
  title?: string
) {
  const supabase = await createClient();

  // Get current max display order
  const { data: existingImages } = await supabase
    .from("project_images")
    .select("display_order")
    .eq("project_id", projectId)
    .order("display_order", { ascending: false })
    .limit(1);

  const nextOrder = (existingImages?.[0]?.display_order ?? -1) + 1;

  // Check if this is the first image (make it featured)
  const { count } = await supabase
    .from("project_images")
    .select("id", { count: "exact" })
    .eq("project_id", projectId);

  const isFeatured = count === 0;

  const { data, error } = await supabase
    .from("project_images")
    .insert({
      project_id: projectId,
      storage_path: storagePath,
      alt_text: altText,
      title,
      display_order: nextOrder,
      is_featured: isFeatured,
    })
    .select("id")
    .single();

  if (error) throw error;

  revalidatePath(`/admin/projects/${projectId}`);
  revalidatePath("/");

  return data;
}

export async function updateProjectImage(
  imageId: string,
  projectId: string,
  updates: { alt_text?: string; title?: string }
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("project_images")
    .update(updates)
    .eq("id", imageId);

  if (error) throw error;

  revalidatePath(`/admin/projects/${projectId}`);
  revalidatePath("/");
}

export async function deleteProjectImage(imageId: string, projectId: string) {
  const supabase = await createClient();

  // Get the storage path first
  const { data: image } = await supabase
    .from("project_images")
    .select("storage_path, is_featured")
    .eq("id", imageId)
    .single();

  if (!image) throw new Error("Image not found");

  // Delete from storage
  await supabase.storage.from("project-images").remove([image.storage_path]);

  // Delete from database
  const { error } = await supabase
    .from("project_images")
    .delete()
    .eq("id", imageId);

  if (error) throw error;

  // If this was the featured image, make the first remaining image featured
  if (image.is_featured) {
    const { data: remaining } = await supabase
      .from("project_images")
      .select("id")
      .eq("project_id", projectId)
      .order("display_order", { ascending: true })
      .limit(1);

    if (remaining && remaining.length > 0) {
      await supabase
        .from("project_images")
        .update({ is_featured: true })
        .eq("id", remaining[0].id);
    }
  }

  revalidatePath(`/admin/projects/${projectId}`);
  revalidatePath("/");
}

export async function setFeaturedImage(imageId: string, projectId: string) {
  const supabase = await createClient();

  // Remove featured from all images in this project
  await supabase
    .from("project_images")
    .update({ is_featured: false })
    .eq("project_id", projectId);

  // Set new featured image
  const { error } = await supabase
    .from("project_images")
    .update({ is_featured: true })
    .eq("id", imageId);

  if (error) throw error;

  revalidatePath(`/admin/projects/${projectId}`);
  revalidatePath("/");
}

export async function reorderImages(
  projectId: string,
  imageOrders: { id: string; display_order: number }[]
) {
  const supabase = await createClient();

  const updates = imageOrders.map(({ id, display_order }) =>
    supabase.from("project_images").update({ display_order }).eq("id", id)
  );

  await Promise.all(updates);

  revalidatePath(`/admin/projects/${projectId}`);
  revalidatePath("/");
}
