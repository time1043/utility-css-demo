import { Menu } from "lucide-react";

interface MenuButtonSkeletonProps {
  onClick: () => void;
}

export default function MenuButtonSkeleton({
  onClick,
}: MenuButtonSkeletonProps) {
  return (
    <button
      className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      onClick={onClick}
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}
