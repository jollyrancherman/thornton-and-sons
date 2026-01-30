import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Thornton & Sons",
  description: "Admin dashboard for Thornton & Sons woodworking",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
