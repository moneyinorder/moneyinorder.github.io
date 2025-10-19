import { useState } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChecklistItemData {
  id: string;
  title: string;
  description: string;
  details?: string;
  isOptional?: boolean;
  branches?: {
    question: string;
    options: { label: string; nextId?: string }[];
  };
}

interface ChecklistItemProps {
  item: ChecklistItemData;
  stepNumber: number;
  isCompleted: boolean;
  onToggle: (id: string) => void;
  isBranched?: boolean;
}

export const ChecklistItem = ({
  item,
  stepNumber,
  isCompleted,
  onToggle,
  isBranched = false,
}: ChecklistItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative bg-card rounded-xl border transition-all duration-300",
        isCompleted
          ? "border-success/30 bg-success/5"
          : "border-border hover:border-primary/30 hover:shadow-md",
        isBranched && "ml-8 border-l-4 border-l-primary/40"
      )}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Step Number */}
          <div
            className={cn(
              "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300",
              isCompleted
                ? "bg-gradient-success text-success-foreground"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {stepNumber}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3
                  className={cn(
                    "text-lg font-semibold mb-2 transition-colors duration-200",
                    isCompleted ? "text-success" : "text-foreground"
                  )}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.isOptional && (
                  <span className="inline-block mt-2 text-xs font-medium text-accent px-2 py-1 bg-accent/10 rounded-full">
                    Optional
                  </span>
                )}
              </div>

              {/* Checkbox */}
              <button
                onClick={() => onToggle(item.id)}
                className={cn(
                  "flex-shrink-0 transition-transform duration-200 hover:scale-110",
                  isCompleted && "animate-check-bounce"
                )}
                aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-7 h-7 text-success" />
                ) : (
                  <Circle className="w-7 h-7 text-muted-foreground hover:text-primary" />
                )}
              </button>
            </div>

            {/* Expandable Details */}
            {item.details && (
              <div className="mt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  {isExpanded ? "Hide" : "Show"} details
                </button>
                {isExpanded && (
                  <div className="mt-3 p-4 bg-muted/50 rounded-lg text-sm text-foreground leading-relaxed animate-accordion-down">
                    {item.details}
                  </div>
                )}
              </div>
            )}

            {/* Branching Options */}
            {item.branches && (
              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-3">
                  {item.branches.question}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.branches.options.map((option, idx) => (
                    <button
                      key={idx}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
