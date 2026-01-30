import { AdminNav } from "./AdminNav";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />

      {/* Main content */}
      <div className="md:pl-64">
        {/* Mobile header spacer */}
        <div className="md:hidden h-16" />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
