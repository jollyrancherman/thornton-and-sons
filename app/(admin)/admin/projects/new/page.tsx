import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProjectForm, type ProjectFormValues } from "@/components/admin/ProjectForm";
import { createProject } from "@/lib/actions/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewProjectPage() {
  async function handleCreate(data: ProjectFormValues) {
    "use server";
    await createProject(data);
  }

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">New Project</h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <ProjectForm onSubmit={handleCreate} submitLabel="Create Project" />
        </div>
      </div>
    </AdminLayout>
  );
}
