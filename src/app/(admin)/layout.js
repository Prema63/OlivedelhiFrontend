"use client";

import "../globals.css";
import AdminLayout from "./admin/components/adminLayout/page";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  const isLogin = pathname === "/admin/login";

  return (
    <div>
      {/* <body>{isLogin ? children : <AdminLayout>{children}</AdminLayout>}</body> */}
      {isLogin ? children :<AdminLayout>{children}</AdminLayout>}
    </div>
  );
}



