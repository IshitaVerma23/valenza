"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin";
    } else {
      setError("Invalid password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-slate-900 p-6 rounded-xl border border-white/10 w-80"
      >
        <h2 className="text-xl mb-4 font-semibold">Admin Login</h2>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 border border-white/10 mb-3"
        />

        {error && <div className="text-red-400 text-sm mb-2">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-500 py-2 rounded hover:bg-blue-400"
        >
          Login
        </button>
      </form>
    </div>
  );
}