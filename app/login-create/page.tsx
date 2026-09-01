"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Hero from "../home/hero";
import CreateAccount from "./create-account";
import Login from "./login";

type AuthView = "login" | "create";

export default function LoginCreatePage() {
  const router = useRouter();
  const [view, setView] = useState<AuthView>("login");

  const close = () => router.push("/");

  return (
    <div className="relative min-h-screen">
      <Hero />

      <div className="fixed inset-0 z-[90] overflow-y-auto bg-black/45 px-5 py-[72px] sm:py-[88px] lg:py-[104px]">
        <div className="flex min-h-full items-center justify-center">
          {view === "login" ? (
            <Login
              onCreateAccount={() => setView("create")}
              onClose={close}
            />
          ) : (
            <CreateAccount
              onLogin={() => setView("login")}
              onClose={close}
            />
          )}
        </div>
      </div>
    </div>
  );
}
