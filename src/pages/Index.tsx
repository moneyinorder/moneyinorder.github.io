import { useState, useEffect } from "react";
import { ChecklistCard } from "@/components/ChecklistCard";
import { checklistData } from "@/data/checklistData";
import { ListChecks } from "lucide-react";

const getStorageKey = (checklistId: string) => `checklist-progress-${checklistId}`;

const Index = () => {
  const [checklistProgress, setChecklistProgress] = useState<
    Record<string, number>
  >({});

  // Load progress for all checklists
  useEffect(() => {
    const progress: Record<string, number> = {};
    checklistData.forEach((checklist) => {
      const stored = localStorage.getItem(getStorageKey(checklist.id));
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          progress[checklist.id] = parsed.length;
        } catch (e) {
          progress[checklist.id] = 0;
        }
      } else {
        progress[checklist.id] = 0;
      }
    });
    setChecklistProgress(progress);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <ListChecks className="w-12 h-12 mr-3" />
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-slide-in-up">
            Financial Checklists
          </h1>
          <p className="text-xl opacity-90">
            Choose a checklist to start your journey to financial freedom
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklistData.map((checklist) => {
              const totalSteps = checklist.sections.reduce(
                (acc, section) => acc + section.items.length,
                0
              );
              const completedSteps = checklistProgress[checklist.id] || 0;

              return (
                <ChecklistCard
                  key={checklist.id}
                  id={checklist.id}
                  title={checklist.title}
                  subtitle={checklist.subtitle}
                  totalSteps={totalSteps}
                  completedSteps={completedSteps}
                  colorScheme="primary"
                />
              );
            })}
          </div>

          {/* Empty State for future checklists */}
          {checklistData.length === 1 && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                More checklists coming soon! 🚀
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
