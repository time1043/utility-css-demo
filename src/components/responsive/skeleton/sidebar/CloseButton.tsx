import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      className="lg:hidden p-1 text-gray-500"
      onClick={onClick}
    >
      <X className="w-5 h-5" />
    </button>
  );
}
