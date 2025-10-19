import { ChecklistItemData } from "@/components/ChecklistItem";

export interface ChecklistSection {
  id: string;
  title: string;
  subtitle: string;
  colorScheme: "foundation" | "growth" | "optimize";
  items: ChecklistItemData[];
}

export const checklistData: ChecklistSection[] = [
  {
    id: "foundation",
    title: "🛡️ Foundation",
    subtitle: "Build your financial safety net",
    colorScheme: "foundation",
    items: [
      {
        id: "emergency-fund-small",
        title: "Build a small Emergency Fund",
        description: "Either $1,000 or one month's expenses.",
        details:
          "This initial emergency fund acts as a buffer against unexpected expenses like car repairs or medical bills. Keep it in a easily accessible savings account. This prevents you from going into debt when life throws curveballs.",
      },
      {
        id: "401k-match",
        title: "Contribute enough to your 401(k) to get the full company match",
        description: "If your employer offers a retirement match to a 401(k), 403(b), or similar.",
        details:
          "This is literally free money from your employer. If they match 50% up to 6% of your salary, and you're not contributing at least 6%, you're leaving money on the table. Most matches vest immediately or over a few years.",
      },
      {
        id: "high-interest-debt",
        title: "Pay off all high-interest debt",
        description: "Anything over 10% interest rate.",
        details:
          "High-interest debt (credit cards, payday loans, etc.) costs you significantly more than any investment returns you might earn. Focus on paying these off aggressively using either the avalanche method (highest interest first) or snowball method (smallest balance first).",
      },
      {
        id: "emergency-fund-full",
        title: "Increase your emergency fund to 3-6 months of expenses",
        description: "Build a robust safety net for major life events.",
        details:
          "Calculate your essential monthly expenses (housing, food, utilities, insurance, minimum debt payments) and multiply by 3-6 months. If you have a stable job, 3 months may suffice. Self-employed or single-income households should aim for 6 months. Keep this in a high-yield savings account.",
      },
    ],
  },
  {
    id: "growth",
    title: "📈 Growth",
    subtitle: "Accelerate your wealth building",
    colorScheme: "growth",
    items: [
      {
        id: "moderate-debt",
        title: "Pay off moderate-interest debt",
        description: "Any debt over 4-5% interest, excluding mortgage.",
        details:
          "This includes student loans, car loans, and personal loans with moderate rates. While not as urgent as high-interest debt, paying these off frees up cash flow and reduces risk. Consider whether to pay these off or invest based on your risk tolerance.",
      },
      {
        id: "max-ira",
        title: "Max out yearly contributions for your IRA or Roth IRA",
        description: "Take advantage of tax-advantaged retirement accounts.",
        details:
          "For 2024, you can contribute up to $7,000 ($8,000 if 50+) to an IRA or Roth IRA. Traditional IRA contributions may be tax-deductible, while Roth IRA contributions are after-tax but grow tax-free. If you're over the Roth income limit, consider a backdoor Roth IRA conversion.",
        branches: {
          question: "Which IRA type is best for you?",
          options: [{ label: "Traditional IRA (tax deduction now)" }, { label: "Roth IRA (tax-free growth)" }],
        },
      },
      {
        id: "large-expenses",
        title: "Save for large expected expenses in the next 5 years",
        description: "House down payment, car, wedding, etc.",
        details:
          "Keep these funds in a high-yield savings account or short-term CD. Don't invest money you'll need in the near term in the stock market. Calculate your target amount and timeline, then set up automatic transfers to reach your goal.",
      },
      {
        id: "retirement-15percent",
        title: "Increase to 15% of pre-tax income toward retirement",
        description: "Build substantial long-term wealth.",
        details:
          "Contribute to your 401(k), 403(b), Individual 401(k), SEP-IRA, or if none are available, a taxable brokerage account. This 15% includes your employer match. Invest in low-cost index funds for long-term growth.",
      },
    ],
  },
  {
    id: "optimize",
    title: "🚀 Optimize",
    subtitle: "Maximize your financial potential",
    colorScheme: "optimize",
    items: [
      {
        id: "hsa",
        title: "Max out your Health Savings Account (HSA)",
        description: "Triple tax benefits if you have a high-deductible health plan.",
        details:
          "HSAs offer tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses. In 2024, you can contribute up to $4,150 (individual) or $8,300 (family). This is one of the most powerful tax-advantaged accounts available.",
        isOptional: true,
        branches: {
          question: "Do you have a high-deductible health plan?",
          options: [{ label: "Yes" }, { label: "No, not eligible" }],
        },
      },
      {
        id: "529-plan",
        title: "Contribute to a 529 plan or education savings",
        description: "If you have or plan to have children.",
        details:
          "529 plans offer tax-free growth for education expenses. Many states offer tax deductions for contributions. You can also use it for K-12 tuition (up to $10,000/year) and qualified student loan repayments.",
        isOptional: true,
        branches: {
          question: "Do you have children or plan to?",
          options: [{ label: "Yes" }, { label: "No, skip this" }],
        },
      },
      {
        id: "max-401k",
        title: "Max out your 401(k) contributions",
        description: "Contribute up to the annual limit.",
        details:
          "For 2024, the 401(k) contribution limit is $23,000 ($30,500 if 50+). After achieving previous goals, maxing your 401(k) provides maximum tax-advantaged space for retirement savings.",
      },
      {
        id: "mega-backdoor-roth",
        title: "Consider Mega Backdoor Roth IRA",
        description: "If your 401(k) plan allows after-tax contributions.",
        details:
          "Some 401(k) plans allow after-tax contributions beyond the $23,000 limit, up to $69,000 total (including employer match). You can then convert these to Roth, allowing for significant tax-free growth. This is a powerful but complex strategy.",
        isOptional: true,
      },
      {
        id: "taxable-brokerage",
        title: "Invest additional savings in a taxable brokerage account",
        description: "For goals beyond retirement or early retirement.",
        details:
          "Once you've maxed all tax-advantaged accounts, invest in a taxable brokerage account with tax-efficient funds. Consider tax-loss harvesting and holding investments for over a year to benefit from long-term capital gains rates.",
      },
      {
        id: "advanced-strategies",
        title: "Explore advanced strategies",
        description: "Real estate, business investments, or other alternatives.",
        details:
          "At this stage, consider diversification into real estate (rental properties, REITs), starting or investing in businesses, or other alternative investments. These typically require more active management and higher risk tolerance. Consider consulting with a fee-only financial advisor.",
        isOptional: true,
      },
    ],
  },
];
