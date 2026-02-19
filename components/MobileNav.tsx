"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Gavel, Image, ShoppingBag, Settings, AlertCircle } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/auctions", icon: Gavel, label: "Auctions" },
    { href: "/digital-art", icon: Image, label: "Gallery" },
    { href: "/portfolio", icon: ShoppingBag, label: "Portfolio" },
    { href: "/submit", icon: AlertCircle, label: "Submit" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-yellow-600/20 z-50 safe-area-inset-bottom">
      <div className="flex justify-around items-stretch h-16 md:hidden">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all ${
                active
                  ? "bg-yellow-600/10 border-t-2 border-yellow-500 text-yellow-500"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>

      {/* Desktop navbar */}
      <div className="hidden md:flex justify-center items-center gap-8 px-8 py-4">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                active
                  ? "bg-yellow-600/10 border border-yellow-500 text-yellow-500"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
