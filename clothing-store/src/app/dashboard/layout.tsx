import DashboardSidebar from "../components/layout/dashboard/sidebar";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-[0.1fr_1fr] gap-2 bg-gray-50">
      <DashboardSidebar />
      <main className="content-area">{children}</main>
    </div>
  );
}
