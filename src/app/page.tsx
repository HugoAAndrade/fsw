"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  console.log(data);
  return <div>hello world!</div>;
}
