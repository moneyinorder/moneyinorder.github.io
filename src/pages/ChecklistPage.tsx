import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChecklistItem } from "@/components/ChecklistItem";
import { ChecklistSection } from "@/components/ChecklistSection";
import { ProgressBar } from "@/components/ProgressBar";
import { checklistData } from "@/data/checklistData";
import { Shield, TrendingUp, Rocket, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const getStorageKey = (checklistId: string) => `checklist-progress-${checklistId}`;

const ChecklistPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [showKofi, setShowKofi] = useState(false);

  // Validate checklist exists
  const checklist = checklistData.find((c) => c.id === id);
  
  useEffect(() => {
    if (!checklist) {
      navigate("/");
    }
  }, [checklist, navigate]);

  // Load completed items from localStorage
  useEffect(() => {
    if (!id) return;
    const stored = localStorage.getItem(getStorageKey(id));
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCompletedItems(new Set(parsed));
      } catch (e) {
        console.error("Error loading saved progress:", e);
      }
    }
  }, [id]);

  // Save completed items to localStorage
  useEffect(() => {
    if (!id) return;
    localStorage.setItem(
      getStorageKey(id),
      JSON.stringify(Array.from(completedItems))
    );
  }, [completedItems, id]);

  const toggleItem = (itemId: string) => {
    setCompletedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const markSectionComplete = (sectionId: string) => {
    const section = checklist?.sections.find((s) => s.id === sectionId);
    if (!section) return;

    setCompletedItems((prev) => {
      const newSet = new Set(prev);
      section.items.forEach((item) => {
        newSet.add(item.id);
      });
      return newSet;
    });
  };

  if (!checklist) {
    return null;
  }

  // Calculate total steps
  const totalSteps = checklist.sections.reduce(
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
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Checklists
          </Button>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-slide-in-up">
              {checklist.title}
            </h1>
            <p className="text-xl opacity-90 mb-2">{checklist.description}</p>
            <p className="text-sm opacity-75">
              {completedItems.size} of {totalSteps} steps completed
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Follow this step-by-step guide to build a solid financial
              foundation, grow your wealth, and optimize your financial future.
              Each step builds on the previous one—check them off as you go!
            </p>

            {/* Ko-fi Support Section */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-3">
                If this checklist was helpful to you, please consider
              </p>
              <Button
                onClick={() => setShowKofi(!showKofi)}
                variant="default"
                className="mx-auto"
              >
                {showKofi ? "Hide" : "☕ Buy Me a Coffee"}
              </Button>
              
              {showKofi && (
                <div className="mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <iframe
                    id="kofiframe"
                    src="https://ko-fi.com/personalfinancehelp/?hidefeed=true&widget=true&embed=true&preview=true"
                    className="border-none w-full rounded-lg"
                    style={{ background: '#f9f9f9' }}
                    height="712"
                    title="personalfinancehelp"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Checklist Sections */}
          {checklist.sections.map((section, sectionIndex) => {
            let stepCounter =
              checklist.sections
                .slice(0, sectionIndex)
                .reduce((acc, s) => acc + s.items.length, 0) + 1;

            const sectionCompletedCount = section.items.filter((item) =>
              completedItems.has(item.id)
            ).length;

            return (
              <ChecklistSection
                key={section.id}
                title={section.title}
                subtitle={section.subtitle}
                colorScheme={section.colorScheme}
                icon={sectionIcons[section.colorScheme]}
                completedCount={sectionCompletedCount}
                totalCount={section.items.length}
                onMarkAllComplete={() => markSectionComplete(section.id)}
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

export default ChecklistPage;
