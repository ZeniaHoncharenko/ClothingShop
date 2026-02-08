import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function DashboardAccountPage() {
  const user = await getCurrentUser();

  return (
    <div className="account-page">
      <h1>Personal Account</h1>
      {user && <p>Hi, {user.name ?? user.email}</p>}
    </div>
  );
}
