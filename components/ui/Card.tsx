import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "selected" | "hover";
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  variant = "default",
  onClick,
}: CardProps) {
  const base = "rounded-sm border transition-all duration-200";

  const variants = {
    default: "bg-navy-800 border-navy-600/50 shadow-card",
    selected:
      "bg-navy-700 border-gold-500 shadow-gold-glow ring-1 ring-gold-500/30",
    hover:
      "bg-navy-800 border-navy-600/50 shadow-card hover:border-gold-500/50 hover:bg-navy-700 cursor-pointer",
  };

  return (
    <div
      className={cn(base, variants[variant], className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
