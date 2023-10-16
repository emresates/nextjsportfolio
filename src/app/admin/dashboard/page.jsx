"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { status } = useSession();
  const router = useRouter();

  console.log(status);
  if (status !== "authenticated") {
    router.push("/admin");
  } else {
    return <div>Admin</div>;
  }
};

export default Dashboard;
