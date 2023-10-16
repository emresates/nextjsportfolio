"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/admin");
    }
  }, []);
  console.log(status);

  return <div>Admin</div>;
};

export default Dashboard;
