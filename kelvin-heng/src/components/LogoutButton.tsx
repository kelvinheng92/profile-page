"use client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1.5 text-gray-500 hover:text-red-600 text-xs font-medium transition-colors ml-auto"
    >
      <LogOut className="w-3.5 h-3.5" />
      Sign out
    </button>
  );
}
