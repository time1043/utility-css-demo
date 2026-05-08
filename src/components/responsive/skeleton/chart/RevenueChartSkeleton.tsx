import type { HTMLAttributes } from "react";

type RevenueChartSkeletonProps = HTMLAttributes<HTMLDivElement>;

export default function RevenueChartSkeleton({
  className,
}: RevenueChartSkeletonProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 ${className}`}
    >
      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
      <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg" />
    </div>
  );
}
