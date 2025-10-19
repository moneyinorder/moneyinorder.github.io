import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface ProgressBarProps {
  completed: number;
  total: number;
}

export const ProgressBar = ({ completed, total }: ProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-card rounded-full shadow-lg px-5 py-3 flex items-center gap-3 border border-border min-w-[180px]">
        <CheckCircle2 className="w-5 h-5 text-success" />
        <div className="flex-1">
          <div className="text-xs font-medium text-muted-foreground mb-1">
            Progress
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-success transition-all duration-500 ease-out origin-left"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-sm font-bold text-foreground min-w-[3ch]">
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
