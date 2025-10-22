import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ChecklistCardProps {
  id: string;
  title: string;
  subtitle: string;
  totalSteps: number;
  completedSteps: number;
  colorScheme: string;
  recommended?: boolean;
}

export const ChecklistCard = ({
  id,
  title,
  subtitle,
  totalSteps,
  completedSteps,
  colorScheme,
  recommended = false,
}: ChecklistCardProps) => {
  const navigate = useNavigate();
  const percentage = Math.round((completedSteps / totalSteps) * 100);

  const handleClick = () => {
    navigate(`/checklist/${id}`);
  };

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 ${
        recommended ? "border-green-500 border-2" : ""
      }`}
      onClick={handleClick}
    >
      {recommended && (
        <Badge 
          className="absolute -top-2 -left-2 bg-green-500 hover:bg-green-600 text-white z-10 shadow-lg"
        >
          Recommended
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {completedSteps} of {totalSteps} steps completed
            </span>
            <span className="font-semibold text-primary">{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
        <Button
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          {completedSteps === 0 ? "Start Checklist" : "Continue Checklist"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
