import AdminTabs from "@/components/molecules/AdminTabs";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-4">
      <AdminTabs />
      <div className="px-3">{children}</div>
    </div>
  );
}
