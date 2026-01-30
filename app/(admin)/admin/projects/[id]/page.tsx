import { AdminLayout } from "@/components/admin/AdminLayout";
import {
  ProjectForm,
  type ProjectFormValues,
} from "@/components/admin/ProjectForm";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { ImageGrid } from "@/components/admin/ImageGrid";
import {
  getProject,
  updateProject,
  deleteProject,
  togglePublishProject,
} from "@/lib/actions/projects";
import Link from "next/link";
import { ArrowLeft, Trash2, Eye, EyeOff } from "lucide-react";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

interface EditProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  async function handleUpdate(data: ProjectFormValues) {
    "use server";
    await updateProject(id, data);
  }

  async function handleDelete() {
    "use server";
    await deleteProject(id);
  }

  async function handleTogglePublish() {
    "use server";
    await togglePublishProject(id, !project.is_published);
    revalidatePath(`/admin/projects/${id}`);
  }

  async function handleImageUploadComplete() {
    "use server";
    revalidatePath(`/admin/projects/${id}`);
  }

  const sortedImages = [...(project.project_images || [])].sort(
    (a, b) => a.display_order - b.display_order
  );

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              {project.title}
            </h1>
            <div className="flex gap-2">
              <form action={handleTogglePublish}>
                <button
                  type="submit"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    project.is_published
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {project.is_published ? (
                    <>
                      <EyeOff size={18} />
                      Unpublish
                    </>
                  ) : (
                    <>
                      <Eye size={18} />
                      Publish
                    </>
                  )}
                </button>
              </form>
              <form action={handleDelete}>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                  onClick={(e) => {
                    if (
                      !confirm(
                        "Are you sure you want to delete this project? This will also delete all images."
                      )
                    ) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Project Details Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Project Details
          </h2>
          <ProjectForm
            defaultValues={{
              title: project.title,
              description: project.description || "",
              category: project.category,
              is_published: project.is_published,
              order_index: project.order_index,
            }}
            onSubmit={handleUpdate}
            submitLabel="Save Changes"
          />
        </div>

        {/* Images Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Project Images
          </h2>

          {/* Image Uploader */}
          <div className="mb-8">
            <ImageUploader
              projectId={id}
              onUploadComplete={handleImageUploadComplete}
            />
          </div>

          {/* Image Grid */}
          <ImageGrid
            projectId={id}
            images={sortedImages}
            supabaseUrl={process.env.NEXT_PUBLIC_SUPABASE_URL!}
          />
        </div>
      </div>
    </AdminLayout>
  );
}
