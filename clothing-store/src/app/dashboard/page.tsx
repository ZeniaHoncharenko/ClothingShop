import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    return;
  }
  return <div>Hi, {user.name}</div>;
}
