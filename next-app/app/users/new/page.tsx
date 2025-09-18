"use client";
import { useRouter } from "next/navigation";
import React from "react";

const user = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        router.push("/users");
      }}
    >
      Create
    </button>
  );
};

export default user;
