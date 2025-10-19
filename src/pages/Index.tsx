import { useState, useEffect } from "react";
import { ChecklistItem } from "@/components/ChecklistItem";
import { ChecklistSection } from "@/components/ChecklistSection";
import { ProgressBar } from "@/components/ProgressBar";
import { checklistData } from "@/data/checklistData";
import { Shield, TrendingUp, Rocket } from "lucide-react";

const STORAGE_KEY = "personal-finance-checklist";

const Index = () => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  // Load completed items from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCompletedItems(new Set(parsed));
      } catch (e) {
        console.error("Error loading saved progress:", e);
      }
    }
  }, []);

  // Save completed items to localStorage
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(Array.from(completedItems))
    );
  }, [completedItems]);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Calculate total steps
  const totalSteps = checklistData.reduce(
    (acc, section) => acc + section.items.length,
    0
  );

  const sectionIcons = {
    foundation: <Shield className="w-7 h-7 text-primary" />,
    growth: <TrendingUp className="w-7 h-7 text-accent" />,
    optimize: <Rocket className="w-7 h-7 text-primary" />,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <ProgressBar completed={completedItems.size} total={totalSteps} />

      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-slide-in-up">
            Personal Finance Checklist
          </h1>
          <p className="text-xl opacity-90 mb-2">
            Your roadmap to financial freedom
          </p>
          <p className="text-sm opacity-75">
            {completedItems.size} of {totalSteps} steps completed
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Follow this step-by-step guide to build a solid financial
              foundation, grow your wealth, and optimize your financial future.
              Each step builds on the previous one—check them off as you go!
            </p>
          </div>

          {/* Checklist Sections */}
          {checklistData.map((section, sectionIndex) => {
            let stepCounter =
              checklistData
                .slice(0, sectionIndex)
                .reduce((acc, s) => acc + s.items.length, 0) + 1;

            return (
              <ChecklistSection
                key={section.id}
                title={section.title}
                subtitle={section.subtitle}
                colorScheme={section.colorScheme}
                icon={sectionIcons[section.colorScheme]}
              >
                {section.items.map((item) => {
                  const currentStep = stepCounter++;
                  return (
                    <ChecklistItem
                      key={item.id}
                      item={item}
                      stepNumber={currentStep}
                      isCompleted={completedItems.has(item.id)}
                      onToggle={toggleItem}
                    />
                  );
                })}
              </ChecklistSection>
            );
          })}

          {/* Footer */}
          <footer className="text-center py-12">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-card rounded-full border border-border shadow-sm">
              <p className="text-sm text-muted-foreground">
                Progress is saved automatically • Keep going! 💪
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
