"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  ShoppingBag,
  Heart,
  Truck,
  Plus,
  Edit,
  LogOut,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.includes(href);

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0">
      {/* Header */}
      <div className="px-6 py-8 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-black">
          <Link href="/">SHOP.CO</Link>
        </h1>
        <p className="text-sm text-gray-500 mt-1">Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
        {/* Section 1: Account */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-3">
            Your Account
          </h2>
          <ul className="space-y-1">
            <NavLink
              href="/dashboard/account"
              active={isActive("/account")}
              icon={<User size={18} />}
              label="Personal Information"
            />
            <NavLink
              href="/dashboard/orders"
              active={isActive("/orders")}
              icon={<ShoppingBag size={18} />}
              label="My Orders"
            />
            <NavLink
              href="/dashboard/liked"
              active={isActive("/liked")}
              icon={<Heart size={18} />}
              label="Liked Items"
            />
            <NavLink
              href="/dashboard/shipping"
              active={isActive("/shipping")}
              icon={<Truck size={18} />}
              label="Shipping Addresses"
            />
          </ul>
        </div>

        {/* Section 2: Store Management */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-3">
            Store
          </h2>
          <ul className="space-y-1">
            <NavLink
              href="/dashboard/products/new"
              active={isActive("/products/new")}
              icon={<Plus size={18} />}
              label="Add Product"
            />
            <NavLink
              href="/dashboard/products/edit"
              active={isActive("/products/edit")}
              icon={<Edit size={18} />}
              label="Edit Products"
            />
          </ul>
        </div>
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-6 border-t border-gray-100">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 font-medium">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

function NavLink({
  href,
  active,
  icon,
  label,
}: {
  href: string;
  active: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`
          flex items-center gap-3 px-3 py-2 rounded-lg
          transition-all duration-200
          ${
            active
              ? "bg-black text-white font-medium"
              : "text-gray-700 hover:bg-gray-100"
          }
        `}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
