import React from "react";
import DNavbar from "./DNavbar";

export const metadata = {
  title: "Dashbaord - Milian",
  description: "special features for logged in user",
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <DNavbar />

      <main>{children}</main>
    </section>
  );
}

export default DashboardLayout;
