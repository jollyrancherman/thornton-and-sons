import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Thorton & Sons",
  description: "Admin dashboard for Thorton & Sons woodworking",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
