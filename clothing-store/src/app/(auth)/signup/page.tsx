"use client";

import Link from "next/link";
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action={handleSignUp}
        className="grid w-full max-w-md grid-cols-1 grid-rows-[auto_auto_auto_auto_auto] gap-4 rounded-2xl bg-white p-8 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold">Create a new account</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter user email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500"
          required
        />
        <input
          type="email"
          name="email confirm"
          id="email confirm"
          placeholder="Confirm the email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Pasword"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-500"
          required
        />

        <div className="text-sm text-gray-600">
          <button
            type="submit"
            className="w-full rounded-md bg-black px-4 py-2 text-white transition-opacity hover:opacity-90"
          >
            Create
          </button>
        </div>

        <div className="text-sm text-gray-600">
          Already have and account?
          <Link
            href="/signin"
            className="font-medium text-black hover:text-gray-600"
          >
            {" "}
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
