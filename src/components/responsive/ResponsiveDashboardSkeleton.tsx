import { useState } from "react";
import BreakpointIndicator from "./BreakpointIndicator";
import StatCardSkeleton from "./skeleton/card/StatCardSkeleton";
import ActivityListSkeleton from "./skeleton/chart/ActivityListSkeleton";
import RevenueChartSkeleton from "./skeleton/chart/RevenueChartSkeleton";
import CloseButton from "./skeleton/sidebar/CloseButton";
import Logo from "./skeleton/sidebar/Logo";
import NavItemSkeleton from "./skeleton/sidebar/NavItemSkeleton";
import SidebarOverlay from "./skeleton/sidebar/SidebarOverlay";
import BellButtonSkeleton from "./skeleton/topbar/BellButtonSkeleton";
import MenuButtonSkeleton from "./skeleton/topbar/MenuButtonSkeleton";
import SearchBarSkeleton from "./skeleton/topbar/SearchBarSkeleton";
import UserAvatarSkeleton from "./skeleton/topbar/UserAvatarSkeleton";

export default function ResponsiveDashboardSkeleton() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Mobile overlay */}
      {sidebarOpen && <SidebarOverlay onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-800">
          <Logo />
          <CloseButton onClick={() => setSidebarOpen(false)} />
        </div>
        <nav className="p-4 space-y-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <NavItemSkeleton key={i} active={i === 0} />
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <div className="lg:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <MenuButtonSkeleton onClick={() => setSidebarOpen(true)} />
            <SearchBarSkeleton />
          </div>
          <div className="flex items-center gap-3">
            <BellButtonSkeleton />
            <UserAvatarSkeleton />
          </div>
        </header>

        {/* Content */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          <h1 className="text-2xl font-bold">Overview</h1>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCardSkeleton className="col-span-1 sm:col-span-1 xl:col-span-1" />
            <StatCardSkeleton className="col-span-1 sm:col-span-1 xl:col-span-1" />
            <StatCardSkeleton className="col-span-1 sm:col-span-2 xl:col-span-2" />
            {/* {Array.from({ length: 4 }).map((_, i) => (
              <StatCardSkeleton key={i} />
            ))} */}
          </div>

          {/* Chart + Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RevenueChartSkeleton className="lg:col-span-2" />
            <ActivityListSkeleton />
          </div>
        </main>
      </div>

      <BreakpointIndicator />
    </div>
  );
}
