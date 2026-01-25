"use client";

import Link from "next/link";
import "./signup.css";
import { signIn } from "@/actions/auth";

export default function SignUpPage() {
  async function handleSignIn(formData: FormData) {
    await signIn(formData);
  }
  return (
    <div className="signin">
      <div className="signin-card">
        <h1>Registration</h1>

        <form action={handleSignIn}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />

          <div className="signin-button">
            <button type="submit">Sign In</button>
          </div>

          <div className="signin-register-link">
            <Link href="/signup">Make a new account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
