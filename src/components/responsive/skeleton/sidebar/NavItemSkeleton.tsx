interface NavItemSkeletonProps {
  active?: boolean;
}

export default function NavItemSkeleton({ active }: NavItemSkeletonProps) {
  return (
    <div
      className={`h-10 rounded-lg ${
        active
          ? "bg-blue-50 dark:bg-blue-900/30"
          : "bg-gray-100 dark:bg-gray-800"
      }`}
    />
  );
}
