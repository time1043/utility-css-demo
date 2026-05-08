import type { HTMLAttributes } from "react";

type StatCardSkeletonProps = HTMLAttributes<HTMLDivElement>;

export default function StatCardSkeleton({ className }: StatCardSkeletonProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 space-y-3 ${className}`}
    >
      <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-8 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
    </div>
  );
}
