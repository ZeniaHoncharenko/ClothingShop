"use client";

import Link from "next/link";
import "./signup.css";
import { signUp } from "@/actions/auth";
import { toast } from "sonner";

export default function SignUpPage() {
  async function handleSignUp(formData: FormData) {
    const res = await signUp(formData);
    if (res.success) {
      toast.success(res.message || "Signed up successfully");
    } else {
      toast.error(res.message || "Sign up failed", {
        description: "Sign up failed",
      });
    }
  }
  return (
    <div className="signup">
      <div className="signup-card">
        <h1>Create a new account</h1>

        <form action={handleSignUp}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter user email"
            required
          />
          <input
            type="email"
            name="email confirm"
            id="email confirm"
            placeholder="Confirm the email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Pasword"
            required
          />

          <div className="signup-button">
            <button type="submit">Create</button>
          </div>

          <div className="signup-register-link">
            Already have and account?
            <Link href="/signin"> Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
