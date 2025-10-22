import { ChecklistItemData } from "@/components/ChecklistItem";

export interface ChecklistSection {
  id: string;
  title: string;
  subtitle: string;
  colorScheme: "foundation" | "growth" | "optimize";
  items: ChecklistItemData[];
}

export interface Checklist {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  tags: string[];
  sections: ChecklistSection[];
}

export const checklistData: Checklist[] = [
  {
    id: "personal-finance",
    title: "Personal Finance",
    description: "Your roadmap to financial freedom",
    subtitle: "Build your financial foundation step by step",
    tags: ["financial independence", "personal finance", "money habits", "retirement", "building wealth"],
    sections: [
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
              "This is free money from your employer. If they match 50% up to 6% of your salary, and you're not contributing at least 6%, you're leaving money on the table. Most matches vest immediately or over a few years.",
          },
          {
            id: "high-interest-debt",
            title: "Pay off all high-interest debt",
            description: "Anything over 10% interest rate.",
            details:
              "High-interest debt (credit cards, payday loans, etc.) costs you significantly more than any investment returns you might earn. \n Focus on paying these off aggressively using either the avalanche method (highest interest first) or snowball method (smallest balance first). The snowball method helps you notch a few wins and stay motivated whereas the avalanche method is the mathematically optimal approach. Both are great, and for both, try to earmark a set amount of money for paying down debt each month as part of your budget.",
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
    ],
  },
  {
    id: "having-children",
    title: "Having Children",
    description: "Financial preparation for parenthood",
    subtitle: "Plan ahead for your growing family",
    tags: ["children", "baby", "parents"],
    sections: [
      {
        id: "before-children",
        title: "🛡️ Before Having Children",
        subtitle: "Prepare your finances before baby arrives",
        colorScheme: "foundation",
        items: [
          {
            id: "personal-finance-first",
            title: "Take care of yourself first",
            description: "Just like putting your mask on in an airplane before helping others.",
            details:
              "Before having children, ensure your own financial house is in order. This means having an emergency fund, manageable debt, and a solid budget. Complete the [Personal Finance Checklist](/checklist/personal-finance) first to build your foundation.",
          },
          {
            id: "child-budget",
            title: "Create a new budget for child expenses",
            description: "Plan for increased costs including childcare, diapers, and more.",
            details:
              "Children are expensive. Budget for: diapers ($70-80/month), formula if not breastfeeding ($150-200/month), childcare ($800-2,000/month depending on location), clothing, medical expenses, and toys. The USDA estimates middle-income families spend $12,000-14,000 per year per child.",
          },
          {
            id: "emergency-fund-children",
            title: "Increase emergency fund to 6-12 months",
            description: "Larger safety net for a larger family.",
            details:
              "With children, unexpected expenses multiply. Aim for 6-12 months of expenses (higher end if single income household). This protects your family if you need to take unpaid leave, have medical emergencies, or face job loss.",
          },
        ],
      },
      {
        id: "after-birth",
        title: "👶 After Child is Born",
        subtitle: "Essential financial steps for new parents",
        colorScheme: "growth",
        items: [
          {
            id: "update-beneficiaries",
            title: "Update beneficiaries on all accounts",
            description: "Retirement accounts, life insurance, bank accounts, etc.",
            details:
              "Review and update beneficiaries on your 401(k), IRA, life insurance policies, bank accounts, and investment accounts. Don't forget about payable-on-death (POD) designations. These designations supersede your will, so keeping them current is critical.",
          },
          {
            id: "create-will",
            title: "Create or update your will",
            description: "Name guardians for your children and specify asset distribution.",
            details:
              "A will is essential with children. Name a guardian (and backup guardian) for minor children, specify how assets should be distributed, and name an executor. Consider setting up a trust to manage assets until children reach adulthood. Consult an estate planning attorney for your specific situation.",
          },
          {
            id: "life-insurance",
            title: "Get life insurance",
            description: "Term life insurance provides affordable protection for your family.",
            details:
              "In the majority of cases, term life insurance is more appropriate than whole life. Calculate coverage as 10-12x your annual income, or enough to replace your income until children are independent plus pay off debts. A 20-30 year term policy is typically recommended. Both parents should be insured, including stay-at-home parents (childcare replacement costs are significant).",
          },
          {
            id: "health-insurance-dependent",
            title: "Update health insurance for your new dependent",
            description: "Add your child to your health insurance plan.",
            details:
              "You typically have 30-60 days from birth to add your baby to your health insurance plan (qualifying life event). Compare your plan with your spouse's to choose the best coverage. Don't miss this deadline or you'll have to wait until open enrollment.",
          },
          {
            id: "dependent-care-fsa",
            title: "Enroll in Dependent Care FSA",
            description: "Save pre-tax dollars for childcare expenses.",
            details:
              "A Dependent Care FSA allows you to set aside up to $5,000/year (per household) pre-tax for qualified childcare expenses. This covers daycare, preschool, before/after school care, and summer day camps. Calculate carefully—unused funds are forfeited at year-end.",
          },
          {
            id: "529-plan",
            title: "Open a 529 college savings plan",
            description: "Start saving for education expenses with tax-free growth.",
            details:
              "529 plans offer tax-free growth for education expenses. You can use any state's plan, though your state may offer tax deductions for contributions. Start with automatic monthly contributions—even $50-100/month adds up over 18 years due to compound growth. Grandparents can also contribute.",
          },
          {
            id: "estate-planning-docs",
            title: "Complete estate planning documents",
            description: "Power of attorney, healthcare directives, and living will.",
            details:
              "Beyond a will, establish durable power of attorney (financial decisions if incapacitated), healthcare power of attorney (medical decisions), and a living will (end-of-life care preferences). These protect your family if you're unable to make decisions yourself.",
          },
        ],
      },
      {
        id: "optimize-children",
        title: "🚀 Optimize",
        subtitle: "Advanced strategies for your child's financial future",
        colorScheme: "optimize",
        items: [
          {
            id: "increase-529",
            title: "Maximize 529 plan contributions",
            description: "Aim to cover a significant portion of college costs.",
            details:
              "For a child born today, 4 years of public in-state college may cost $200,000-250,000 (factoring in inflation). Private colleges could exceed $500,000. Use 529 calculators to set goals. Remember: you can adjust contributions based on scholarships, and funds can be transferred to siblings if needed.",
            isOptional: true,
          },
          {
            id: "custodial-ira",
            title: "Contribute to child's IRA when they have earned income",
            description: "Custodial Roth IRA for children with part-time jobs (typically 16+).",
            details:
              "Once your child has earned income (part-time job, modeling, acting, or working at a family business), they can contribute to a Roth IRA. You can contribute up to their earned income or $7,000 (2024), whichever is less. Starting at 16 and contributing $3,000/year could grow to over $500,000 by retirement due to decades of tax-free compound growth.",
            isOptional: true,
          },
          {
            id: "teach-financial-literacy",
            title: "Teach financial literacy",
            description: "Help your children develop healthy money habits.",
            details:
              "The most valuable gift is financial education. Teach budgeting with allowance, the power of compound interest, needs vs. wants, and responsible credit card use. Consider opening a custodial brokerage account to teach investing. Start age-appropriate conversations early—even young children can learn about saving and delayed gratification.",
            isOptional: true,
          },
          {
            id: "utma-ugma",
            title: "Consider UTMA/UGMA custodial accounts",
            description: "For flexibility beyond education expenses.",
            details:
              "Unlike 529 plans (education only), UTMA/UGMA accounts can fund anything for the child's benefit—first car, wedding, home down payment. However, these are taxable accounts and become the child's property at age 18-21 (state dependent). Contribute after maxing 529 if you want more flexibility.",
            isOptional: true,
          },
        ],
      },
    ],
  },
  {
    id: "marriage-relationships",
    title: "Marriage and Relationships",
    description: "Financial planning for couples",
    subtitle: "Build a strong financial partnership together",
    tags: ["marriage", "relationships", "partner", "wife", "husband", "girlfriend", "boyfriend"],
    sections: [
      {
        id: "foundation-conversations",
        title: "Foundation Conversations",
        subtitle: "Start with open, honest discussions",
        colorScheme: "foundation",
        items: [
          {
            id: "set-the-stage",
            title: "Set the stage for financial conversations",
            description: "Create a safe, non-judgmental space to discuss money.",
            details:
              "Start by expressing care: 'I care about you and want us to succeed financially together.' Acknowledge that personal finance wasn't taught in school—it's a skill you're building together. There's no shame in not knowing everything. Consider breaking topics into separate conversations rather than tackling everything at once to avoid overwhelm.",
          },
          {
            id: "shared-goals",
            title: "Discuss shared goals",
            description: "Find common ground through your aspirations together.",
            details:
              "Start with what you both want to achieve:\n\n• **Personal goals**: Career ambitions, personal growth\n• **Lifestyle**: What type of lifestyle do you want to live?\n• **Living situation**: Rent long-term or buy? What size home?\n• **Money history**: 'How did your family talk about money when you were growing up?' Understanding each other's money backgrounds helps explain current attitudes and behaviors.",
          },
          {
            id: "talk-income",
            title: "Talk about income",
            description: "Share your current financial situations openly.",
            details:
              "Discuss current income, employment stability, and career trajectory. Be transparent about salaries, bonuses, side income, and earning potential. This isn't about comparison—it's about understanding your combined resources and planning accordingly. Income disparities are common and manageable with the right approach.",
          },
          {
            id: "talk-debt",
            title: "Talk about debt",
            description: "Discuss existing debts without judgment.",
            details:
              "Share all debts openly: student loans, credit cards, car loans, personal loans. Discuss the context:\n\n• **Why do you have this debt?** (Education and covering essential expenses vs. discretionary purchases)\n• **What's your plan for paying it down?** Understanding the 'why' helps frame the conversation constructively. Focus on creating a shared plan to address debt together.",
          },
          {
            id: "decide-sharing",
            title: "Decide what to share and how to share expenses",
            description: "Determine how to split shared costs fairly.",
            details:
              "Focus on 'needs' like housing, food, utilities, and transportation. Two common approaches:\n\n• **Split equally (50/50)**: Each person pays half regardless of income\n• **Split proportionally**: Each person contributes based on their income percentage (e.g., if you earn 60% of combined income, you pay 60% of shared expenses)\n\nProportional splitting often works better when there's a significant income disparity. Choose what feels fair to both of you.",
          },
          {
            id: "manage-conflict",
            title: "Talk about how to manage future financial conflicts",
            description: "Establish a framework for handling disagreements.",
            details:
              "Financial disagreements will happen—that's normal. Agree on how you'll handle them:\n\n• **Return to your shared goals**: Use them as a tiebreaker when you disagree\n• **Set spending limits**: Agree on amounts that need discussion (e.g., purchases over $200)\n• **Regular check-ins**: Schedule monthly money conversations to stay aligned\n• **No surprises**: Commit to transparency about financial decisions\n\nThe goal isn't to avoid conflict, but to have a healthy way to work through it together.",
          },
        ],
      },
      {
        id: "before-marriage",
        title: "Before Marriage",
        subtitle: "Important decisions to make before tying the knot",
        colorScheme: "growth",
        items: [
          {
            id: "talk-children",
            title: "Talk about children",
            description: "Discuss your plans and expectations around having kids.",
            details:
              "Have honest conversations about:\n\n• **How many children** do you want (if any)?\n• **Education preferences**: Private vs. public schools?\n• **College support**: Will you financially support them through college? How much?\n• **Timeline**: When do you want to start a family?\n• **Childcare approach**: Stay-at-home parent, daycare, or family help?\n\nThese decisions have massive financial implications. Once you're aligned, refer to the [Having Children Checklist](/checklist/having-children) for detailed financial planning.",
            titleLink: "/checklist/having-children",
          },
          {
            id: "what-to-keep-separate",
            title: "Decide what to keep separate",
            description: "Not everything needs to be combined immediately.",
            details:
              "Don't rush to combine all finances—many couples maintain some separation even after marriage. Consider:\n\n• **Joint account for shared expenses**, individual accounts for personal spending\n• **Keep separate until marriage**: Dating and engaged couples often benefit from maintaining financial independence\n• **Personal 'fun money'**: Agree on amounts each person can spend without discussion\n• **Consider a prenup**: Especially if there's significant wealth disparity, business ownership, children from previous relationships, or family assets to protect. This isn't pessimistic—it's practical.",
          },
        ],
      },
      {
        id: "after-marriage",
        title: "After Marriage",
        subtitle: "Essential financial and legal updates",
        colorScheme: "optimize",
        items: [
          {
            id: "update-beneficiaries-marriage",
            title: "Update beneficiaries on all accounts",
            description: "Ensure your spouse is listed on retirement accounts, life insurance, etc.",
            details:
              "Review and update beneficiaries on:\n\n• Retirement accounts (401(k), IRA, Roth IRA)\n• Life insurance policies\n• Bank accounts and investment accounts\n• Payable-on-death (POD) designations\n\nBeneficiary designations supersede your will, so keeping them current is critical. Many people forget to do this and it can cause major issues later.",
          },
          {
            id: "children-checklist-link",
            title: "If you've decided to have children, follow the Having Children checklist",
            description: "Complete financial planning for starting your family.",
            details:
              "Having children brings significant financial changes and responsibilities. Follow the [Having Children Checklist](/checklist/having-children) to ensure you're financially prepared for parenthood, including budgeting for child expenses, life insurance, 529 plans, estate planning, and more.",
          },
          {
            id: "create-will-marriage",
            title: "Create or update your will",
            description: "Ensure your assets are distributed according to your wishes.",
            details:
              "Marriage changes your estate planning needs. Update or create a will that:\n\n• Names your spouse as primary beneficiary (if desired)\n• Specifies asset distribution\n• Names an executor\n• Addresses any children from previous relationships\n• Considers trusts if you have significant assets\n\nConsult an estate planning attorney for your specific situation, especially if you have complex assets or blended family considerations.",
          },
          {
            id: "life-disability-insurance",
            title: "Consider life and disability insurance",
            description: "Especially critical in single-income households.",
            details:
              "Protect your family's financial future:\n\n• **Life insurance**: Term life insurance is typically most appropriate. Calculate coverage as 10-12x annual income of the insured. Both spouses should be insured—even a stay-at-home spouse provides significant economic value (childcare, household management).\n• **Disability insurance**: Protects income if you become unable to work. Particularly important for the primary earner or in single-income households.\n• **Single-income households**: These protections are absolutely critical when one person's income supports the entire family.",
          },
        ],
      },
    ],
  },
];
