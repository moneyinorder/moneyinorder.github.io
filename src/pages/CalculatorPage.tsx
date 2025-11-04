import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrendingUp, Home, AlertCircle, Info, ArrowLeft } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { useNavigate } from "react-router-dom";

export default function CalculatorPage() {
  const navigate = useNavigate();
  const [debtAmount, setDebtAmount] = useState("300000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [termYears, setTermYears] = useState("30");
  const [monthlySavings, setMonthlySavings] = useState("3000");
  const [investmentReturn, setInvestmentReturn] = useState("8");
  const [taxRate, setTaxRate] = useState("25");
  const [result, setResult] = useState<{
    investingTotal: number;
    payingDebtTotal: number;
    difference: number;
    recommendation: string;
  } | null>(null);

  const calculateComparison = () => {
    const principal = parseFloat(debtAmount);
    const rate = parseFloat(interestRate) / 100;
    const years = parseFloat(termYears);
    const monthly = parseFloat(monthlySavings);
    const invReturn = parseFloat(investmentReturn) / 100;
    const tax = parseFloat(taxRate) / 100 || 0;

    if (!principal || !rate || !years || !monthly || !invReturn) {
      return;
    }

    const months = years * 12;
    const monthlyRate = rate / 12;
    const invMonthlyRate = invReturn / 12;
    
    const minPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                       (Math.pow(1 + monthlyRate, months) - 1);

    const extraForInvesting = monthly - minPayment;
    let investingBalance = 0;
    let remainingDebt = principal;
    
    for (let i = 0; i < months; i++) {
      const interest = remainingDebt * monthlyRate * (1 - tax);
      const principalPayment = minPayment - (remainingDebt * monthlyRate);
      remainingDebt -= principalPayment;
      
      if (extraForInvesting > 0) {
        investingBalance = (investingBalance + extraForInvesting) * (1 + invMonthlyRate);
      }
    }
    const investingTotal = investingBalance;

    let debtBalance = principal;
    let savingsBalance = 0;
    let debtPaidOff = false;
    let monthPaidOff = 0;
    
    for (let i = 0; i < months; i++) {
      if (!debtPaidOff && debtBalance > 0) {
        const interest = debtBalance * monthlyRate * (1 - tax);
        const principalPayment = Math.min(monthly - interest, debtBalance);
        debtBalance -= principalPayment;
        
        const leftover = monthly - interest - principalPayment;
        if (leftover > 0) {
          savingsBalance = (savingsBalance + leftover) * (1 + invMonthlyRate);
        }
        
        if (debtBalance <= 0) {
          debtPaidOff = true;
          monthPaidOff = i;
        }
      } else {
        savingsBalance = (savingsBalance + monthly) * (1 + invMonthlyRate);
      }
    }
    const payingDebtTotal = savingsBalance;

    const difference = investingTotal - payingDebtTotal;
    const recommendation = difference > 0 
      ? "Investing while paying minimum on debt yields higher returns"
      : "Paying down debt aggressively yields better results";

    setResult({
      investingTotal,
      payingDebtTotal,
      difference: Math.abs(difference),
      recommendation
    });
  };

  // Auto-calculate when inputs change
  useEffect(() => {
    if (debtAmount && interestRate && termYears && monthlySavings && investmentReturn) {
      calculateComparison();
    }
  }, [debtAmount, interestRate, termYears, monthlySavings, investmentReturn, taxRate]);

  const chartData = result ? [
    {
      name: "Investing Strategy",
      value: result.investingTotal,
      fill: "hsl(var(--primary))"
    },
    {
      name: "Debt Payoff Strategy",
      value: result.payingDebtTotal,
      fill: "hsl(var(--chart-2))"
    }
  ] : [];

  // Generate timeline data for progression chart
  const generateTimelineData = () => {
    if (!result) return [];

    const principal = parseFloat(debtAmount);
    const rate = parseFloat(interestRate) / 100;
    const years = parseFloat(termYears);
    const monthly = parseFloat(monthlySavings);
    const invReturn = parseFloat(investmentReturn) / 100;
    const tax = parseFloat(taxRate) / 100 || 0;

    if (!principal || !rate || !years || !monthly || !invReturn) return [];

    const months = years * 12;
    const monthlyRate = rate / 12;
    const invMonthlyRate = invReturn / 12;
    const minPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                       (Math.pow(1 + monthlyRate, months) - 1);
    const extraForInvesting = monthly - minPayment;

    const timelineData = [];
    let investingBalance = 0;
    let remainingDebt1 = principal;
    let debtBalance = principal;
    let savingsBalance = 0;
    let debtPaidOff = false;

    // Sample every 12 months for visualization
    for (let i = 0; i <= months; i += 12) {
      const year = i / 12;
      
      // Calculate investing strategy balance at this point
      let tempInvestingBalance = 0;
      let tempRemainingDebt = principal;
      for (let j = 0; j < i; j++) {
        const interest = tempRemainingDebt * monthlyRate * (1 - tax);
        const principalPayment = minPayment - (tempRemainingDebt * monthlyRate);
        tempRemainingDebt -= principalPayment;
        if (extraForInvesting > 0) {
          tempInvestingBalance = (tempInvestingBalance + extraForInvesting) * (1 + invMonthlyRate);
        }
      }

      // Calculate debt payoff strategy balance at this point
      let tempDebtBalance = principal;
      let tempSavingsBalance = 0;
      let tempDebtPaidOff = false;
      for (let j = 0; j < i; j++) {
        if (!tempDebtPaidOff && tempDebtBalance > 0) {
          const interest = tempDebtBalance * monthlyRate * (1 - tax);
          const principalPayment = Math.min(monthly - interest, tempDebtBalance);
          tempDebtBalance -= principalPayment;
          const leftover = monthly - interest - principalPayment;
          if (leftover > 0) {
            tempSavingsBalance = (tempSavingsBalance + leftover) * (1 + invMonthlyRate);
          }
          if (tempDebtBalance <= 0) {
            tempDebtPaidOff = true;
          }
        } else {
          tempSavingsBalance = (tempSavingsBalance + monthly) * (1 + invMonthlyRate);
        }
      }

      timelineData.push({
        year: year,
        investing: Math.round(tempInvestingBalance),
        payingDebt: Math.round(tempSavingsBalance)
      });
    }

    return timelineData;
  };

  const timelineData = generateTimelineData();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-primary-foreground py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-10 h-10" />
            <Home className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Invest vs Pay Down Debt Calculator
          </h1>
          <p className="text-lg opacity-90">
            Compare the financial outcomes of investing versus paying down debt aggressively
          </p>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Educational purposes only.</strong> This tool provides general calculations and should not be considered financial advice. 
              Consult with a financial advisor for personalized guidance.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Input Your Information</CardTitle>
              <CardDescription>Enter your debt and investment details to see the comparison</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="debtAmount">Total Debt Amount ($)</Label>
                  <Input
                    id="debtAmount"
                    type="number"
                    placeholder="300000"
                    value={debtAmount}
                    onChange={(e) => setDebtAmount(e.target.value)}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestRate">Interest Rate on Debt (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    placeholder="6.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="termYears">Term of Debt (years)</Label>
                  <Input
                    id="termYears"
                    type="number"
                    placeholder="30"
                    value={termYears}
                    onChange={(e) => setTermYears(e.target.value)}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlySavings">Monthly Amount Available ($)</Label>
                  <Input
                    id="monthlySavings"
                    type="number"
                    placeholder="3000"
                    value={monthlySavings}
                    onChange={(e) => setMonthlySavings(e.target.value)}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentReturn">Expected Investment Return (%)</Label>
                  <Input
                    id="investmentReturn"
                    type="number"
                    step="0.1"
                    placeholder="8"
                    value={investmentReturn}
                    onChange={(e) => setInvestmentReturn(e.target.value)}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxRate">Tax Rate (% - for mortgage interest deduction)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    step="0.1"
                    placeholder="25"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {result && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Final Comparison</CardTitle>
                  <CardDescription>After {termYears} years</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="name" />
                      <YAxis 
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        formatter={(value: number) => `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
                      />
                      <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Results After {termYears} Years</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/20 rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">Investing Strategy</h4>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        ${result.investingTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pay minimum on debt, invest the rest
                      </p>
                    </div>

                    <div className="p-4 bg-secondary/20 rounded-lg border">
                      <div className="flex items-center gap-2 mb-2">
                        <Home className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">Debt Payoff Strategy</h4>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        ${result.payingDebtTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pay down debt first, then invest
                      </p>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Difference:</strong> ${result.difference.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      <br />
                      <strong>Recommendation:</strong> {result.recommendation}
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Beyond the Numbers:</strong> While one strategy may yield higher returns mathematically, 
                      consider your personal circumstances. If you're nearing retirement, have uncertain employment, 
                      or simply value the peace of mind that comes with being debt-free, paying down your mortgage 
                      can still be the better choice. Financial security and reduced risk are valuable benefits that 
                      aren't always reflected in pure dollar calculations.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
