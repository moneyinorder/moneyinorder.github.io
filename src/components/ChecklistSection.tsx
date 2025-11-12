import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCheck } from "lucide-react";

interface ChecklistSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  colorScheme: "foundation" | "growth" | "optimize";
  icon?: ReactNode;
  completedCount: number;
  totalCount: number;
  onMarkAllComplete: () => void;
}

export const ChecklistSection = ({
  title,
  subtitle,
  children,
  colorScheme,
  icon,
  completedCount,
  totalCount,
  onMarkAllComplete,
}: ChecklistSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const allComplete = completedCount === totalCount;

  return (
    <section
      className={cn(
        "py-6 px-4 sm:py-8 sm:px-6 rounded-2xl sm:rounded-3xl transition-colors duration-300",
        colorScheme === "foundation" && "bg-section-foundation",
        colorScheme === "growth" && "bg-section-growth",
        colorScheme === "optimize" && "bg-section-optimize"
      )}
    >
      <div className="max-w-3xl mx-auto">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 mb-4">
              <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full">
                {icon && (
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex-shrink-0">
                    {icon}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{title}</h2>
                  {subtitle && (
                    <p className="text-muted-foreground text-base sm:text-lg">{subtitle}</p>
                  )}
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                    {completedCount} of {totalCount} items complete
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto sm:flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onMarkAllComplete}
                  disabled={allComplete}
                  className="flex-1 sm:flex-initial"
                >
                  <CheckCheck className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Mark All Complete</span>
                  <span className="sm:hidden">Mark All</span>
                </Button>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 flex-shrink-0">
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        !isOpen && "-rotate-90"
                      )}
                    />
                    <span className="sr-only">Toggle section</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
          </div>
          
          <CollapsibleContent>
            <div className="space-y-4">{children}</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};
