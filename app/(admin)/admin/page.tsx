import { createClient } from "@/lib/supabase/server";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { FolderOpen, Image, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

async function getStats() {
  const supabase = await createClient();

  const [projectsResult, imagesResult, publishedResult] = await Promise.all([
    supabase.from("projects").select("id", { count: "exact" }),
    supabase.from("project_images").select("id", { count: "exact" }),
    supabase
      .from("projects")
      .select("id", { count: "exact" })
      .eq("is_published", true),
  ]);

  return {
    totalProjects: projectsResult.count ?? 0,
    totalImages: imagesResult.count ?? 0,
    publishedProjects: publishedResult.count ?? 0,
    draftProjects: (projectsResult.count ?? 0) - (publishedResult.count ?? 0),
  };
}

async function getRecentProjects() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("projects")
    .select("id, title, is_published, created_at")
    .order("created_at", { ascending: false })
    .limit(5);

  return data ?? [];
}

export default async function AdminDashboard() {
  const [stats, recentProjects] = await Promise.all([
    getStats(),
    getRecentProjects(),
  ]);

  const statCards = [
    {
      label: "Total Projects",
      value: stats.totalProjects,
      icon: FolderOpen,
      color: "bg-blue-500",
    },
    {
      label: "Published",
      value: stats.publishedProjects,
      icon: Eye,
      color: "bg-green-500",
    },
    {
      label: "Drafts",
      value: stats.draftProjects,
      icon: EyeOff,
      color: "bg-yellow-500",
    },
    {
      label: "Total Images",
      value: stats.totalImages,
      icon: Image,
      color: "bg-purple-500",
    },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4"
            >
              <div
                className={`${stat.color} p-3 rounded-lg text-white`}
              >
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions & Recent Projects */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                href="/admin/projects/new"
                className="flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors"
              >
                <FolderOpen size={20} />
                Create New Project
              </Link>
              <Link
                href="/admin/projects"
                className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors"
              >
                <Image size={20} />
                Manage Projects
              </Link>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors"
              >
                <Eye size={20} />
                View Live Site
              </a>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Projects
              </h2>
              <Link
                href="/admin/projects"
                className="text-sm text-blue-600 hover:underline"
              >
                View All
              </Link>
            </div>
            {recentProjects.length === 0 ? (
              <p className="text-gray-500 py-4">No projects yet.</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {recentProjects.map((project) => (
                  <li key={project.id} className="py-3">
                    <Link
                      href={`/admin/projects/${project.id}`}
                      className="flex items-center justify-between hover:bg-gray-50 -mx-2 px-2 py-1 rounded"
                    >
                      <span className="font-medium text-gray-900">
                        {project.title}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.is_published
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.is_published ? "Published" : "Draft"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
