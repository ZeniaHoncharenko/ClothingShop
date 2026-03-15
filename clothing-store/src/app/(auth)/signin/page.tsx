"use client";

import Link from "next/link";
import { signIn } from "@/actions/auth";
import { toast } from "sonner";

export default function SignInPage() {
  async function handleSignIn(formData: FormData) {
    const res = await signIn(formData);
    if (res.success) {
      toast.success(res.message || "Signed in successfully");
    } else {
      toast.error(res.message || "Sign in failed", {
        description: "Sign in failed",
      });
    }
  }
  return (
    <div className="signin">
      <div className="signin-card">
        <h1>Sign In</h1>

        <form action={handleSignIn}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />

          <div className="signin-button">
            <button type="submit">Sign In</button>
          </div>

          <div className="signin-register-link">
            Doesn&apos;t have an account?
            <Link href="/signup"> Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
