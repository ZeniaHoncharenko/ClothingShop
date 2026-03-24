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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action={handleSignIn}
        className="grid w-full max-w-md grid-cols-1 grid-rows-[auto_auto_auto_auto_auto] gap-4 rounded-2xl bg-white p-8 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500"
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500"
          required
        />

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-black px-4 py-2 text-white transition-opacity hover:opacity-90"
          >
            Sign In
          </button>
        </div>

        <div className="text-sm text-gray-600">
          Doesn&apos;t have an account?
          <Link
            href="/signup"
            className="font-medium text-black hover:hover:text-gray-600"
          >
            {" "}
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
