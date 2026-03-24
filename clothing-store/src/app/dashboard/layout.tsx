import DashboardSidebar from "../components/layout/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[0.1fr_1fr] gap-2">
      <DashboardSidebar />
      <main className="content-area">{children}</main>
    </div>
  );
}
