"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const login = async () => {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="w-[350px] bg-white p-10 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6">
        Panel Administrativo
      </h1>

      <input
        type="email"
        placeholder="Correo"
        className="w-full border p-3 rounded-lg mb-4"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="w-full border p-3 rounded-lg mb-4"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={login}
        className="w-full bg-black text-white p-3 rounded-xl"
      >
        Entrar
      </button>
    </div>
  );
}