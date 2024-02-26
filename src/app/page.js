"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import './globals.css'

export default function Home() {
  function navigateHandler(route) {
    router.push(route);
  }

  const router = useRouter();
  return (
    <main className="bg-white flex flex-col items-center justify-center h-screen">
      <h1 className="flex font-extrabold">Baisc Routing in Next js</h1>
      <br></br>
      <Link href="/login">Go to Login</Link>
      <br></br>
      <Link href="/about">Go to about</Link>
      <br></br>
      <button
        onClick={() => navigateHandler("/login")}
      >
        Go To Login
      </button>
      <button
        onClick={() => navigateHandler("/about")}
      >
        Go To about
      </button>



    </main>
  );
}
