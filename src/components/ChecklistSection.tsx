import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChecklistSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  colorScheme: "foundation" | "growth" | "optimize";
  icon?: ReactNode;
}

export const ChecklistSection = ({
  title,
  subtitle,
  children,
  colorScheme,
  icon,
}: ChecklistSectionProps) => {
  return (
    <section
      className={cn(
        "py-12 px-6 rounded-3xl transition-colors duration-300",
        colorScheme === "foundation" && "bg-section-foundation",
        colorScheme === "growth" && "bg-section-growth",
        colorScheme === "optimize" && "bg-section-optimize"
      )}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          {icon && (
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              {icon}
            </div>
          )}
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  );
};
