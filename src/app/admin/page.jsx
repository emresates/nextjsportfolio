"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/admin/dashboard");
  }

  const loginSubmit = (e) => {
    e.preventDefault();

    signIn("credentials", {
      username: formData.username,
      password: formData.password,
      // redirect: true,
      // callbackUrl: "/admin/dashboard",
    });
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-8xl">Login</h1>
      <form
        onSubmit={loginSubmit}
        className="flex w-1/5 flex-col items-end justify-center gap-y-3"
      >
        <div className="flex w-full flex-col items-start justify-center">
          <label htmlFor="username" className="mb-2 text-3xl">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full rounded-lg border border-red-500 bg-transparent px-3 py-1 text-black dark:text-white"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center">
          <label htmlFor="password" className="mb-2 text-3xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full rounded-lg border border-red-500 bg-transparent px-3 py-1 text-black dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl border border-black px-3 py-1 transition-all duration-200 hover:shadow-md hover:shadow-white active:translate-y-1 dark:border-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
