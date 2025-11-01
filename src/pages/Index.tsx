import { useState, useEffect } from "react";
import { ChecklistCard } from "@/components/ChecklistCard";
import { ToolCard } from "@/components/ToolCard";
import { checklistData } from "@/data/checklistData";
import { ListChecks, TrendingUp } from "lucide-react";

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
            Financial Checklists & Tools
          </h1>
          <p className="text-xl opacity-90">
            Checklists to guide your journey and tools to help you make informed decisions
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Checklists Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Checklists</h2>
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
                    recommended={checklist.id === "personal-finance"}
                  />
                );
              })}
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Financial Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                id="invest-vs-debt"
                title="Invest vs Pay Down Debt"
                description="Compare the financial outcomes of investing versus paying down debt aggressively"
                icon={TrendingUp}
                path="/calculator/invest-vs-debt"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
