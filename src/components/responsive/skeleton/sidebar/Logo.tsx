import { LayoutDashboard } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <LayoutDashboard className="w-6 h-6" />
      <span className="text-xl font-bold">Logo</span>
    </div>
  );
}
