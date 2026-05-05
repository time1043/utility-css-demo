import { useState } from "react";
import BreakpointIndicator from "./BreakpointIndicator";
import ActivityList from "./dashboard/ActivityList";
import RevenueChart from "./dashboard/RevenueChart";
import Sidebar from "./dashboard/Sidebar";
import StatCards from "./dashboard/StatCards";
import Topbar from "./dashboard/Topbar";

export default function ResponsiveDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          <h1 className="text-2xl font-bold">Overview</h1>

          <StatCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RevenueChart />
            <ActivityList />
          </div>
        </main>
      </div>

      <BreakpointIndicator />
    </div>
  );
}
