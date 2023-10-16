"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/admin/dashboard");
  //   }
  // }, []);

  const loginSubmit = (e) => {
    e.preventDefault();

    signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirect: true,
      callbackUrl: "/admin/dashboard",
    });
  };

  return (
    <div>
      <form
        onSubmit={loginSubmit}
        className="flex h-screen w-full flex-col items-center justify-center"
      >
        <h1 className="mb-4 text-8xl">Login</h1>
        <div className="flex w-1/5 flex-col items-start justify-center">
          <label htmlFor="username" className="text-3xl">
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
        <div className="flex w-1/5 flex-col items-start justify-center">
          <label htmlFor="password" className="text-3xl">
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
        <button type="submit" className="float-right">
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
