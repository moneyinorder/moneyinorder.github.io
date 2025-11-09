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
        title: "Foundation",
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
        title: "Growth",
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
        title: "Optimize",
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
          },
          {
            id: "529-plan",
            title: "Contribute to a 529 plan or education savings",
            description: "If you have or plan to have children.",
            details:
              "529 plans offer tax-free growth for education expenses. Many states offer tax deductions for contributions. You can also use it for K-12 tuition (up to $10,000/year) and qualified student loan repayments.",
            isOptional: true,
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
        title: "Before Having Children",
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
        title: "After Having Children",
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
              "A Dependent Care FSA allows you to set aside up to $5,000/year (per household) pre-tax for qualified childcare expenses. This covers daycare, preschool, before/after school care, and summer day camps. Calculate carefully - unused funds are forfeited at year-end.",
          },
          {
            id: "529-plan",
            title: "Open a 529 college savings plan",
            description: "Start saving for education expenses with tax-free growth.",
            details:
              "529 plans offer tax-free growth for education expenses. You can use any state's plan, though your state may offer tax deductions for contributions. Start with automatic monthly contributions - even $50-100/month adds up over 18 years due to compound growth. Grandparents can also contribute.",
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
        title: "Optimize",
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
              "Once your child has earned income (part-time job, acting, or working at a family business), they can contribute to a Roth IRA. You can contribute up to their earned income or $7,000 (2024), whichever is less. Starting at 16 and contributing $3,000/year could grow to over $500,000 by retirement due to decades of tax-free compound growth.",
            isOptional: true,
          },
          {
            id: "teach-financial-literacy",
            title: "Teach financial literacy",
            description: "Help your children develop healthy money habits.",
            details:
              "The most valuable gift is financial education. Teach budgeting with allowance, the power of compound interest, needs vs. wants, and responsible credit card use. Consider opening a custodial brokerage account to teach investing. Start age-appropriate conversations early - even young children can learn about saving and delayed gratification.",
            isOptional: true,
          },
          {
            id: "utma-ugma",
            title: "Consider UTMA/UGMA custodial accounts",
            description: "For flexibility beyond education expenses.",
            details:
              "Unlike 529 plans (education only), UTMA/UGMA accounts can fund anything for the child's benefit - first car, wedding, home down payment. However, these are taxable accounts and become the child's property at age 18-21 (state dependent). Contribute after maxing 529 if you want more flexibility.",
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
              "Start by expressing care: 'I care about you and want us to succeed financially together.' Acknowledge that personal finance wasn't taught in school - it's a skill you're building together. There's no shame in not knowing everything. Consider breaking topics into separate conversations rather than tackling everything at once to avoid overwhelm.",
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
              "Discuss current income, employment stability, and career trajectory. Be transparent about salaries, bonuses, side income, and earning potential. This isn't about comparison - it's about understanding your combined resources and planning accordingly. Income disparities are common and manageable with the right approach.",
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
              "Financial disagreements will happen, and that's normal. Agree on how you'll handle them:\n\n• **Return to your shared goals**: Use them as a tiebreaker when you disagree\n• **Set spending limits**: Agree on amounts that need discussion (e.g., purchases over $200)\n• **Regular check-ins**: Schedule monthly money conversations to stay aligned\n• **No surprises**: Commit to transparency about financial decisions\n\nThe goal isn't to avoid conflict, but to have a healthy way to work through it together.",
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
              "Don't rush to combine all finances - many couples maintain some separation even after marriage. Consider:\n\n• **Joint account for shared expenses**, individual accounts for personal spending\n• **Keep separate until marriage**: Dating and engaged couples often benefit from maintaining financial independence\n• **Personal 'fun money'**: Agree on amounts each person can spend without discussion\n", 
          },
          {
            id: "talk-prenup",
            title: "Consider a prenup",
            description: " Especially if there's significant wealth disparity, business ownership, children from previous relationships, or family assets to protect.",
            details:
              "A prenuptial agreement can protect both parties and clarify financial expectations. It doesn't mean you expect divorce - it's a practical tool for transparency and shows that you care about each other's future selves. Discuss openly:\n\n• **What assets need protection?** Family businesses, inheritances, etc.\n• **Debt responsibility**: Who is responsible for pre-existing debts?\n• Consult a family law attorney to draft an agreement that meets both your needs.", 
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
              "Protect your family's financial future:\n\n• **Life insurance**: Term life insurance is typically most appropriate. Calculate coverage as 10-12x annual income of the insured. Both spouses should be insured - even a stay-at-home spouse provides significant economic value (childcare, household management).\n• **Disability insurance**: Protects income if you become unable to work. Particularly important for the primary earner or in single-income households.\n• **Single-income households**: These protections are absolutely critical when one person's income supports the entire family.",
          },
          {
            id: "children-checklist-link",
            title: "If you've decided to have children, follow the Having Children checklist",
            description: "Complete financial planning for starting your family.",
            details:
              "Having children brings significant financial changes and responsibilities. Follow the [Having Children Checklist](/checklist/having-children) to ensure you're financially prepared for parenthood, including budgeting for child expenses, life insurance, 529 plans, estate planning, and more.",
          },
        ],
      },
    ],
  },
  {
    id: "pet-ownership",
    title: "Pet Ownership",
    description: "Financial planning for responsible pet care",
    subtitle: "Prepare for the costs and joys of pet parenthood",
    tags: ["pet", "dog", "cat", "pets", "animal", "pet ownership", "pet expenses"],
    sections: [
      {
        id: "preparing",
        title: "Preparing for a Pet",
        subtitle: "Make sure you're ready for the commitment",
        colorScheme: "foundation",
        items: [
          {
            id: "assess-readiness",
            title: "Assess your lifestyle and readiness",
            description: "Pets are a 10-20+ year commitment requiring time and resources.",
            details:
              "Consider honestly:\n\n• **Time commitment**: Dogs need daily walks, attention, and training. Cats are more independent but still need daily care.\n• **Living situation**: Does your lease allow pets? Do you have adequate space?\n• **Travel habits**: Who will care for your pet when you're away?\n• **Financial stability**: Can you afford unexpected vet bills?\n• **Life stage**: Are major changes coming (moving, having children)?",
          },
          {
            id: "research-breeds",
            title: "Research breeds and temperaments",
            description: "Different breeds have vastly different needs and costs.",
            details:
              "Choose a pet that fits your lifestyle:\n\n• **Energy level**: High-energy breeds need more exercise and stimulation\n• **Size matters**: Larger dogs cost significantly more (food, medication doses, boarding)\n• **Health predispositions**: Some breeds are prone to expensive health issues (hip dysplasia, heart conditions, breathing problems in flat-faced breeds)\n• **Grooming needs**: Professional grooming can cost $50-100+ per visit\n• **Lifespan**: Smaller dogs typically live longer (12-18 years) vs. large breeds (8-12 years)\n\nResearch specific breeds thoroughly and consider adopting mixed breeds, which often have fewer genetic health issues.",
          },
          {
            id: "budget-initial-costs",
            title: "Budget for initial costs",
            description: "Getting a pet requires significant upfront investment.",
            details:
              "Initial costs typically include:\n\n• **Adoption fee**: $50-500 (often includes spay/neuter, initial vaccines)\n• **Purchase from breeder**: $500-3,000+ depending on breed\n• **Spay/neuter**: $200-500 if not included\n• **Initial vet visit**: $100-300 (exam, vaccines, preventatives)\n• **Supplies**: Crate, bed, bowls, collar, leash, toys ($200-500)\n• **Microchip**: $25-50\n• **Training classes**: $100-300 for basic obedience\n\nTotal initial cost: $1,000-5,000+ depending on choices made.",
          },
          {
            id: "budget-ongoing-costs",
            title: "Budget for ongoing monthly costs",
            description: "Pets require consistent expenses that add up significantly.",
            details:
              "Monthly costs vary by pet size and type:\n\n**Dogs:**\n• Food: $30-80/month (more for large breeds or special diets)\n• Preventatives: $20-60/month (flea, tick, heartworm)\n• Routine vet care: $40-80/month (averaged annually)\n• Grooming: $0-100/month (breed dependent)\n• Toys/supplies: $20-40/month\n\n**Average: $110-360/month for dogs, $50-150/month for cats**\n\n**Annual cost: $1,300-4,300 for dogs, $600-1,800 for cats**\n\nThis doesn't include unexpected vet emergencies, which can cost thousands.",
          },
        ],
      },
      {
        id: "getting-pet",
        title: "Getting Your Pet",
        subtitle: "Navigate the adoption or purchase process",
        colorScheme: "growth",
        items: [
          {
            id: "adopt-vs-buy",
            title: "Decide: Adopt or buy from a breeder?",
            description: "Both options have different costs and considerations.",
            details:
              "**Adoption (Shelter/Rescue):**\n• **Pros**: Lower cost ($50-500), saves a life, often includes spay/neuter and initial vaccines, adult temperament known\n• **Cons**: Unknown health history, may have behavioral issues, less choice in age/breed\n\n**Reputable Breeder:**\n• **Pros**: Known health history, predictable temperament, can choose specific breed, puppy/kitten from birth\n• **Cons**: Much more expensive ($1,000-3,000+), doesn't help shelter animals, wait lists common\n\n**Avoid pet stores and puppy mills** - they often source from inhumane breeding operations and dogs may have serious health/behavioral problems.",
          },
          {
            id: "vet-initial-exam",
            title: "Schedule an initial vet exam within 72 hours",
            description: "Early detection of health issues is critical.",
            details:
              "Get your new pet examined by a vet within 72 hours of adoption/purchase:\n\n• **Health screening**: Check for parasites, infections, congenital issues\n• **Vaccination plan**: Ensure they're up to date or create a schedule\n• **Preventative care**: Start flea, tick, and heartworm prevention\n• **Baseline health record**: Establishes their normal vitals and condition\n• **Adoption contracts**: Many require vet visit within 72 hours\n\nThis visit typically costs $100-300 but can save thousands by catching issues early.",
          },
          {
            id: "pet-proof-home",
            title: "Pet-proof your home",
            description: "Prevent accidents and expensive damage.",
            details:
              "Protect both your pet and your belongings:\n\n• **Remove hazards**: Toxic plants, chemicals, small objects, electrical cords\n• **Secure trash**: Pets can ingest dangerous items\n• **Protect valuables**: Put away items that could be chewed or broken\n• **Block off areas**: Use baby gates to limit access while training\n• **Outdoor safety**: Secure fencing, check for escape routes\n\nPreventing one emergency vet visit pays for all pet-proofing efforts.",
          },
          {
            id: "establish-routine",
            title: "Establish a care routine immediately",
            description: "Consistency helps with training and bonding.",
            details:
              "Create structure from day one:\n\n• **Feeding schedule**: Same times daily, appropriate portions\n• **Potty breaks**: Regular schedule (especially for puppies - every 2-3 hours)\n• **Exercise routine**: Daily walks, playtime\n• **Training time**: Short, consistent sessions\n• **Bonding activities**: Gentle play, grooming, quiet time together\n\nConsistent routines reduce behavioral problems.",
          },
        ],
      },
      {
        id: "ongoing-ownership",
        title: "Ongoing Pet Ownership",
        subtitle: "Day-to-day care and healthcare management",
        colorScheme: "growth",
        items: [
          {
            id: "regular-vet-care",
            title: "Maintain regular veterinary care",
            description: "Preventative care is far cheaper than emergency treatment.",
            details:
              "Stay on top of routine healthcare:\n\n• **Annual wellness exam**: $50-200 (more for seniors - twice yearly)\n• **Vaccinations**: Core vaccines annually or per vet recommendation\n• **Dental cleaning**: $300 every 2 years\n• **Parasite prevention**: Monthly flea, tick, and heartworm medication\n• **Blood work**: Annually for seniors to catch issues early\n\nSkipping preventative care often leads to expensive emergency situations. A $200 annual exam can prevent a $5,000 emergency.",
          },
          {
            id: "quality-nutrition",
            title: "Invest in quality nutrition",
            description: "Good food prevents expensive health problems long-term.",
            details:
              "Don't cheap out on pet food:\n\n• **Quality matters**: Better food means better health, fewer vet visits, smaller portions needed\n• **Life stage appropriate**: Puppy/kitten, adult, senior formulas have different needs\n• **Avoid bargain brands**: Often contain fillers, lower-quality protein, insufficient nutrients\n• **Special diets**: Some pets need prescription food for allergies, sensitivities, or health conditions ($50-100/month)",
          },
          {
            id: "training-socialization",
            title: "Invest in training and socialization",
            description: "Behavioral problems are a leading cause of pet surrender.",
            details:
              "Training is not optional:\n\n• **Basic obedience**: Prevents dangerous situations and property damage\n• **Socialization**: Expose to people, other animals, environments while young\n• **Professional help**: Don't hesitate to hire trainer for behavioral issues ($50-150/session)\n• **Consistency**: Everyone in household must use same commands and rules\n\nPoor behavior leads to damaged property, vet bills from anxiety-related issues, and in worst cases, liability for bites or injuries. Training is an investment, not an expense.",
          },
          {
            id: "exercise-enrichment",
            title: "Provide adequate exercise and mental stimulation",
            description: "Bored, under-exercised pets develop expensive problems.",
            details:
              "Physical and mental exercise prevents issues:\n\n• **Daily exercise**: Dogs need 30 minutes to 2 hours depending on breed/age\n• **Mental stimulation**: Puzzle toys, training, new experiences\n• **Consequences of insufficient exercise**: Destructive behavior, anxiety, obesity, expensive behavioral issues\n• **Cost-effective options**: Walking is free, DIY puzzle toys, rotate toy selection",
          },
        ],
      },
      {
        id: "financial-planning",
        title: "Financial Planning",
        subtitle: "Prepare for the financial realities of pet ownership",
        colorScheme: "optimize",
        items: [
          {
            id: "emergency-fund",
            title: "Build a pet emergency fund",
            description: "Save $1,000-3,000 minimum for unexpected vet bills.",
            details:
              "Emergency vet visits are not a question of if, but when:\n\n• **Common emergencies**: Ingesting toxins, broken bones, bloat, infections, foreign object ingestion\n• **Typical costs**: $1,000-5,000+ for emergency surgery\n• **Start small**: Even $500 is better than nothing\n• **Keep separate**: Dedicated pet emergency fund in high-yield savings account\n• **Replenish**: After using it, prioritize rebuilding it\n\nWithout an emergency fund, you may face impossible choices about your pet's care.",
          },
          {
            id: "pet-insurance-decision",
            title: "Decide: Pet insurance or self-insure?",
            description: "Weigh the pros and cons carefully for your situation.",
            details:
              "**Pet Insurance:**\n• **Cost**: $30-100/month depending on age, breed, coverage\n• **Pros**: Covers major emergencies (surgeries, cancer treatment, accidents), peace of mind, no need for large emergency fund\n• **Cons**: Monthly cost adds up ($360-1,200/year), many exclusions, pre-existing conditions not covered, deductibles and co-pays apply, premiums increase with age\n• **Best for**: Breeds prone to expensive conditions, owners without emergency fund\n\n**Self-Insurance ():**\n• **Strategy**: Save what insurance would cost in investments, according to your personal investment strategy.\n• **Pros**: You keep unused money, investment growth, no claim denials, covers any pet need including end-of-life care\n• **Cons**: Requires discipline, need emergency fund first, early emergency could deplete fund\n• **Best for**: Multiple pets, healthy breeds, those with emergency fund\n\n**Hybrid approach**: Basic accident-only insurance ($15-30/month) + investment account for illness and routine care.",
          },
          {
            id: "plan-end-of-life",
            title: "Plan for end-of-life expenses",
            description: "A difficult but necessary financial consideration.",
            details:
              "End-of-life care costs can be significant:\n\n• **Senior pet care**: Increased vet visits, medications, special diets ($100-300/month)\n• **Chronic condition management**: Diabetes, kidney disease, cancer treatment ($200-500+/month)\n• **Quality of life assessment**: Balance cost with pet's comfort - euthanasia is sometimes the kindest option\n• **Euthanasia cost**: $50-300 at vet, $200-500 for at-home service\n• **Cremation**: $50-200 private, $30-50 communal\n• **Burial**: Free at home (if legal), $500-3,000 at pet cemetery",
          },
          {
            id: "consider-care-coverage",
            title: "Plan for caring for your pet if you're unable",
            description: "Ensure your pet is cared for if something happens to you.",
            details:
              "Responsible pet ownership includes planning for contingencies:\n\n• **Pet guardian**: Designate someone to take your pet if you're unable to care for them\n• **Financial provision**: Consider leaving funds in your will for pet care\n• **Documentation**: Keep health records, care instructions, vet contacts accessible\n• **Pet trust**: For significant assets, legal pet trust ensures funds are used for pet care\n• **Emergency contacts**: Give trusted person keys and authorization to access your home for pet\n\nDiscuss plans with designated guardians and ensure they're willing and able to care for your pet.",
          }
        ],
      },
    ],
  },
  {
    id: "preparing-old-age",
    title: "Preparing for Old Age",
    description: "Estate planning and end-of-life preparation",
    subtitle: "Secure your legacy and protect your loved ones",
    tags: ["estate planning", "will", "elderly", "retirement", "legacy", "power of attorney", "end of life"],
    sections: [
      {
        id: "legal-estate-planning",
        title: "Legal and Estate Planning",
        subtitle: "Establish your legal foundation",
        colorScheme: "foundation",
        items: [
          {
            id: "create-will",
            title: "Create a Last Will and Testament",
            description: "Legally document how you want your assets distributed.",
            details:
              "A will is the cornerstone of estate planning:\n\n• **Asset distribution**: Specify who gets what (property, money, possessions)\n• **Executor**: Name someone to carry out your wishes\n• **Guardian designation**: For minor children or dependents\n• **Digital assets**: Include instructions for online accounts, cryptocurrencies\n• **Update regularly**: After major life events (marriage, divorce, births, deaths)\n\n**Recommendation**: Before meeting with an estate attorney, draw out a flowchart showing exactly how you want inheritance to flow. Visual representation helps you think through scenarios (what if a beneficiary dies before you?) and makes it much easier to explain your wishes to your lawyer. Include backup beneficiaries and contingency plans.",
          },
          {
            id: "estate-planning-attorney",
            title: "Consult an estate planning attorney",
            description: "Professional guidance ensures your plan is legally sound.",
            details:
              "Estate planning attorneys provide critical expertise:\n\n• **State-specific laws**: Requirements vary significantly by state\n• **Tax optimization**: Minimize estate taxes and maximize inheritance\n• **Complex situations**: Blended families, business ownership, significant assets\n• **Trust recommendations**: When trusts make sense for your situation\n• **Probate avoidance**: Strategies to simplify the process for heirs\n\n**Cost**: Typically $1,000-3,000 for comprehensive estate plan (will, trusts, POAs). Worth every penny for peace of mind and protecting your heirs from legal complications.",
          },
          {
            id: "consider-trusts",
            title: "Consider establishing trusts",
            description: "Trusts can avoid probate and provide more control over asset distribution.",
            details:
              "Trusts offer advantages over wills alone:\n\n• **Revocable living trust**: Avoid probate, maintain control during lifetime, easier to update than will\n• **Irrevocable trust**: Reduce estate taxes, protect assets from creditors\n• **Special needs trust**: Care for disabled dependents without disqualifying them from government benefits\n• **Charitable trusts**: Support causes while reducing tax burden\n\n**When to consider**: Significant assets ($500k+), complex family situations, privacy concerns (trusts aren't public like probate), or desire to control distribution timing (e.g., distributions at certain ages).\n\n**Consult your estate attorney** - trust structure depends on your specific situation.",
            isOptional: true,
          },
          {
            id: "funeral-arrangements",
            title: "Document funeral and burial preferences",
            description: "Spare your loved ones from making difficult decisions during grief.",
            details:
              "Clarify your end-of-life wishes:\n\n• **Burial or cremation**: Specify your preference\n• **Funeral service**: Type of service, location, religious/secular preferences\n• **Burial plot**: If desired, purchase in advance (costs $1,000-4,000+)\n• **Prepaid funeral plan**: This is option. You can lock in costs by doing so but research carefully (some companies go bankrupt)\n• **Cost planning**: Average funeral costs $7,000-12,000\n\nDocument everything in writing and discuss with family. Some include this in their will, others keep a separate document with more detail.",
            isOptional: true,
          },
        ],
      },
      {
        id: "powers-directives",
        title: "Powers of Attorney and Healthcare Directives",
        subtitle: "Designate trusted decision-makers",
        colorScheme: "foundation",
        items: [
          {
            id: "financial-poa",
            title: "Establish Financial Power of Attorney",
            description: "Authorize someone to handle your finances if you can't.",
            details:
              "A Financial POA allows a trusted person to manage your money and property:\n\n• **What it covers**: Pay bills, manage investments, file taxes, handle banking, sell property if needed\n• **Types**: Immediate (effective now) vs. springing (activated upon incapacitation)\n• **Agent selection**: Choose someone financially responsible and trustworthy: spouse, adult child, or trusted advisor\n• **Multiple agents**: Can name co-agents or successor agents if first choice can't serve\n• **Limitations**: You can specify what they can/cannot do\n\n**Critical**: Without this, your family may need court approval (guardianship/conservatorship) to manage your finances, an expensive and time-consuming process.",
          },
          {
            id: "medical-poa",
            title: "Establish Medical Power of Attorney (Healthcare Proxy)",
            description: "Designate someone to make medical decisions if you're unable.",
            details:
              "A Medical POA (Healthcare Proxy) authorizes someone to make healthcare decisions on your behalf:\n\n• **When it activates**: Only when you can't communicate your wishes (unconscious, mentally incapacitated)\n• **Agent selection**: Choose someone who knows your values, can handle stress, and will respect your wishes even if they disagree\n• **Scope**: Decisions about treatments, procedures, care facilities, end-of-life care\n• **Different from Financial POA**: Select same or different person than Financial POA based on skills/strengths\n\n**Discuss your values** with your chosen agent: quality of life vs. longevity, acceptable risk levels, religious considerations, end-of-life preferences.",
          },
          {
            id: "living-will",
            title: "Create a Living Will (Advance Directive)",
            description: "Document your end-of-life medical preferences in advance.",
            details:
              "A Living Will specifies what medical treatments you want or don't want:\n\n• **Life-sustaining treatments**: CPR, ventilators, feeding tubes, dialysis\n• **Palliative care**: Focus on comfort vs. life extension\n• **Scenarios**: Terminal illness, permanent unconsciousness, advanced dementia\n• **Pain management**: Your preferences for pain relief even if it shortens life\n• **Organ donation**: Specify your wishes regarding organ/tissue donation\n\n**Works with Medical POA**: Living Will provides guidance, Medical POA makes decisions in situations you didn't specifically address. Having both gives your family clarity and reduces guilt about difficult decisions.\n\n**Tip**: Review every few years. Preferences may change as you age or experience health issues.",
          },
          {
            id: "hipaa-authorization",
            title: "Complete HIPAA authorization forms",
            description: "Allow designated people to access your medical information.",
            details:
              "HIPAA laws protect medical privacy but can prevent family from getting information:\n\n• **Problem**: Even your Medical POA agent may not access medical records until you're incapacitated\n• **Solution**: HIPAA authorization forms allow named individuals to discuss your medical information with providers at any time\n• **Who to include**: Medical POA agent, family members who might help coordinate care, trusted friends\n• **When it matters**: During hospitalizations, researching care options, coordinating between specialists\n\nObtain forms from your doctors' offices and hospitals. Keep copies with your estate documents.",
            isOptional: true,
          },
        ],
      },
      {
        id: "beneficiaries-documentation",
        title: "Beneficiaries and Documentation",
        subtitle: "Organize critical information for your heirs",
        colorScheme: "growth",
        items: [
          {
            id: "update-beneficiaries",
            title: "Review and update all beneficiaries",
            description: "Beneficiary designations override your will so keep them current.",
            details:
              "Beneficiary designations transfer assets outside of probate and supersede your will:\n\n**Update beneficiaries on:**\n• **Retirement accounts**: 401(k), 403(b), IRA, Roth IRA\n• **Life insurance policies**: All policies including group life through employer\n• **Bank/investment accounts**: POD (payable on death) or TOD (transfer on death) designations\n• **HSA**: Health Savings Account beneficiaries\n• **Annuities**: If you have any\n\n**Review annually** and after major life events (marriage, divorce, birth, death). Many people forget to update these, causing assets to go to ex-spouses, deceased parents, or unintended recipients.\n\n**Name contingent beneficiaries**: Backups if primary beneficiary predeceases you.",
          },
          {
            id: "document-accounts-passwords",
            title: "Record account information, PINs, and passwords",
            description: "Create a master list of all financial accounts and access information.",
            details:
              "Your heirs will need access to your accounts - make it possible:\n\n**Document:**\n• **Bank accounts**: Institution names, account numbers, online login usernames (not passwords yet)\n• **Investment accounts**: Brokerage, retirement accounts, 529 plans\n• **Credit cards**: List all cards and institutions\n• **Insurance policies**: Life, health, auto, home, umbrella - policy numbers and agent contacts\n• **Loans/debts**: Mortgages, car loans, student loans, personal loans\n• **Utilities and subscriptions**: Services that need cancellation\n• **Digital assets**: Cryptocurrency wallets, online businesses, valuable digital accounts\n\n**Passwords and PINs**: Store separately in a secure location (safe deposit box, locked file, password manager with emergency access). Consider a password manager with emergency contact feature (1Password, LastPass) that releases access after verification period.\n\n**Update annually** as accounts change.",
          },
          {
            id: "list-assets-debts",
            title: "Create comprehensive asset and debt inventory",
            description: "Document everything you own and owe.",
            details:
              "A complete inventory prevents assets from being lost and ensures debts are addressed:\n\n**Assets:**\n• **Real estate**: Properties you own, deeds location, mortgage information\n• **Vehicles**: Cars, boats, RVs - titles and loan information\n• **Bank/investment accounts**: Already documented, but include current approximate values\n• **Business ownership**: Partnership agreements, succession plans, business valuation\n• **Valuables**: Jewelry, art, collections, family heirlooms with significant value\n• **Storage units**: Locations and contents\n• **Safe deposit boxes**: Location, key location, contents list\n\n**Debts:**\n• All loans with balances, payment schedules, and account information\n• Note which debts have insurance (mortgage insurance, auto gap insurance)\n\nStore this with your estate documents and provide copy to executor.",
          },
          {
            id: "organize-important-documents",
            title: "Organize and store important documents securely",
            description: "Make critical documents accessible to the right people.",
            details:
              "Your family will need various documents - organize them now:\n\n**Legal documents:**\n• Will, trusts, powers of attorney, healthcare directives\n• Birth certificate, marriage certificate, divorce decrees\n• Military discharge papers (DD-214) if applicable\n• Social Security card\n\n**Financial documents:**\n• Recent tax returns (7 years)\n• Insurance policies (life, health, property)\n• Property deeds and titles\n• Investment account statements\n\n**Storage recommendations:**\n• **Fireproof safe at home**: Copies of everything\n• **Safe deposit box**: Original will (or give to attorney), deeds, birth certificates\n• **Attorney's office**: Estate planning documents\n• **Tell executor/POA agents**: Where everything is located and how to access\n\n**Digital copies**: Scan everything and store encrypted backups in secure cloud storage with access instructions for executor.",
            isOptional: true,
          },
          {
            id: "write-letter-of-instruction",
            title: "Write a Letter of Instruction to your heirs",
            description: "Provide guidance beyond the legal documents.",
            details:
              "A Letter of Instruction (not legally binding but incredibly helpful) can include:\n\n• **Personal messages**: Final thoughts, explanations of your decisions\n• **Location of documents**: Where to find will, insurance policies, passwords\n• **Funeral wishes**: Detailed preferences beyond what's in official documents\n• **Asset explanations**: Why certain items go to certain people\n• **Instructions**: How to access accounts, who to contact, what to do first\n• **Personal property**: Who gets sentimental items not valuable enough for the will\n• **Digital assets**: Social media accounts, blogs, photo libraries\n\nKeep with estate documents and update as needed. This letter can save your family confusion, conflict, and stress during an already difficult time.",
            isOptional: true,
          },
        ],
      },
      {
        id: "long-term-care",
        title: "Long-term Care Planning",
        subtitle: "Prepare for potential care needs",
        colorScheme: "growth",
        items: [
          {
            id: "understand-medicare-medicaid",
            title: "Understand Medicare and Medicaid coverage",
            description: "Know what's covered and what isn't for long-term care.",
            details:
              "Most people misunderstand long-term care coverage:\n\n**Medicare:**\n• **What it covers**: Limited skilled nursing facility care (up to 100 days after hospital stay), home health under specific conditions\n• **What it doesn't cover**: Long-term custodial care (help with daily living), most nursing home costs, assisted living\n• **Reality**: Medicare covers very little long-term care\n\n**Medicaid:**\n• **What it covers**: Nursing home care, some home care services\n• **Eligibility**: Must have very limited assets (typically $2,000 or less) and meet income requirements\n• **Planning**: Some people spend down assets to qualify, but rules are complex (5-year lookback period)\n\n**The gap**: Most long-term care must be paid out-of-pocket or through long-term care insurance. Average nursing home costs $100,000-120,000/year.",
          },
          {
            id: "long-term-care-insurance",
            title: "Consider long-term care insurance",
            description: "Evaluate whether LTC insurance makes sense for your situation.",
            details:
              "Long-term care insurance covers extended care needs:\n\n**What it covers:**\n• Nursing home care ($80,000-120,000/year)\n• Assisted living facility ($48,000-72,000/year)\n• In-home care ($25-30/hour, 24/7 = $200,000+/year)\n• Adult day care services\n\n**Insurance costs:**\n• Age 55: $2,000-3,000/year\n• Age 65: $3,500-5,500/year\n• Costs increase as you age; premiums can increase over time\n\n**Who should consider:**\n• Assets between $200,000-2,000,000 (too much to qualify for Medicaid, not enough to easily self-fund care)\n• Family history of conditions requiring long-term care (dementia, Alzheimer's, stroke)\n• No family members able/willing to provide care\n\n**Who should skip:**\n• Can't afford premiums long-term\n• Significant assets (can self-fund)\n• Very limited assets (will qualify for Medicaid)\n\n**Best purchase age**: 55-60 years old. Younger = cheaper premiums but paying longer; older = more expensive or might not qualify.\n\n**Alternative**: Hybrid life/LTC policies (life insurance with LTC rider) or self-insuring with dedicated investments.",
            isOptional: true,
          },
          {
            id: "research-care-options",
            title: "Research care options in your area",
            description: "Know what's available before you need it.",
            details:
              "Understanding your options reduces stress when decisions need to be made:\n\n**Home care:**\n• Family caregivers (most common, hardest on family)\n• Hired caregivers ($25-30/hour)\n• Home healthcare agencies (more expensive but more professional)\n\n**Community-based:**\n• Adult day care centers ($70-100/day)\n• Senior centers with programs and meals\n\n**Residential options:**\n• Independent living ($2,000-4,000/month) - apartment style, minimal services\n• Assisted living ($3,500-6,500/month) - help with daily activities\n• Nursing homes ($7,000-10,000+/month) - 24/7 skilled nursing care\n• Memory care ($5,000-9,000/month) - specialized for dementia/Alzheimer's\n• Continuing care retirement community (CCRC) - all levels of care in one place, requires large upfront deposit ($100,000-1,000,000+)\n\n**Research now**: Tour facilities, understand costs, get on waitlists if necessary for preferred facilities. Quality varies dramatically, so research before you need it urgently.",
            isOptional: true,
          },
          {
            id: "discuss-preferences-with-family",
            title: "Discuss care preferences with family",
            description: "Have honest conversations about your wishes for aging care.",
            details:
              "Don't leave your family guessing about your preferences:\n\n**Topics to discuss:**\n• **Where do you want to age?**: Home as long as possible, assisted living, nursing home?\n• **Who might provide care?**: Expectations about family caregiving\n• **Financial limits**: How much are you willing to spend? What assets can be used?\n• **Quality of life priorities**: Independence vs. safety, social engagement, specific concerns\n• **Decision-making**: Who should make decisions if you can't?\n\n**Reality check**: What you want may not be financially or physically possible. Discuss realistic scenarios and backup plans.\n\n**For adult children**: Don't assume you'll be your parents' caregiver without discussing capabilities, willingness, and impact on your life. It's okay to say you can't do it, but it's better to be honest now than resentful later.",
            isOptional: true,
          },
        ],
      },
      {
        id: "financial-security",
        title: "Financial Security Review",
        subtitle: "Ensure your finances are in order",
        colorScheme: "optimize",
        items: [
          {
            id: "review-retirement-income",
            title: "Review retirement income streams",
            description: "Verify you have sufficient income for your needs.",
            details:
              "Identify all income sources in retirement:\n\n• **Social Security**: Maximize by delaying to age 70 if possible (8% increase per year from 67-70)\n• **Pensions**: If you have them, understand payment options (life only vs. joint and survivor)\n• **Retirement accounts**: 401(k), IRA, Roth IRA - understand withdrawal strategies and required minimum distributions (RMDs)\n• **Investment income**: Dividends, interest, rental income\n• **Part-time work**: Some retirees continue working part-time\n• **Annuities**: If you have any, understand payout terms\n\n**Calculate total**: Does it cover your expected expenses plus healthcare and unexpected costs? If not, consider working longer, reducing expenses, or adjusting retirement expectations.\n\n**Withdrawal strategy**: Common rule is 4% of retirement savings per year, adjusted for inflation. Consult a fee-only financial planner for personalized guidance.",
          },
          {
            id: "plan-estate-taxes",
            title: "Plan for potential estate taxes",
            description: "Understand if your estate will owe taxes and plan accordingly.",
            details:
              "Estate tax planning for larger estates:\n\n**Federal estate tax (2024):**\n• **Exemption**: $13.61 million per person ($27.22 million per married couple)\n• **Tax rate**: 40% on amounts above exemption\n• **Sunset provision**: Exemption may drop to ~$7 million per person in 2026 unless Congress acts\n\n**State estate taxes:**\n• 12 states + DC have estate taxes with much lower exemptions ($1-6 million)\n• 6 states have inheritance taxes (paid by heirs, not estate)\n\n**If you're near the exemption:**\n• **Gifting strategies**: Annual gift exclusion ($18,000/person in 2024), lifetime gifting\n• **Trusts**: Irrevocable life insurance trusts, charitable trusts, family limited partnerships\n• **Life insurance**: Can provide liquidity to pay estate taxes\n• **Consult attorney**: Estate tax planning is complex and state-specific\n\n**Most people**: Don't need to worry about federal estate tax, but check your state laws.",
            isOptional: true,
          },
          {
            id: "consolidate-simplify",
            title: "Consolidate and simplify financial accounts",
            description: "Make it easier for you and your heirs to manage finances.",
            details:
              "As you age, simplification reduces stress and errors:\n\n**Consolidation opportunities:**\n• **Multiple IRAs**: Roll old 401(k)s and multiple IRAs into one or two accounts\n• **Bank accounts**: Close unused accounts, consolidate to one or two banks\n• **Credit cards**: Keep 2-3 you actually use, close the rest (but be mindful of credit score impact)\n• **Brokerage accounts**: Consolidate to one or two providers\n\n**Benefits:**\n• Easier to track and manage\n• Simpler required minimum distributions (RMDs)\n• Less paperwork and statements\n• Much easier for heirs/executor to settle estate\n• Reduced risk of forgotten accounts\n\n**Before consolidating**: Ensure you're not triggering taxes, losing better investment options, or giving up valuable benefits (e.g., some old 401(k)s have better loan provisions or lower-cost institutional funds).",
            isOptional: true,
          },
          {
            id: "review-insurance",
            title: "Review all insurance coverage",
            description: "Ensure appropriate coverage for your stage of life.",
            details:
              "Insurance needs change as you age:\n\n**Life insurance:**\n• If children are independent and debts paid off, you may not need it\n• Keep enough to cover estate taxes, final expenses, or income for surviving spouse\n• If you have permanent policy (whole/universal life), review if it still makes sense\n\n**Health insurance:**\n• Medicare enrollment at 65 is critical - missing deadlines causes permanent penalties\n• Medigap or Medicare Advantage to fill coverage gaps\n• Part D prescription drug coverage\n\n**Disability insurance:**\n• Often not needed in retirement, can cancel once fully retired\n\n**Long-term care insurance:**\n• Discussed in previous section\n\n**Umbrella liability:**\n• $1-5 million coverage costs $200-500/year\n• Protects assets from lawsuits\n• Still valuable in retirement if you have assets to protect\n\n**Property/auto insurance:**\n• Review coverage levels.\n• Bundle for discounts\n• Consider increasing deductibles to lower premiums if you have emergency fund\n\nReview annually and after major life changes.",
          },
          {
            id: "charitable-giving",
            title: "Plan charitable giving strategy",
            description: "Maximize tax benefits while supporting causes you care about.",
            details:
              "Strategic charitable giving in retirement:\n\n**Qualified Charitable Distributions (QCDs):**\n• Age 70½+: Donate up to $105,000/year directly from IRA to charity\n• **Benefit**: Satisfies RMD without increasing taxable income\n• **Best use**: When you don't need your full RMD for expenses\n\n**Donor-Advised Funds (DAFs):**\n• Contribute large sum in one year (stock, appreciated assets) for big tax deduction\n• Distribute to charities over multiple years\n• Good strategy in high-income year before retirement\n\n**Charitable Remainder Trust:**\n• Receive income for life, remainder goes to charity\n• Immediate tax deduction, remove appreciated assets from estate\n• Complex but powerful for large estates\n\n**Appreciated securities:**\n• Donate appreciated stock/funds instead of cash\n• Avoid capital gains tax, get deduction for full fair market value\n\n**Bequests in will:**\n• Leave specific amounts or percentage of estate to charities\n• Reduces taxable estate\n\nConsult tax advisor or estate attorney for personalized strategy.",
            isOptional: true,
          },
        ],
      },
    ],
  },
];
