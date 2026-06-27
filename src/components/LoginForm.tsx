"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={login} className="w-[350px] bg-white p-10 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Panel Administrativo</h1>

      <input
        type="email"
        placeholder="Correo"
        className="w-full border p-3 rounded-lg mb-4 text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="w-full border p-3 rounded-lg mb-4 text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-black text-white p-3 rounded-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}   