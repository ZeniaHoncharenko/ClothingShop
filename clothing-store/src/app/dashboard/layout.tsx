import DashboardSidebar from "../components/layout/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <main className="content-area">{children}</main>
    </div>
  );
}
