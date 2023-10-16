"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();

  console.log("status admin", status);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin");
    }
  }, []);
  console.log(status);

  return <div className="h-screen w-full">Admin</div>;
};

export default Dashboard;
