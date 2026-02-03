"use client";
import { getCurrentUser } from "@/lib/auth";

export default function DashboardAccountPage() {
  const user = getCurrentUser();

  return (
    <div className="account-page">
      <h1>Personal Account</h1>
    </div>
  );
}
