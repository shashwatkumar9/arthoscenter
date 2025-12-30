'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardList,
  CreditCard,
  FileText,
  Shield,
  Activity,
  LogOut,
} from 'lucide-react';
import { signOut } from 'next-auth/react';

interface SidebarProps {
  userRole: string;
  canManagePatients?: boolean;
  canManagePayments?: boolean;
}

export default function Sidebar({ userRole, canManagePatients, canManagePayments }: SidebarProps) {
  const pathname = usePathname();

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      show: true,
    },
    {
      name: 'Patients',
      href: '/admin/patients',
      icon: Users,
      show: canManagePatients,
    },
    {
      name: 'Consultations',
      href: '/admin/consultations',
      icon: Calendar,
      show: true,
    },
    {
      name: 'Appointments',
      href: '/admin/appointments',
      icon: ClipboardList,
      show: true,
    },
    {
      name: 'Blog Posts',
      href: '/admin/blog',
      icon: FileText,
      show: true,
    },
    {
      name: 'Payments',
      href: '/admin/payments',
      icon: CreditCard,
      show: canManagePayments,
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: Activity,
      show: true,
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: Shield,
      show: userRole === 'SUPER_ADMIN',
    },
  ].filter((item) => item.show);

  const isActive = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Arthros Center</h1>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors w-full"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
