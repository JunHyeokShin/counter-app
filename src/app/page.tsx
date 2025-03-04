"use client";

import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <Login />
        </div>
      </div>
    </main>
  );
}
