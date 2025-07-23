"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/firebase/auth";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-6 rounded-lg bg-gray-900 w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
