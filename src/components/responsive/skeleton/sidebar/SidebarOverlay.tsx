interface SidebarOverlayProps {
  onClick: () => void;
}

export default function SidebarOverlay({ onClick }: SidebarOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-40 bg-black/50 lg:hidden"
      onClick={onClick}
    />
  );
}
