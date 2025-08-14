import React from "react";
import DashboardStats from "@/components/composite/DashboardStats";
import RevenueChart from "@/components/composite/RevenueChart";
import SourceWidget from "@/components/composite/SourceWidget";
import ContactsTable from "@/components/composite/ContactsTable";

export default function DashboardPage() {
  return (
    <div>
      <DashboardStats />
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <RevenueChart />
          <ContactsTable />
        </div>
        <SourceWidget />
      </div>
    </div>
  );
}
