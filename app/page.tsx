import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the default theme (Luxury Artisan)
  redirect("/luxury");
}
