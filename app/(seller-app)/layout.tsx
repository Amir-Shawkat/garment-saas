import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
          <p>G<span className="text-cyan-500">S</span></p>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Button variant="ghost">Logout</Button>
          </Link>
        </div>
      </nav>
      <main className="p-8">{children}</main>
    </div>
  );
}