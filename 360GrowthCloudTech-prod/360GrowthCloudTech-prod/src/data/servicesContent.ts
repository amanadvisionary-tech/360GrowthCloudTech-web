import {
  Code2, Users, TrendingUp, Cloud, ShieldCheck, ShoppingCart,
  Rocket, Layers, KeyRound, Workflow, Database, BarChart3,
  Search, Target, LineChart, GitBranch, Boxes, Gauge,
  Eye, FileCheck2, ShieldAlert, CreditCard, Smartphone, Truck,
  type LucideIcon,
} from "lucide-react";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  icon: LucideIcon;
  tag: string;
  name: string;
  navLabel: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  image: string;
  imageAlt: string;
  image2: string;
  image2Alt: string;
  intro: string;
  whatIsTitle: string;
  whatIsParagraphs: string[];
  signs: { title: string; intro: string; items: string[] };
  mistakes: { title: string; intro: string; items: string[] };
  whoItsFor: string[];
  whoItsForIntro: string;
  whoItsForDetail: { label: string; desc: string }[];
  problems: { problem: string; solution: string }[];
  includesIntro: string;
  includes: string[];
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  whyChooseUs: string;
  costTitle: string;
  costParagraphs: string[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonItems: { name: string; desc: string }[];
  process: { title: string; desc: string }[];
  scenarioTitle: string;
  scenarioParagraphs: string[];
  stackLabel: string;
  stack: string[];
  faqs: ServiceFaq[];
  closingParagraph: string;
  related: string[];
}

export const servicesContent: ServiceContent[] = [
  {
    slug: "custom-software-development",
    icon: Code2,
    tag: "Engineering",
    name: "Custom Software Development",
    navLabel: "Custom Software Development",
    seoTitle: "Custom Software Development Company | 360CloudTech",
    metaDescription:
      "Custom software development services for startups and enterprises — web apps, mobile apps, and internal tools engineered for scale on modern, maintainable architecture.",
    h1: "Custom Software Development Services",
    image: "/images/services/custom-software-development.webp",
    imageAlt: "Custom software development company writing and testing production code",
    image2: "/images/services/custom-software-development-2.webp",
    image2Alt: "Software development team collaborating on laptops during a build sprint",
    intro:
      "360CloudTech is a custom software development company that designs and builds web applications, mobile apps, and internal tools around your exact requirements — not a rigid template. Whether you're a startup shipping your first MVP or an enterprise modernizing a legacy system, our custom software development services are built for long-term maintainability, not just a fast demo.",
    whatIsTitle: "What Is Custom Software Development?",
    whatIsParagraphs: [
      "Custom software development is the process of designing, building, and maintaining software created specifically for one business, rather than licensing a mass-market product built for thousands of different companies at once. Instead of adjusting your workflow to fit rigid, generic features, a custom software development company builds the exact fields, logic, and integrations your business actually needs — nothing padded in to justify a subscription tier you'll never fully use.",
      "For startups, this usually means a custom-built MVP or web application that can evolve as the product finds its market. For established businesses, it more often means replacing a patchwork of spreadsheets, disconnected tools, and manual processes with one system that reflects how the team actually works. Either way, the goal of custom software development is the same: software that fits the business, instead of a business bending to fit the software.",
      "In practice, most custom software development engagements fall into one of two categories: a net-new product built to validate or scale a business idea, or an internal tool that replaces a process currently run through spreadsheets, email, or a tool that was never quite the right fit. Knowing which category you're in changes how we scope the first phase of work.",
    ],
    signs: {
      title: "Signs You Might Need Custom Software Development",
      intro: "Not every business needs a custom build — but certain patterns are a strong signal that an off-the-shelf tool has become the wrong fit.",
      items: [
        "You're maintaining a workaround — a spreadsheet, a shared inbox, a manual export/import routine — just to make an existing tool do what you actually need.",
        "Your team pays for multiple overlapping subscriptions because no single platform covers your full workflow, and none of them talk to each other.",
        "A competitor with custom-built internal tools is visibly moving faster than you, shipping features or serving customers in ways your current stack can't match.",
        "You've outgrown the free or starter tier of every relevant SaaS tool and are now facing enterprise pricing for features you'll still have to customize yourself.",
        "Your product idea depends on logic or a user experience that doesn't exist in any existing platform — it has to be built from scratch to exist at all.",
        "Your roadmap keeps getting delayed because engineering time goes into maintaining workarounds instead of building new features.",
      ],
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      intro: "A lot of failed software projects don't fail because of bad code — they fail because of avoidable planning mistakes. Here's what we see most often.",
      items: [
        "Skipping proper discovery and jumping straight into building, which usually means rework once the real requirements surface.",
        "Choosing a tech stack based on what's trendy rather than what fits the team's long-term maintenance needs.",
        "Treating the MVP as the finished product instead of a starting point built to evolve.",
        "Not budgeting time for testing, which turns launch week into a stressful scramble to fix bugs.",
        "Hiring based on the lowest quote rather than checking whether the team can actually document and hand off the code cleanly.",
      ],
    },
    whoItsFor: ["Startups building an MVP", "Scale-ups replacing spreadsheets & manual workflows", "Enterprises modernizing legacy systems", "Product teams needing a technical delivery partner"],
    whoItsForIntro:
      "Custom software development makes the most sense when an off-the-shelf tool would force you to either pay for features you'll never use, or bend your process to fit someone else's assumptions about how your industry works.",
    whoItsForDetail: [
      { label: "Startups building an MVP", desc: "Get a working product in front of real users fast, on an architecture that won't need a rewrite at your next funding round." },
      { label: "Scale-ups replacing manual workflows", desc: "Turn spreadsheets, email chains, and disconnected tools into one system built around how your team actually operates." },
      { label: "Enterprises modernizing legacy systems", desc: "Untangle undocumented, hard-to-maintain systems without a risky full rewrite — we audit before we touch anything." },
      { label: "Product teams needing a delivery partner", desc: "Extend your team with engineers who ship in sprints and plug into your existing process, not a black box." },
    ],
    problems: [
      { problem: "Off-the-shelf software forces your team into someone else's workflow.", solution: "We design custom software around how your business actually operates, mapping your real process before writing a line of code — not the other way around." },
      { problem: "A previous developer left you with an undocumented, hard-to-maintain codebase.", solution: "We audit, document, and refactor existing systems before adding new features, so you get a clear picture of what you're working with — no rewrite unless it's genuinely necessary." },
      { problem: "You need to launch fast without piling up technical debt.", solution: "We ship in two-week sprints with working software every demo, on an architecture designed to scale past the MVP stage instead of needing to be rebuilt at your first growth spurt." },
    ],
    includesIntro:
      "Every custom software development engagement is scoped individually, but most projects draw from the same core set of deliverables — here's what's typically covered from discovery through launch.",
    includes: [
      "Product discovery & technical scoping",
      "Web application development (React, Next.js)",
      "Mobile app development (iOS & Android)",
      "API design & third-party integrations",
      "Database architecture & data modeling",
      "QA & automated testing",
      "Cloud deployment & CI/CD setup",
      "Post-launch support & maintenance",
    ],
    benefits: [
      { icon: Rocket, title: "Ship faster without cutting corners", desc: "Two-week sprints with a working, demoable build every cycle — you see real progress and can redirect early, instead of waiting months for a reveal." },
      { icon: Layers, title: "Architecture that scales with you", desc: "Modern, modular codebases designed to support your next 10x of users, not just the version that gets you through launch day." },
      { icon: KeyRound, title: "Full code ownership", desc: "Every line of code is yours from day one — no proprietary lock-in, no hostage codebase, and no dependency on us to keep operating." },
    ],
    whyChooseUs:
      "Most software development companies optimize for one thing: getting a demo out the door. We optimize for the six, twelve, and twenty-four months after that — which is why every custom software development engagement includes documentation, automated testing, and an architecture review before we call anything 'done.' You're not just buying code; you're buying a system someone else can maintain, extend, and hand off without starting from scratch. Many of our software builds also connect directly into cloud infrastructure and cybersecurity work we handle in-house, so nothing gets lost in a handoff between separate vendors.",
    costTitle: "How Much Does Custom Software Development Cost?",
    costParagraphs: [
      "Custom software development pricing depends primarily on scope — the number of user roles, integrations, and workflows involved — rather than a flat per-project rate. A focused MVP with a handful of core features typically costs meaningfully less than a multi-module platform with several third-party integrations and complex permission logic.",
      "We quote custom software development projects after a discovery call, once we understand your requirements well enough to scope realistically. Most engagements are either fixed-price for a clearly defined MVP, or billed in priced sprints for larger, evolving platforms — so you always know what you're paying for before a sprint starts, not after it's already run over.",
    ],
    comparisonTitle: "Custom Software vs. Off-the-Shelf Software",
    comparisonIntro: "The right choice depends on how closely your workflow matches what a generic product assumes about your business.",
    comparisonItems: [
      { name: "Off-the-shelf software", desc: "Fast to start and lower upfront cost, but you adapt your process to the tool's structure, pay recurring per-seat fees indefinitely, and hit a ceiling once your needs outgrow the platform's flexibility." },
      { name: "Custom software development", desc: "Higher upfront investment and a longer initial build, but the system matches your exact workflow, you own the code outright with no per-seat licensing, and it can evolve indefinitely as your business changes." },
      { name: "A hybrid approach", desc: "Many of our clients start on an off-the-shelf tool and move to custom software once they've validated the workflow and outgrown the platform's limits — we help make that transition without a disruptive rebuild." },
      { name: "When you're not sure yet", desc: "If you're unsure whether your case needs custom software, a short discovery call is usually enough to tell — we'll say directly if an existing tool would serve you better." },
    ],
    process: [
      { title: "Discover & Scope", desc: "We map requirements, technical constraints, and success metrics in detail before writing a line of code, so scope and cost are grounded in reality, not guesswork." },
      { title: "Design & Architect", desc: "System architecture, data models, and UX flows are planned to support where the product is headed over the next few years, not just where it starts on day one." },
      { title: "Build in Sprints", desc: "Two-week sprints with a working, demoable build every cycle give you full visibility into progress, so there's never a surprise months into the engagement." },
      { title: "Test & Launch", desc: "Automated testing, manual QA, and a staged rollout mean launch day is a routine, low-risk event instead of a gamble on whether everything holds up." },
      { title: "Support & Iterate", desc: "Post-launch monitoring, bug fixes, and continued feature development keep the product improving as real usage data comes in and your business grows." },
    ],
    scenarioTitle: "What This Looks Like in Practice",
    scenarioParagraphs: [
      "A typical engagement starts with a founder or product lead who has a clear problem but an unclear technical plan — maybe a manual process eating hours every week, or a product idea validated on paper but not yet buildable. In the first discovery call, we ask about the business goal first, not the tech stack, because the right architecture depends entirely on what the software actually needs to do and who will use it.",
      "From there, the first sprint usually focuses on the riskiest, most uncertain part of the build — the piece most likely to change the technical approach if it doesn't work the way we expect. Getting that part right early means the rest of the build proceeds predictably, with fewer surprises in sprint eight than there would have been starting from the easiest feature first.",
    ],
    stackLabel: "Technology we build with",
    stack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL"],
    faqs: [
      { q: "How much does custom software development cost?", a: "It depends on scope — a focused MVP typically fits a defined budget range we quote after a discovery call, while larger platforms are broken into priced sprints. You'll always get a detailed quote before work begins, with no hidden costs." },
      { q: "How long does it take to build custom software?", a: "A focused MVP usually launches in 6–10 weeks after a 1–2 week discovery phase. Larger platforms are delivered in sprints with milestones agreed upfront, so you always know what's shipping and when." },
      { q: "What's the difference between custom software and off-the-shelf tools?", a: "Off-the-shelf software makes you adapt your workflow to fit the tool. Custom software is built around your actual process, data, and integrations — with no unnecessary features or per-seat licensing." },
      { q: "Do you build both web and mobile apps?", a: "Yes. We build responsive web applications and native or cross-platform mobile apps for iOS and Android, often sharing a backend and API layer to keep development efficient." },
      { q: "Can you take over a project from another developer or agency?", a: "Yes — we regularly audit and take ownership of existing codebases, including undocumented or legacy projects, documenting what we find before continuing development." },
      { q: "Do you offer custom software development for startups specifically?", a: "Yes. We work with early-stage startups on MVPs as often as we work with established companies on larger platforms — the engagement model just adjusts to fit your stage and budget." },
      { q: "Do you sign an NDA and guarantee IP ownership?", a: "Yes. We sign NDAs before discovery calls on request, and every contract explicitly transfers full IP ownership of the code to you on completion — there's no ambiguity about who owns what once the project ships." },
      { q: "What happens if requirements change mid-project?", a: "Scope changes are normal, not exceptions. Because we work in two-week sprints, new requirements get added to the backlog and prioritized for an upcoming sprint, with an upfront conversation about how it affects timeline — no surprise change-order fees." },
      { q: "Do you work with clients outside India?", a: "Yes. We work with clients across India and internationally, including the US, UK, and other English-speaking markets, coordinating across time zones as part of normal delivery." },
      { q: "What do you need from us to get started?", a: "A discovery call to understand your goals is the only hard requirement. From there, we'll ask for access to any existing systems, documentation, or stakeholders needed to scope the project accurately." },
      { q: "What happens after launch if something breaks?", a: "Every project includes a post-launch support window to fix any issues that surface under real usage, and ongoing maintenance plans are available beyond that if you want continued coverage." },
      { q: "Should I hire a freelancer instead of a software development company?", a: "Freelancers can work well for very small, well-defined tasks, but a company gives you continuity if someone leaves, a broader skill set across frontend, backend, and DevOps, and accountability a single individual can't always provide on larger projects." },
      { q: "Do you use AI tools as part of your development process?", a: "Yes, where it genuinely speeds up delivery without compromising quality — but every line of code is reviewed by our engineers, and AI-assisted output goes through the same testing and review process as anything else we ship." },
      { q: "Can you build software that integrates with our existing systems?", a: "Yes. Integration with existing tools, databases, and third-party APIs is a standard part of most custom software projects — we scope this during discovery so it's planned for, not bolted on later." },
    ],
    closingParagraph:
      "Whether you're scoping your first MVP or replacing a system that's stopped scaling with your team, custom software development is a decision worth getting right the first time. Book a free strategy call and we'll give you an honest read on scope, timeline, and cost — before you commit to anything.",
    related: ["mobile-app-development", "custom-crm-development", "cloud-infrastructure-devops"],
  },
  {
    slug: "custom-crm-development",
    icon: Users,
    tag: "Product",
    name: "Custom CRM Development",
    navLabel: "Custom CRM Tools",
    seoTitle: "Custom CRM Development Company | 360CloudTech",
    metaDescription:
      "Custom CRM development services built around your sales and support workflow — a CRM that fits your team, without the bloat or per-seat cost of off-the-shelf platforms.",
    h1: "Custom CRM Development Services",
    image: "/images/services/custom-crm-development.webp",
    imageAlt: "Sales and support team reviewing CRM data together in a meeting",
    image2: "/images/services/custom-crm-development-2.webp",
    image2Alt: "Sales professional working on a laptop to manage customer records",
    intro:
      "Generic CRM platforms make you adapt your process to their software. We build custom CRM systems that mirror how your sales, support, and operations teams actually work — with only the fields, pipelines, and automations you need, and none of the bloat you don't.",
    whatIsTitle: "What Is Custom CRM Development?",
    whatIsParagraphs: [
      "A CRM, or customer relationship management system, is the software your sales, support, and account teams use to track leads, deals, and customer interactions. Custom CRM development means building that system around your specific pipeline stages, data fields, and internal processes — instead of adapting your sales process to fit a generic platform like Salesforce or HubSpot, which are built to serve every industry at once and carry the complexity, and cost, that comes with it.",
      "This matters most once a business's sales motion gets specific enough that a generic CRM starts requiring workarounds — custom objects bolted onto a platform never designed for them, automation rules that almost do what you need, or a support team paying for seats to access features they touch once a quarter. A custom CRM development company builds only what your team actually uses, connected directly to the tools you already run on.",
      "A useful way to think about it: if your team has built more than one workaround to make your current CRM function, that's usually a sign the platform's structure — not your process — is the problem. Custom CRM development removes the workaround by building the actual structure your team needs from the start.",
    ],
    signs: {
      title: "Signs You Might Need a Custom CRM",
      intro: "A generic CRM starts to show its limits in fairly recognizable ways once your sales or support process matures.",
      items: [
        "Your team maintains a parallel spreadsheet alongside your CRM because the platform can't track something important to how you actually sell.",
        "You're paying for CRM seats for people who barely log in, because the platform's pricing is per-user rather than based on actual usage.",
        "Your sales stages or deal structure require constant workarounds — custom fields bolted onto a template that was never built for your industry.",
        "Reports that should take five minutes require exporting data to a spreadsheet because the CRM's built-in reporting can't answer the question you're asking.",
        "You've hit a wall trying to connect your CRM to an internal tool or a niche platform your business depends on.",
        "New hires take longer than they should to get productive because the CRM's structure doesn't match how the role actually works day to day.",
      ],
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      intro: "Most failed CRM rollouts aren't a technology problem — they're a planning problem. These are the mistakes we see most often.",
      items: [
        "Building the CRM around an idealized process instead of how the team actually works day to day.",
        "Skipping data migration planning until the last minute, leading to messy, duplicate records in the new system.",
        "Adding too many mandatory fields upfront, which slows the sales team down and hurts adoption.",
        "Not training the team properly before launch, so people quietly go back to their old spreadsheet.",
        "Building only for today's team size, with no thought for what happens once the company doubles.",
      ],
    },
    whoItsFor: ["Sales teams outgrowing spreadsheets", "Businesses with a workflow generic CRMs can't model", "Companies paying for CRM seats/features they don't use", "Teams needing CRM + internal tool in one system"],
    whoItsForIntro:
      "Custom CRM development is worth considering any time a generic platform's structure is getting in the way of your team rather than helping them.",
    whoItsForDetail: [
      { label: "Sales teams outgrowing spreadsheets", desc: "Move off shared spreadsheets and into a system built for pipeline tracking, without losing the flexibility spreadsheets gave you." },
      { label: "Businesses with a unique workflow", desc: "Stop forcing an unusual sales or fulfillment process into a generic CRM's rigid stage structure." },
      { label: "Companies overpaying for unused seats", desc: "Cut per-seat licensing costs by owning a system sized exactly to your team, not a vendor's pricing tiers." },
      { label: "Teams needing CRM + internal tool combined", desc: "Get customer data and internal operational tooling in one system instead of stitching two platforms together." },
    ],
    problems: [
      { problem: "Your sales process doesn't fit into a generic CRM's rigid structure.", solution: "We build pipelines, custom fields, and automations that match your exact sales motion, instead of asking your team to adapt to a template built for a different kind of business." },
      { problem: "You're paying per-seat for a CRM most of your team barely uses.", solution: "A custom CRM has no per-seat licensing — you own it outright, with unlimited internal users and no recurring cost that scales with headcount instead of value." },
      { problem: "Your CRM doesn't talk to your other internal tools.", solution: "We integrate directly with your existing stack — billing, support, marketing — through native APIs, so data doesn't have to be re-entered or reconciled by hand." },
    ],
    includesIntro:
      "Every custom CRM build is scoped around your specific pipeline and process, but most projects draw from the same core set of deliverables — here's what's typically covered from workflow mapping through launch.",
    includes: [
      "Sales & support workflow mapping",
      "Custom fields, pipelines & automations",
      "Role-based access & permissions",
      "Reporting & sales dashboards",
      "Third-party integrations (email, billing, support)",
      "Data migration from your existing CRM",
      "Mobile-friendly interface",
      "Ongoing support & feature updates",
    ],
    benefits: [
      { icon: Workflow, title: "Built around your process", desc: "Pipelines and fields that match how your team actually sells or supports customers — not a template you have to bend your business around." },
      { icon: Database, title: "You own your data", desc: "No vendor lock-in and no per-seat fees — your CRM, your database, your rules, with a clean migration path if you ever need one." },
      { icon: BarChart3, title: "Reporting that answers real questions", desc: "Dashboards built around the metrics your team actually tracks and reviews weekly, not a wall of generic widgets nobody looks at." },
    ],
    whyChooseUs:
      "We don't start a CRM build by opening a template — we start by mapping how your team actually sells or supports customers today, including the exceptions and edge cases that don't fit neatly into a generic pipeline. The result is a system your team adopts because it matches how they already work, not one they quietly route around within a month of launch. A custom CRM also pairs naturally with our custom software development work and, further down the funnel, with digital marketing to keep the pipeline it tracks full.",
    costTitle: "How Much Does Custom CRM Development Cost?",
    costParagraphs: [
      "Custom CRM development cost scales with the number of pipelines, custom fields, user roles, and integrations required — a single-team sales CRM costs meaningfully less than a multi-department system connecting sales, support, and billing together.",
      "Because there's no per-seat licensing on a custom CRM, the cost comparison against platforms like Salesforce or HubSpot often favors custom development once you factor in three to five years of subscription fees for a growing team. We provide a fixed quote after scoping your workflow in a discovery call.",
    ],
    comparisonTitle: "Custom CRM vs. Salesforce or HubSpot",
    comparisonIntro: "Both approaches can work well — the right one depends on how standard your sales process is and how large your team is expected to grow.",
    comparisonItems: [
      { name: "Salesforce / HubSpot", desc: "Fast to set up with a huge ecosystem of pre-built integrations, but pricing scales per seat, and customization beyond a certain point requires expensive specialist consultants or hits platform limits." },
      { name: "Custom CRM development", desc: "No per-seat fees and no ceiling on customization — pipelines, fields, and automations are built to match your process exactly, and you own the system outright." },
      { name: "Migrating later", desc: "Many teams start on a platform CRM and move to custom CRM development once they hit its customization limits or per-seat costs become significant — we handle that data migration directly." },
      { name: "When you're not sure yet", desc: "If you're unsure whether a custom CRM makes sense yet, we'll audit your current setup honestly — sometimes the right answer is configuring your existing platform better, not replacing it." },
    ],
    process: [
      { title: "Map Your Workflow", desc: "We document your current sales and support process end-to-end, including exceptions and edge cases, before designing anything." },
      { title: "Design the Data Model", desc: "Pipelines, fields, and permissions are planned around your actual teams, stages, and reporting needs, not a generic CRM structure." },
      { title: "Build & Integrate", desc: "We build the CRM and connect it to your existing email, billing, and support tools so data flows automatically instead of being copied by hand." },
      { title: "Migrate & Train", desc: "Your existing data moves over cleanly from your previous system, and your team gets a walkthrough before go-live so adoption doesn't stall." },
      { title: "Support & Extend", desc: "As your process evolves, the CRM evolves with it — new fields, automations, or integrations get added without waiting on a vendor's product roadmap." },
    ],
    scenarioTitle: "What This Looks Like in Practice",
    scenarioParagraphs: [
      "Most custom CRM engagements start with a working session where we shadow, or at least closely interview, the people who actually use the sales or support process daily. This surfaces the exceptions and edge cases that never make it into a requirements document but define whether a CRM actually gets adopted — the deal that skips a stage, the customer type that needs a different field set, the report a manager pulls every Monday morning.",
      "Once that process is mapped, the build itself moves quickly, because we're not guessing at structure — we're encoding a process the team already understands. Data migration and training happen in parallel with final testing, so the switch from the old system to the new one is a single clean cutover, not a drawn-out, confusing transition.",
    ],
    stackLabel: "Technology we build with",
    stack: ["React", "Node.js", "PostgreSQL", "REST & GraphQL APIs", "AWS"],
    faqs: [
      { q: "How is a custom CRM different from Salesforce or HubSpot?", a: "Off-the-shelf CRMs are built to serve every possible business, so they come with features you don't need and per-seat pricing that scales with headcount. A custom CRM is built only around your workflow, with a one-time build cost and no recurring per-user licensing." },
      { q: "How much does custom CRM development cost?", a: "Cost depends on how many pipelines, integrations, and user roles you need. We scope this in a discovery call and provide a fixed quote before starting." },
      { q: "Can you migrate our data from our current CRM?", a: "Yes. Data migration from spreadsheets or an existing CRM platform is part of our standard CRM build process, including cleaning up duplicate or inconsistent records where needed." },
      { q: "Do you build CRMs for small businesses, or only enterprises?", a: "Both. We build lean CRMs for small sales teams as well as multi-department systems for larger organizations — the scope just adjusts to fit your team size." },
      { q: "How long does custom CRM development take?", a: "A focused CRM for a single team typically takes 4–8 weeks. Multi-department systems with several integrations take longer and are broken into phases so you see value earlier." },
      { q: "Will my sales team need training to use a custom CRM?", a: "Some onboarding is expected with any new tool, but because the CRM is built around your existing process rather than a generic one, the learning curve is usually shorter than switching to an off-the-shelf platform." },
      { q: "Can a custom CRM integrate with our existing email and billing tools?", a: "Yes — integrating with your existing stack, including email, billing, support, and marketing automation tools, through their APIs is a standard part of every custom CRM build." },
      { q: "Can we choose our own tech stack, or do you decide?", a: "We recommend a stack based on your team's existing technical capabilities and integration needs, but we're flexible — if you have a strong preference or existing infrastructure, we build around it." },
      { q: "Do you support CRMs for remote or distributed sales teams?", a: "Yes. Role-based access and a mobile-friendly interface are standard, so distributed teams across regions or time zones can use the CRM effectively." },
      { q: "What happens if we need changes after the CRM is live?", a: "Ongoing support plans cover new fields, automations, and integrations as your process evolves — you're not locked into the exact scope of the original build." },
      { q: "Should I hire a freelancer to build our CRM instead?", a: "A freelancer can work for a very simple internal tool, but a CRM touching your core sales process benefits from a team that can cover backend, integrations, and ongoing support without a single point of failure." },
      { q: "Is a custom CRM secure enough for sensitive customer data?", a: "Yes — role-based access, encrypted data storage, and secure API integrations are standard practice, and we can align the build with specific compliance requirements like GDPR if needed." },
      { q: "Can the CRM grow with us as we add new departments or teams?", a: "Yes. Because it's built on your own infrastructure rather than a fixed platform tier, adding new pipelines, teams, or user roles is a development task, not a plan upgrade." },
    ],
    closingParagraph:
      "If your team is fighting your CRM instead of using it, that's usually a sign the platform doesn't match your process — not that your process is wrong. Book a free call and we'll help you figure out whether custom CRM development makes sense for where your business is today.",
    related: ["custom-software-development", "digital-marketing-seo", "cloud-infrastructure-devops"],
  },
  {
    slug: "digital-marketing-seo",
    icon: TrendingUp,
    tag: "Growth",
    name: "Digital Marketing & SEO",
    navLabel: "Digital Marketing & SEO",
    seoTitle: "Digital Marketing & SEO Services Company | 360CloudTech",
    metaDescription:
      "Data-driven SEO, paid advertising, and content strategy that turns search traffic into qualified leads — digital marketing services for startups and growing businesses.",
    h1: "Digital Marketing & SEO Services",
    image: "/images/services/digital-marketing-seo.webp",
    imageAlt: "SEO and digital marketing analytics dashboard showing traffic and conversion data",
    image2: "/images/services/digital-marketing-seo-2.webp",
    image2Alt: "Hand-drawn growth chart showing traffic trending upward over time",
    intro:
      "SEO and digital marketing only matter if they produce pipeline. Our digital marketing services combine technical SEO, content strategy, and paid advertising to turn search traffic into qualified leads — measured against business outcomes, not vanity metrics like impressions.",
    whatIsTitle: "What Do Digital Marketing & SEO Services Actually Include?",
    whatIsParagraphs: [
      "Digital marketing is the umbrella term for every channel used to attract and convert customers online — search engine optimization (SEO), paid advertising through Google Ads and Meta Ads, content marketing, and conversion rate optimization. SEO specifically refers to the practice of improving a website's visibility in organic, unpaid search results through technical fixes, content strategy, and authoritative backlinks, so it ranks for the terms your potential customers are actually searching.",
      "The two work best together rather than in isolation: paid ads generate faster, more predictable traffic while an SEO strategy compounds over months to build organic visibility that doesn't disappear the moment you pause a budget. A digital marketing agency worth hiring should be able to run both, and tie each one back to pipeline and revenue — not just clicks, impressions, or keyword rankings for their own sake.",
      "It's worth noting that digital marketing results compound differently depending on the channel — a paid campaign can be evaluated within weeks, but SEO strategy is closer to a six-to-twelve month investment that keeps paying off well after the initial work is done. Understanding that difference is part of setting realistic expectations before a campaign starts, not after.",
    ],
    signs: {
      title: "Signs It's Time to Invest in Digital Marketing & SEO",
      intro: "Marketing needs shift as a business grows — these are the moments it's usually worth taking a closer look.",
      items: [
        "Your website gets visitors, but almost none of them come from organic search — meaning you're fully dependent on referrals or paid channels that could disappear.",
        "You're spending on ads but can't clearly explain which campaigns are actually driving revenue versus just clicks.",
        "Competitors consistently outrank you for the exact terms your potential customers are searching before they find you.",
        "You've published content that never gets read, ranked, or shared, and you're not sure why it isn't working.",
        "Your sales team says the same thing repeatedly: prospects don't know you exist until a referral brings them in.",
        "You've never had a technical SEO audit done, and honestly aren't sure if your site has issues holding back rankings.",
      ],
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      intro: "Marketing budget gets wasted in fairly predictable ways. Here's what we see most often when we take over an existing account.",
      items: [
        "Running ads without proper conversion tracking, so nobody actually knows what's working.",
        "Chasing high-volume keywords that don't match buying intent, which brings traffic that never converts.",
        "Publishing content without a distribution or internal linking plan, so it never gets found.",
        "Treating SEO as a one-time project instead of an ongoing practice that needs regular attention.",
        "Judging a campaign's success by traffic or impressions instead of actual leads and revenue.",
      ],
    },
    whoItsFor: ["Startups needing organic traffic from day one", "B2B companies with long sales cycles", "E-commerce brands needing paid + organic together", "Local businesses wanting to rank for local search"],
    whoItsForIntro:
      "Digital marketing and SEO services are useful at almost any stage, but the right mix of channels depends heavily on your business model and how long your typical sales cycle runs.",
    whoItsForDetail: [
      { label: "Startups needing organic traffic from day one", desc: "Build SEO foundations early so organic traffic compounds by the time paid budget gets tight." },
      { label: "B2B companies with long sales cycles", desc: "Content and SEO strategy built around multi-touch research behavior, not single-session conversions." },
      { label: "E-commerce brands needing paid + organic together", desc: "Run acquisition channels that reinforce each other instead of competing for the same budget conversations." },
      { label: "Local businesses wanting to rank locally", desc: "Get found by customers searching in your service area, not just generic national search terms." },
    ],
    problems: [
      { problem: "Your website ranks for your brand name and nothing else.", solution: "We run technical SEO audits and keyword research to target the terms your actual buyers search, not just terms that are easy to rank for but nobody is looking up." },
      { problem: "You're spending on ads with no idea what's actually converting.", solution: "We set up proper conversion tracking and attribution before scaling any ad spend, so budget follows what's proven to work instead of a guess." },
      { problem: "Content gets published but never ranks or drives traffic.", solution: "We build content around real search intent and internal linking, not just publishing volume, so each piece has an actual shot at ranking and converting." },
    ],
    includesIntro:
      "Every digital marketing engagement is scoped around the channels that make sense for your business, but most programs draw from the same core set of deliverables — here's what's typically covered.",
    includes: [
      "Technical SEO audit & fixes",
      "Keyword research & content strategy",
      "On-page & local SEO optimization",
      "Link building & digital PR",
      "Google Ads & paid social campaigns",
      "Conversion rate optimization",
      "Analytics & attribution setup",
      "Monthly performance reporting",
    ],
    benefits: [
      { icon: Search, title: "Rank for terms buyers actually search", desc: "Keyword strategy built around search intent and buying stage, not just search volume, so traffic is more likely to convert once it arrives." },
      { icon: Target, title: "Traffic that converts, not just visits", desc: "Campaigns measured by qualified leads and revenue, not clicks alone, with underperforming channels flagged instead of quietly continued." },
      { icon: LineChart, title: "Reporting you can act on", desc: "Monthly reports tied to business outcomes, with clear next steps included — not just a dashboard screenshot and a call to explain it." },
    ],
    whyChooseUs:
      "We don't treat SEO and paid media as separate departments reporting different numbers. Every campaign — organic or paid — gets tracked back to actual conversions and pipeline, and we tell you directly when a channel isn't working instead of continuing to bill for it. If your business doesn't need paid ads yet, we'll say so, even if it means a smaller invoice. This work also pairs well with e-commerce development, where organic and paid traffic feed straight into a store's checkout funnel, and with a custom CRM to track leads once they convert.",
    costTitle: "How Much Do Digital Marketing & SEO Services Cost?",
    costParagraphs: [
      "Digital marketing pricing typically follows a monthly retainer model tied to the scope of channels involved — a technical SEO audit and content program is priced differently than a program that also manages a five-figure monthly ad budget.",
      "Paid advertising has two separate costs: the ad spend itself, paid directly to Google or Meta, and the management fee for strategy, campaign setup, and optimization. We're transparent about both before any campaign launches, and we scale spend gradually rather than pushing a large budget before conversion tracking proves it's working.",
    ],
    comparisonTitle: "SEO vs. Paid Advertising: Which Should You Prioritize?",
    comparisonIntro: "This is one of the most common questions we get from startups and small businesses working with a limited marketing budget.",
    comparisonItems: [
      { name: "SEO (organic search)", desc: "Slower to show results, typically 3–6 months, but traffic compounds over time and doesn't disappear when you stop paying, making it a stronger long-term investment for businesses that can wait." },
      { name: "Paid advertising", desc: "Immediate visibility and traffic the moment a campaign launches, but that traffic stops the day you stop paying — better suited to businesses that need leads now or are testing a new offer." },
      { name: "Running both together", desc: "Paid ads fund growth while SEO builds up in the background, and data from paid campaigns often improves SEO content strategy — this is what we recommend whenever budget allows." },
      { name: "When you're not sure yet", desc: "If you're unsure which channels deserve budget first, an initial audit of your current traffic and conversion data usually makes the priority obvious within the first call." },
    ],
    process: [
      { title: "Audit & Research", desc: "Technical SEO audit, competitor analysis, and keyword research find where the real opportunity is, rather than starting from assumptions." },
      { title: "Strategy & Roadmap", desc: "A prioritized plan covering on-page fixes, content, and paid channels, sequenced by expected impact so effort goes where it matters first." },
      { title: "Execute Campaigns", desc: "Content, on-page changes, and ad campaigns go live on a consistent, agreed cadence instead of in unpredictable bursts." },
      { title: "Measure & Report", desc: "Conversion tracking and attribution show exactly what's driving qualified traffic, reported in plain terms tied to business outcomes." },
      { title: "Optimize Continuously", desc: "Underperforming pages and campaigns get iterated on — SEO and paid media are never treated as 'set and forget' work." },
    ],
    scenarioTitle: "What This Looks Like in Practice",
    scenarioParagraphs: [
      "A typical engagement starts with a technical SEO audit and a review of existing analytics, if any exist — surprisingly often, conversion tracking either isn't set up correctly or is missing entirely, which means months of ad spend or content work happened without a reliable way to measure what actually worked. Fixing that measurement gap is usually priority one, before any new campaign launches.",
      "From there, strategy is prioritized by expected impact rather than by what's easiest to execute — a handful of quick technical fixes might come first, followed by a content plan targeting keywords with real buying intent, with paid campaigns layered in once tracking proves what converts. Reporting each month ties back to this original plan, so progress is measured against what we said we'd do, not a shifting goalpost.",
    ],
    stackLabel: "Platforms we work in",
    stack: ["Google Search Console", "Google Analytics 4", "Ahrefs / SEMrush", "Google Ads", "Meta Ads Manager", "HubSpot"],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Technical fixes can show impact within weeks, but meaningful organic ranking growth typically takes 3–6 months, depending on competition. We're upfront about this timeline rather than promising overnight results." },
      { q: "Do you offer SEO for small businesses and startups?", a: "Yes. We work with early-stage companies needing their first real SEO foundation as well as established businesses scaling an existing strategy." },
      { q: "What's included in a technical SEO audit?", a: "Site speed, crawlability, indexing issues, mobile usability, structured data, and on-page fundamentals — with a prioritized list of fixes, not just a report." },
      { q: "Do you handle both SEO and paid ads?", a: "Yes. We run SEO and paid advertising, including Google Ads and Meta Ads, together so organic and paid strategy reinforce each other instead of working in silos." },
      { q: "How do you measure digital marketing ROI?", a: "Through conversion tracking and attribution set up before any campaign scales, so spend is tied to qualified leads and revenue, not just traffic or impressions." },
      { q: "Do you write the content yourselves, or just the strategy?", a: "We do both. Our team handles keyword research, content briefs, and writing, so you're not left with a strategy document and no execution behind it." },
      { q: "What if we've been burned by an SEO agency before?", a: "It's common, and usually traces back to vague reporting or tactics that ignored technical fundamentals. We report against actual conversions and rankings for agreed target keywords, not just general traffic growth." },
      { q: "Do you work with international or India-based businesses?", a: "Both. We run SEO and paid campaigns for businesses targeting India, international markets, or both simultaneously, adjusting keyword and localization strategy accordingly." },
      { q: "How often will we hear from you about progress?", a: "Monthly reporting is standard, with more frequent check-ins during the first 60 days of a new engagement while campaigns and tracking are being set up." },
      { q: "Can you work alongside our existing in-house marketing team?", a: "Yes — many engagements are collaborative, where we lead specific channels like technical SEO or paid ads while your internal team owns brand and content strategy." },
      { q: "Should I hire a freelancer or agency instead of a full digital marketing team?", a: "A freelancer can work for a single narrow task, but SEO and paid media benefit from a team covering technical, content, and analytics skills together — gaps in any one area tend to cap results." },
      { q: "Do you use AI tools for content or campaign optimization?", a: "Yes, for research and efficiency, but content strategy and final review are handled by our team — we don't publish unreviewed AI output, since it tends to underperform on both quality and rankings." },
      { q: "What industries do you have the most experience marketing for?", a: "We work across B2B SaaS, e-commerce, and professional services most often, but the core discipline of technical SEO and conversion-focused campaigns transfers across most industries with the right research." },
    ],
    closingParagraph:
      "Good digital marketing isn't about doing everything at once — it's about picking the channels that fit your sales cycle and budget, and being honest about what's actually working. Book a free call and we'll audit what you're currently doing, or not doing, and tell you where the real opportunity is.",
    related: ["ecommerce-development", "custom-crm-development", "custom-software-development"],
  },
  {
    slug: "cloud-infrastructure-devops",
    icon: Cloud,
    tag: "DevOps",
    name: "Cloud Infrastructure & DevOps",
    navLabel: "Cloud Infrastructure",
    seoTitle: "Cloud Infrastructure & DevOps Services Company | 360CloudTech",
    metaDescription:
      "Cloud infrastructure, migration, and DevOps services on AWS, Google Cloud, and Azure — scalable architecture, automated CI/CD pipelines, and infrastructure as code.",
    h1: "Cloud Infrastructure & DevOps Services",
    image: "/images/services/cloud-infrastructure-devops.webp",
    imageAlt: "Cloud server infrastructure and network cabling in a data center",
    image2: "/images/services/cloud-infrastructure-devops-2.webp",
    image2Alt: "Infrastructure-as-code configuration displayed on a developer's screen",
    intro:
      "Whether you're migrating off legacy servers or scaling infrastructure that's starting to buckle under load, our cloud infrastructure and DevOps services are built for reliability first — clean architecture, automated deployments, and infrastructure you can actually reason about.",
    whatIsTitle: "What Do Cloud Infrastructure & DevOps Services Include?",
    whatIsParagraphs: [
      "Cloud infrastructure refers to the servers, databases, networking, and storage that run your application, hosted on platforms like AWS, Google Cloud, or Azure instead of physical, on-premise hardware. DevOps is the set of practices and tooling that automates how code moves from a developer's laptop into that infrastructure — continuous integration and deployment pipelines, infrastructure as code, containerization, and monitoring.",
      "Together, cloud infrastructure and DevOps services determine whether your application stays up during a traffic spike, how quickly a bug fix reaches production, and how much you're paying for compute resources you may not actually be using. Most businesses don't need a full-time DevOps engineer to get this right — they need someone to set the foundation up correctly once, document it, and keep it maintained as things change.",
      "A good rule of thumb: if a deployment or infrastructure change makes your team nervous, that's a sign the underlying process — not the team's competence — needs to change. Reliable cloud infrastructure should make releases boring, not stressful.",
    ],
    signs: {
      title: "Signs Your Cloud Infrastructure Needs Attention",
      intro: "Infrastructure problems tend to stay invisible until they cause an outage — these are the earlier warning signs worth acting on first.",
      items: [
        "Deployments are stressful events scheduled around 'quiet hours' because a bad release has caused downtime before.",
        "Only one person on your team actually understands how your infrastructure is configured, and there's no documentation if they're unavailable.",
        "Your cloud bill has grown steadily without a corresponding increase in traffic or usage, and nobody's had time to investigate why.",
        "You've had at least one outage during a traffic spike — a product launch, a sale, or unexpected press — that could have been avoided with auto-scaling.",
        "You're still deploying manually via SSH or a dashboard, with no automated pipeline testing changes before they reach production.",
        "Your team has talked about 'fixing infrastructure properly' for months, but it keeps getting deprioritized until the next incident forces the issue.",
      ],
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      intro: "Infrastructure problems are almost always avoidable in hindsight. These are the mistakes that come up again and again.",
      items: [
        "Treating infrastructure setup as a one-time task instead of something that needs ongoing maintenance.",
        "Skipping documentation because 'the team already knows how it works' — until that person leaves.",
        "Scaling infrastructure reactively after an outage, instead of planning capacity ahead of a known traffic spike.",
        "Ignoring cloud costs until the bill becomes a problem, instead of reviewing spend regularly.",
        "Deploying straight to production without a staging environment to catch issues first.",
      ],
    },
    whoItsFor: ["Startups deploying their first production infrastructure", "Companies migrating from legacy/on-prem to cloud", "Teams without a dedicated DevOps engineer", "Products needing to scale for traffic spikes"],
    whoItsForIntro:
      "Cloud infrastructure and DevOps work is often invisible until it's missing — most teams only notice it once a deploy goes wrong or a bill spikes unexpectedly.",
    whoItsForDetail: [
      { label: "Startups deploying production infra for the first time", desc: "Start with a properly architected foundation instead of infrastructure that becomes technical debt within a year." },
      { label: "Companies migrating off legacy or on-prem hosting", desc: "Move to the cloud with a staged migration plan that avoids downtime during the cutover." },
      { label: "Teams without a dedicated DevOps engineer", desc: "Get DevOps expertise as a service, without the cost or hiring timeline of a full-time engineer." },
      { label: "Products needing to scale for traffic spikes", desc: "Build auto-scaling infrastructure that handles demand spikes without manual intervention at 2am." },
    ],
    problems: [
      { problem: "Deployments are manual, slow, and error-prone.", solution: "We build CI/CD pipelines so every deploy is automated, tested, and reversible, turning releases into a routine event instead of a stressful one." },
      { problem: "Your infrastructure isn't documented — only one person understands it.", solution: "We implement Infrastructure as Code so your entire setup is version-controlled and reproducible, removing the single point of failure of one person's memory." },
      { problem: "Cloud costs are climbing without a clear reason.", solution: "We audit your cloud spend and right-size infrastructure to cut waste without hurting performance, often finding savings that offset a meaningful part of the engagement." },
    ],
    includesIntro:
      "Every cloud infrastructure engagement is scoped around your current setup and goals, but most projects draw from the same core set of deliverables — here's what's typically covered from assessment through ongoing operation.",
    includes: [
      "Cloud architecture design (AWS/GCP/Azure)",
      "Cloud migration from on-prem or legacy hosting",
      "CI/CD pipeline setup",
      "Infrastructure as Code (Terraform)",
      "Containerization (Docker/Kubernetes)",
      "Monitoring, logging & alerting",
      "Cost optimization & right-sizing",
      "24/7 uptime monitoring",
    ],
    benefits: [
      { icon: GitBranch, title: "Automated, reversible deployments", desc: "CI/CD pipelines that turn every release into a routine, low-risk event you don't have to schedule around or dread." },
      { icon: Boxes, title: "Infrastructure as code", desc: "Your entire environment is version-controlled and reproducible, not tribal knowledge locked in one engineer's head." },
      { icon: Gauge, title: "Built for uptime and performance", desc: "Monitoring and alerting catch problems before your users do, with a response process defined ahead of time, not improvised during an incident." },
    ],
    whyChooseUs:
      "We build cloud infrastructure the way we'd want to inherit it — documented, version-controlled, and boring in the best sense of the word. No infrastructure that only one person understands, no manual deployment steps that break under pressure, and no surprise cloud bill at the end of the month that nobody can fully explain. Reliable infrastructure is also the foundation good cybersecurity depends on, and it's often set up alongside a custom software development engagement rather than as an afterthought.",
    costTitle: "How Much Does Cloud Infrastructure & DevOps Cost?",
    costParagraphs: [
      "Cost depends on whether you need a one-time setup, such as initial architecture, a CI/CD pipeline, or a migration, versus ongoing management. A one-time setup is typically quoted as a fixed project, while ongoing infrastructure management and monitoring is billed monthly, similar to a fractional DevOps engineer.",
      "Cloud hosting costs themselves, paid directly to AWS, GCP, or Azure, are separate from our service fee, and are often one of the first things we optimize — a cost audit frequently pays for a portion of the engagement through reduced hosting spend alone.",
    ],
    comparisonTitle: "AWS vs. Google Cloud vs. Azure: Which Should You Choose?",
    comparisonIntro: "There's no universally 'best' provider — the right choice depends on your existing stack and team familiarity more than raw feature comparisons.",
    comparisonItems: [
      { name: "AWS", desc: "The largest ecosystem of services and the most common choice for startups and general-purpose web applications — a safe default if you have no strong reason to choose otherwise." },
      { name: "Google Cloud", desc: "Often preferred for data-heavy and machine learning workloads, with strong Kubernetes support since Google originally created the project." },
      { name: "Azure", desc: "Usually the right call if your company already runs on Microsoft tools like Active Directory or Office 365 — the integration between Azure and the rest of the Microsoft ecosystem is a genuine advantage." },
      { name: "When you're not sure yet", desc: "If you're unsure whether your infrastructure actually needs an overhaul, an assessment will tell you honestly — sometimes small, targeted fixes solve the real problem without a full rebuild." },
    ],
    process: [
      { title: "Assess Infrastructure", desc: "We review your current setup, costs, and failure points in detail before proposing any changes, so recommendations are grounded in your actual environment." },
      { title: "Design Architecture", desc: "Cloud architecture is planned around your actual traffic patterns and growth trajectory, not a generic best-practice template." },
      { title: "Migrate or Build", desc: "New infrastructure is provisioned as code, and migrations are staged carefully to avoid downtime during the cutover." },
      { title: "Automate CI/CD", desc: "Deployment pipelines are set up so releases are automated, tested, and reversible, removing manual steps that tend to fail under pressure." },
      { title: "Monitor & Optimize", desc: "Ongoing monitoring, alerting, and periodic cost reviews keep infrastructure reliable and efficient as usage patterns change over time." },
    ],
    scenarioTitle: "What This Looks Like in Practice",
    scenarioParagraphs: [
      "A common starting point is a company running on infrastructure that was set up quickly to get a product live, with no real plan for what happens at 10x the current traffic. We start with an assessment, not to criticize the existing setup, but to understand what's actually load-bearing versus what could be simplified or automated.",
      "Migrations and new infrastructure builds are staged deliberately, often running the new environment in parallel with the old one before a full cutover, so there's a rollback path if something doesn't behave as expected in production. Once the foundation is in place, the CI/CD pipeline and monitoring setup usually follow within the same engagement, so the infrastructure isn't just reliable on day one — it stays that way as the team keeps shipping.",
    ],
    stackLabel: "Technology we work with",
    stack: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    faqs: [
      { q: "Which cloud provider do you work with — AWS, GCP, or Azure?", a: "All three. We recommend a provider based on your existing stack, team familiarity, and cost — we're not locked into pushing one platform regardless of fit." },
      { q: "How much does cloud migration cost?", a: "It depends on the size and complexity of what's being migrated. We scope this after auditing your current infrastructure and provide a fixed quote before starting." },
      { q: "Do you offer DevOps as a service for startups without an in-house engineer?", a: "Yes. Many of our clients don't have a dedicated DevOps hire — we act as that function, from initial setup through ongoing monitoring and incident response." },
      { q: "Can you reduce our current cloud costs?", a: "Often, yes. A cost audit typically surfaces over-provisioned resources, unused services, and right-sizing opportunities before any new work begins." },
      { q: "What's your uptime guarantee?", a: "We design managed infrastructure to a 99.9% uptime SLA, backed by monitoring and alerting that catches issues before they become full outages." },
      { q: "Do you provide 24/7 support if something goes down?", a: "Yes, for clients on an ongoing infrastructure management plan. Monitoring and alerting are set up to catch issues immediately, with an agreed response process for incidents." },
      { q: "Can you work alongside our existing internal engineering team?", a: "Yes — many engagements are collaborative, where we set up infrastructure and processes that your internal team then owns and operates day-to-day." },
      { q: "Do you support hybrid or multi-cloud setups?", a: "Yes, though we'll be direct if a hybrid or multi-cloud approach adds unnecessary complexity for your actual use case — sometimes a single provider is simply the better call." },
      { q: "How do you handle secrets and credentials during infrastructure work?", a: "Access is scoped to what's needed for the engagement, credentials are never shared over insecure channels, and we use your organization's existing secrets management wherever possible." },
      { q: "What happens if we want to bring infrastructure management in-house later?", a: "Because everything is built as documented Infrastructure as Code, handing off to an internal team later is straightforward — there's no proprietary lock-in to our involvement." },
      { q: "Should we hire a freelancer instead of a cloud infrastructure company?", a: "A freelancer can handle a narrow, well-defined task, but ongoing infrastructure reliability benefits from a team that can cover architecture, security, and incident response without depending on one person's availability." },
      { q: "Is our data secure during a cloud migration?", a: "Yes — migrations are planned with encryption in transit and at rest, and access is tightly scoped throughout the process to minimize risk during the cutover window." },
      { q: "Can you help us pass a compliance audit related to our infrastructure?", a: "Yes. We can align infrastructure configuration and documentation with common compliance frameworks as part of a broader engagement, working alongside our cybersecurity service where needed." },
      { q: "Do you offer a service level agreement (SLA) in writing?", a: "Yes, for clients on an ongoing infrastructure management plan — response times and uptime targets are documented in the agreement, not just implied." },
      { q: "What if our infrastructure spans multiple cloud accounts or environments?", a: "That's standard practice, not an edge case — we design for separate staging, production, and sometimes multiple accounts per environment as part of normal architecture planning." },
      { q: "Do you help choose between serverless and traditional server-based architecture?", a: "Yes — the right choice depends on your traffic patterns and cost profile, and we'll recommend based on your actual workload rather than defaulting to whichever approach is currently trendy." },
      { q: "Do you provide documentation and runbooks for the infrastructure you set up?", a: "Yes — every engagement includes documentation covering architecture decisions and operational runbooks, so your team, or ours on an ongoing basis, can operate the infrastructure confidently." },
    ],
    closingParagraph:
      "Whether you're deploying to production for the first time or migrating off infrastructure that's become a liability, getting the foundation right early saves far more time than fixing it under pressure later, both in engineering hours and in the stress of firefighting during an outage. Book a free call and we'll review your current setup — no obligation attached, even if the answer is that your infrastructure is already in decent shape.",
    related: ["cybersecurity-services", "custom-software-development", "custom-crm-development"],
  },
  {
    slug: "cybersecurity-services",
    icon: ShieldCheck,
    tag: "Security",
    name: "Cybersecurity Services",
    navLabel: "Cybersecurity Services",
    seoTitle: "Cybersecurity Services Company | Security Audits & Monitoring | 360CloudTech",
    metaDescription:
      "Cybersecurity services including application security audits, penetration testing, and continuous monitoring — protect your applications, infrastructure, and customer data.",
    h1: "Cybersecurity Services",
    image: "/images/services/cybersecurity-services.webp",
    imageAlt: "Padlock on a keyboard representing application and data security",
    image2: "/images/services/cybersecurity-services-2.webp",
    image2Alt: "Padlock on a keyboard lit in red and green representing a security audit",
    intro:
      "Security isn't a checkbox you tick once before launch. Our cybersecurity services cover application security audits, penetration testing, and continuous monitoring — so vulnerabilities get caught before an attacker finds them, not after.",
    whatIsTitle: "What Do Cybersecurity Services Actually Cover?",
    whatIsParagraphs: [
      "Cybersecurity services span a range of distinct practices that are often lumped together under one label: security audits, which review code, configuration, and policy against best practices; penetration testing, which actively attempts to exploit vulnerabilities the way a real attacker would; vulnerability scanning, which automates detection of known issues; and continuous monitoring, which detects suspicious activity on an ongoing basis after launch.",
      "Most businesses don't need all of these at once — the right combination depends on what you're trying to achieve. A startup preparing for an enterprise deal that requires a security review has different needs than a company that just wants ongoing peace of mind that new code changes aren't introducing vulnerabilities. Good cybersecurity services start by figuring out which of these you actually need, instead of selling you all of them by default.",
      "One pattern we see often: companies wait for a specific trigger, like a lost deal or a customer's security review, before investing in cybersecurity services, even though the underlying risk existed the whole time. Treating security as an ongoing practice rather than a one-time hurdle to clear is what actually keeps a business protected.",
    ],
    signs: {
      title: "Signs You Need Cybersecurity Services Now",
      intro: "Security work often gets deprioritized until a specific event forces the issue — these are the most common triggers we see.",
      items: [
        "An enterprise customer's procurement or legal team has sent a security questionnaire you can't confidently answer.",
        "You've never had your application or infrastructure formally tested, and nobody on the team can say with confidence what would happen under a real attack.",
        "You're expanding into a regulated industry like healthcare or finance and need practices aligned with HIPAA, SOC 2, or similar frameworks.",
        "A recent hire or contractor had broader system access than they should have, and nobody's reviewed permissions in a while.",
        "You've read about a breach at a similar company and realized you wouldn't know if the same thing were happening to you right now.",
        "You store any form of payment, health, or personally identifiable information, and have never had that data flow specifically reviewed for security gaps.",
      ],
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      intro: "Most security incidents trace back to a handful of avoidable gaps. These are the ones we see most often.",
      items: [
        "Assuming a firewall or antivirus alone is enough, without ever testing the application itself.",
        "Leaving old employee or contractor accounts active long after they've left the company.",
        "Storing sensitive data without encryption because it 'seemed fine at the time.'",
        "Treating a single audit as a one-time fix instead of an ongoing practice as the product changes.",
        "Ignoring third-party dependencies and plugins, which are a common entry point for attackers.",
      ],
    },
    whoItsFor: ["SaaS companies handling customer data", "Startups preparing for a security review before a deal", "Companies needing SOC 2/HIPAA-aligned practices", "Teams that inherited an unaudited codebase"],
    whoItsForIntro:
      "Cybersecurity services become a priority at fairly predictable moments in a company's growth, usually tied to a specific trigger rather than abstract caution.",
    whoItsForDetail: [
      { label: "SaaS companies handling customer data", desc: "Protect customer data with security practices that hold up under scrutiny from your own customers' security teams." },
      { label: "Startups preparing for a security review before a deal", desc: "Get audit-ready before an enterprise customer's procurement team asks questions you can't answer yet." },
      { label: "Companies wanting SOC 2 / HIPAA-aligned practices", desc: "Implement and document security controls aligned with major compliance frameworks ahead of a formal audit." },
      { label: "Teams that inherited an unaudited codebase", desc: "Find out what's actually at risk in code you didn't write, before it turns into an incident." },
    ],
    problems: [
      { problem: "You don't know if your application has exploitable vulnerabilities.", solution: "We run penetration testing and code-level security audits to find issues before attackers do, ranked by how realistically they could actually be exploited." },
      { problem: "A potential customer or investor is asking about your security posture.", solution: "We help you implement and document security practices aligned with SOC 2, HIPAA, and GDPR principles, in a form that satisfies procurement and diligence reviews." },
      { problem: "You have no visibility into unusual activity on your systems.", solution: "We set up continuous monitoring and alerting so incidents get caught in real time, not discovered weeks later during a routine check." },
    ],
    includesIntro:
      "Every cybersecurity engagement is scoped around the specific risk you're trying to address, but most projects draw from the same core set of deliverables — here's what's typically covered.",
    includes: [
      "Application security audits",
      "Penetration testing",
      "Vulnerability scanning & remediation",
      "Secure code review",
      "Cloud & infrastructure security review",
      "Security policy & compliance documentation",
      "Incident response planning",
      "Continuous monitoring & alerting",
    ],
    benefits: [
      { icon: Eye, title: "Continuous, not one-time", desc: "Ongoing monitoring means new vulnerabilities get caught as your product changes, not just at a single audit that's outdated within months." },
      { icon: FileCheck2, title: "Compliance-ready documentation", desc: "Security policies and evidence prepared in a form that satisfies auditors, customers, and investors, instead of a generic checklist." },
      { icon: ShieldAlert, title: "Proactive vulnerability detection", desc: "We find and fix exploitable issues before they turn into an incident, prioritized by real-world risk rather than a raw severity score." },
    ],
    whyChooseUs:
      "We report findings ranked by real-world exploitability, not just a raw severity score from an automated scanner — a 'critical' vulnerability that requires physical server access gets treated differently from one exploitable from any browser. You get a report you can actually act on, prioritized by what genuinely matters to your risk exposure. Much of this work happens hand-in-hand with cloud infrastructure, since access control and monitoring depend directly on how that infrastructure is configured.",
    costTitle: "How Much Do Cybersecurity Services Cost?",
    costParagraphs: [
      "Penetration testing and security audit pricing depends on the size of the application and infrastructure in scope — a single web application audit costs less than a full assessment covering multiple applications, cloud infrastructure, and internal network access.",
      "Continuous monitoring is typically billed monthly, similar to a subscription, since it involves ongoing alerting rather than a one-time deliverable. We scope every engagement after an initial call and provide a fixed quote before work begins, with no hourly billing surprises along the way.",
    ],
    comparisonTitle: "Security Audit vs. Penetration Testing: What's the Difference?",
    comparisonIntro: "These terms get used interchangeably, but they test different things — and most companies benefit from doing both in sequence.",
    comparisonItems: [
      { name: "Security audit", desc: "A structured review of code, configuration, and infrastructure against known best practices and compliance frameworks — good at catching systemic issues and missing controls." },
      { name: "Penetration testing", desc: "An active attempt to exploit vulnerabilities the way a real attacker would, including chaining together minor issues into a serious breach — good at proving what's actually exploitable, not just theoretically risky." },
      { name: "Doing both", desc: "An audit typically comes first to fix known issues cheaply, followed by penetration testing to validate that what's left is genuinely secure — this is the sequence we usually recommend." },
      { name: "When you're not sure yet", desc: "If you're unsure what level of security investment you need, a short conversation about your industry, data sensitivity, and current customers is usually enough to scope the right starting point." },
    ],
    process: [
      { title: "Scope & Recon", desc: "We define the attack surface — applications, infrastructure, and data flows — in scope for testing, agreed with you upfront in writing." },
      { title: "Test & Audit", desc: "Penetration testing and code-level review uncover exploitable vulnerabilities, scheduled to avoid disrupting your production environment." },
      { title: "Report Findings", desc: "A prioritized report ranks issues by real-world risk, not just an automated severity score, so you know what to fix first." },
      { title: "Remediate", desc: "We work directly with your team to fix critical issues, with re-testing afterward to confirm the fix actually holds under pressure." },
      { title: "Monitor Continuously", desc: "Ongoing monitoring and alerting catch new risks as your systems evolve, instead of leaving you blind between annual assessments." },
    ],
    scenarioTitle: "What This Looks Like in Practice",
    scenarioParagraphs: [
      "Engagements often begin with a specific trigger — a security questionnaire from a potential customer, a new compliance requirement, or simply the realization that no one has ever formally tested the application. We start by scoping exactly what's in play: which applications, which infrastructure, and which data flows actually matter most.",
      "Testing and audit work happen on an agreed schedule that avoids disrupting production, with findings delivered as a prioritized report rather than a raw vulnerability dump. The real value shows up in the remediation phase — working directly with your team to fix what matters most first, then re-testing to confirm the fix actually holds, so the report doesn't just sit in a drawer.",
    ],
    stackLabel: "Tools we use",
    stack: ["OWASP ZAP", "Burp Suite", "Nessus", "AWS Security Hub", "Snyk"],
    faqs: [
      { q: "What's the difference between a security audit and penetration testing?", a: "A security audit reviews configuration, code, and policy against best practices. Penetration testing actively attempts to exploit vulnerabilities the way a real attacker would. We typically recommend both, in that order." },
      { q: "How much does a penetration test cost?", a: "Cost depends on the size of the application and infrastructure in scope. We provide a fixed quote after an initial scoping call." },
      { q: "Can you help us prepare for a SOC 2 audit?", a: "Yes. We help implement and document security controls aligned with SOC 2 requirements ahead of a formal audit conducted by a certified auditor." },
      { q: "Do you offer ongoing security monitoring, or only one-time audits?", a: "Both. Many clients start with a one-time audit and move to continuous monitoring once the critical issues from that audit are resolved." },
      { q: "How often should we run a security assessment?", a: "At minimum annually, and after any major release or infrastructure change. Continuous monitoring reduces how much this matters, since new risks are flagged as they appear rather than waiting for the next scheduled review." },
      { q: "Will testing disrupt our production environment?", a: "No — penetration testing is scoped and scheduled to avoid disrupting production, and any testing against live systems is coordinated with your team in advance." },
      { q: "Do you provide a report we can share with customers or investors?", a: "Yes. Every engagement includes a written report suitable for sharing with customers, investors, or auditors as evidence of your security posture." },
      { q: "Do you only work with companies that already have a security team?", a: "No — most of our cybersecurity clients don't have an in-house security function at all, which is exactly why they bring us in for audits and ongoing monitoring." },
      { q: "Will you disclose vulnerabilities responsibly if found in third-party software we use?", a: "Yes. If testing surfaces a vulnerability in a third-party product rather than your own code, we follow responsible disclosure practices and notify the appropriate vendor." },
      { q: "Can you test mobile apps as well as web applications?", a: "Yes — application security audits and penetration testing cover mobile apps for iOS and Android alongside web applications and backend infrastructure." },
      { q: "Should we hire a freelance security researcher instead of a company?", a: "Independent researchers can be valuable for a single bug-bounty-style engagement, but ongoing security posture benefits from a team covering audits, testing, and continuous monitoring together, with accountability beyond one individual." },
      { q: "Do you test for compliance with specific regulations like GDPR or PCI DSS?", a: "Yes — testing and documentation can be scoped specifically around frameworks like GDPR, PCI DSS, HIPAA, or SOC 2, depending on which applies to your business and data." },
      { q: "What size of company do you typically work with?", a: "We work with early-stage startups running their first security audit as well as larger companies with ongoing monitoring needs — the engagement scales to fit, rather than requiring a minimum company size." },
      { q: "How quickly can you start after we reach out?", a: "For most engagements, we can begin scoping within a few days of an initial call, though testing schedules depend on coordinating access and timing with your team." },
      { q: "Can you test internal, non-public-facing systems too?", a: "Yes — internal network and application testing is available alongside external-facing penetration testing, scoped separately since internal access requires different coordination with your team." },
      { q: "Is penetration testing legal, and do we need to sign anything beforehand?", a: "Yes, it's fully legal when properly authorized — every engagement starts with a signed scope of work explicitly authorizing the testing, protecting both parties involved." },
      { q: "What's included in the final deliverable after an audit or penetration test?", a: "A written report detailing findings ranked by risk, clear reproduction steps for each issue, and specific remediation guidance — not just a raw list of vulnerabilities." },
    ],
    closingParagraph:
      "Security work is easy to postpone until something forces the issue — a failed deal review, an incident, or a compliance deadline — and the cost of waiting is almost always higher than the cost of addressing it proactively. Book a free call and we'll help you figure out what level of cybersecurity investment actually makes sense for where your business is right now, without pushing you toward more than you need.",
    related: ["cloud-infrastructure-devops", "custom-software-development", "custom-crm-development"],
  },
  {
    slug: "ecommerce-development",
    icon: ShoppingCart,
    tag: "Commerce",
    name: "E-commerce Development",
    navLabel: "E-commerce Development",
    seoTitle: "E-commerce Website Development Company | 360CloudTech",
    metaDescription:
      "Custom e-commerce development services — online stores with fast, easy checkout, payment integrations, and inventory systems built to convert.",
    h1: "E-commerce Website Development Services",
    image: "/images/services/ecommerce-development.webp",
    imageAlt: "Packaged online order ready for shipping from an e-commerce store",
    image2: "/images/services/ecommerce-development-2.webp",
    image2Alt: "Shopper browsing products in a mobile e-commerce app",
    intro:
      "A slow checkout or clunky mobile experience is the fastest way to lose a sale. We build e-commerce stores — custom-built or on platforms like Shopify — engineered around conversion, page speed, and a checkout flow that doesn't lose customers halfway through.",
    whatIsTitle: "What Does E-commerce Website Development Include?",
    whatIsParagraphs: [
      "E-commerce website development covers everything required to sell products online: the storefront and product catalog, payment gateway integration, inventory and order management, and the checkout flow that turns a visitor into a paying customer. This can be built on a platform like Shopify, which handles much of the underlying infrastructure, or as a fully custom or headless build when a business needs pricing logic, integrations, or performance that off-the-shelf platforms don't support well.",
      "The platform choice matters less than most people assume — what actually determines whether an online store succeeds is checkout speed, mobile experience, and how well inventory and fulfillment stay in sync with what's shown on the site. A good e-commerce development company gets those fundamentals right regardless of which platform sits underneath.",
      "Most of the revenue lost on underperforming e-commerce stores isn't from a lack of traffic — it's from friction between a visitor landing on the site and completing checkout. Fixing that friction is usually a smarter investment than spending more on ads to send additional traffic into the same leaky funnel.",
    ],
    signs: {
      title: "Signs Your E-commerce Store Needs Work",
      intro: "Lost sales from a struggling store are often invisible unless you know what to look for in your own funnel data.",
      items: [
        "Your cart abandonment rate is high, and you haven't tested your checkout flow on an actual mobile device recently.",
        "Page load times are slow enough that you'd personally leave if you were a first-time visitor.",
        "You're manually updating inventory across your store and other systems, and stock discrepancies happen regularly.",
        "A promotion or pricing rule you wanted to run wasn't possible on your current platform without an expensive workaround.",
        "Your store looks the same as it did several years ago, while customer expectations for speed and mobile experience have moved on.",
        "You've added apps or plugins to work around platform limitations, and now aren't sure which ones are actually still needed.",
      ],
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      intro: "A lot of lost e-commerce revenue comes down to a small set of repeated mistakes. Here's what we see most often.",
      items: [
        "Adding too many steps to checkout, which increases cart abandonment more than most store owners realize.",
        "Not testing the mobile experience properly, even though most shoppers arrive on a phone.",
        "Launching without a plan for keeping inventory synced, leading to overselling out-of-stock items.",
        "Choosing a platform based on price alone, without checking if it can handle the pricing rules the business actually needs.",
        "Neglecting page speed, which quietly costs sales even when nobody complains about it directly.",
      ],
    },
    whoItsFor: ["Brands launching their first online store", "Retailers migrating off a legacy or slow platform", "Businesses needing custom checkout/inventory logic standard platforms can't handle", "High-traffic stores needing performance at scale"],
    whoItsForIntro:
      "E-commerce development is relevant at several different points in a retail business's lifecycle, not just at initial launch.",
    whoItsForDetail: [
      { label: "Brands launching their first online store", desc: "Launch with a store built around conversion from day one, not retrofitted after low sales numbers." },
      { label: "Retailers migrating off a legacy or slow platform", desc: "Move to a faster platform without losing SEO rankings, product data, or order history in the process." },
      { label: "Businesses needing custom checkout or inventory logic", desc: "Get pricing rules, bundles, or fulfillment logic that standard platforms don't support out of the box." },
      { label: "High-traffic stores needing performance at scale", desc: "Handle traffic spikes from promotions and seasonal demand without the site slowing down or crashing." },
    ],
    problems: [
      { problem: "Cart abandonment is high because checkout is slow or confusing.", solution: "We streamline checkout to as few steps as possible, with fast page loads on mobile and desktop, so fewer customers drop off between 'add to cart' and 'buy'." },
      { problem: "Your current platform can't handle a promotion or pricing rule you need.", solution: "We build custom logic — bundles, tiered pricing, subscriptions — that off-the-shelf platforms don't support out of the box, without forcing you into a workaround." },
      { problem: "Inventory and orders live in disconnected systems.", solution: "We integrate your store with inventory, fulfillment, and accounting systems so everything stays in sync automatically, instead of relying on manual reconciliation." },
    ],
    includesIntro:
      "Every e-commerce build is scoped around your catalog and growth plans, but most projects draw from the same core set of deliverables — here's what's typically covered from planning through launch.",
    includes: [
      "Custom or Shopify / headless store development",
      "Payment gateway integration",
      "Inventory & order management systems",
      "Mobile-first, conversion-optimized design",
      "Product catalog & search implementation",
      "Subscription & custom pricing logic",
      "Performance optimization (Core Web Vitals)",
      "Post-launch support & scaling",
    ],
    benefits: [
      { icon: CreditCard, title: "Checkout built to convert", desc: "A fast, minimal-friction checkout flow designed specifically to reduce cart abandonment, not just replicate a generic template." },
      { icon: Smartphone, title: "Mobile-first by default", desc: "Most shoppers arrive on mobile, so the experience is designed for that first, rather than adapted after the desktop version ships." },
      { icon: Truck, title: "Inventory that stays in sync", desc: "Orders, stock, and fulfillment connected across systems, so nothing gets sold twice or shows as available when it isn't." },
    ],
    whyChooseUs:
      "We treat checkout as the single most important part of an online store, because it's where revenue is won or lost after all the marketing spend that got a visitor there. Every e-commerce build we ship is tested against real payment flows and actual mobile devices before launch, not just a staging environment viewed on a desktop browser — the gap between the two is where most abandoned-cart problems quietly hide. A fast, well-built store is only half the equation — digital marketing drives the traffic that fills it, and basic cybersecurity practices protect the payment data flowing through it.",
    costTitle: "How Much Does E-commerce Website Development Cost?",
    costParagraphs: [
      "Cost depends heavily on the platform choice and complexity — a standard Shopify store with a modest product catalog costs significantly less than a custom or headless build with custom pricing logic, subscriptions, or complex inventory rules.",
      "Ongoing costs also differ: Shopify includes hosting and platform fees as part of its subscription, while a custom build has separate hosting costs but no platform transaction fees. We walk through this trade-off with you during discovery, based on your catalog size and growth plans.",
    ],
    comparisonTitle: "Shopify vs. Custom E-commerce Development",
    comparisonIntro: "Both are legitimate choices — the right one depends on how standard your catalog and pricing rules actually are.",
    comparisonItems: [
      { name: "Shopify", desc: "Fast to launch with a large app ecosystem for common needs, predictable subscription pricing, and less ongoing maintenance burden — the right default for most standard product catalogs." },
      { name: "Custom / headless e-commerce", desc: "Full control over checkout logic, pricing rules, and performance, but requires more upfront development time and ongoing maintenance responsibility — worth it when Shopify's constraints get in the way." },
      { name: "Headless Shopify", desc: "A middle ground using Shopify's backend for inventory and payments with a fully custom frontend — gives more design and performance control while keeping Shopify's commerce infrastructure underneath." },
      { name: "When you're not sure yet", desc: "If you're unsure whether Shopify or a custom build is right, walk us through your catalog and pricing needs — we'll recommend honestly, even if it's the cheaper option." },
    ],
    process: [
      { title: "Discover & Plan", desc: "We map your product catalog, pricing logic, and required integrations before choosing a platform approach, rather than defaulting to one option." },
      { title: "Design UX", desc: "Mobile-first design focused on browsing, search, and a frictionless path to checkout, since that's where most stores lose customers." },
      { title: "Build & Integrate", desc: "Store, payment, and inventory systems are built and connected end-to-end so data flows automatically across every part of the stack." },
      { title: "QA & Launch", desc: "Checkout flows and payment paths are tested thoroughly across devices before go-live, not discovered broken by your first real customer." },
      { title: "Optimize Conversion", desc: "Post-launch, we monitor funnel drop-off and iterate on what's actually costing you sales, based on real customer behavior rather than assumptions." },
    ],
    scenarioTitle: "What This Looks Like in Practice",
    scenarioParagraphs: [
      "A typical engagement starts with a look at the numbers that actually matter — mobile conversion rate, checkout drop-off, and page load time — rather than a general design refresh. Often, the biggest opportunity isn't a new feature at all, but fixing friction in a checkout flow that's been quietly costing sales for months without anyone noticing in the aggregate revenue numbers.",
      "Once the priority fixes are identified, we move through design, build, and QA with real payment flows tested on real devices, not just a staging environment. Post-launch, we watch the same funnel metrics that informed the original plan, so we can tell quickly whether a change actually moved the needle or just looked good in a mockup.",
    ],
    stackLabel: "Technology we build with",
    stack: ["Shopify", "Next.js", "Stripe", "Node.js", "Headless commerce"],
    faqs: [
      { q: "Should I use Shopify or a custom-built e-commerce store?", a: "Shopify is often the right call for standard catalogs and faster launches. Custom or headless builds make sense when you need pricing logic, integrations, or performance that Shopify's defaults can't support. We'll recommend based on your actual requirements, not a default preference." },
      { q: "How much does e-commerce website development cost?", a: "It depends on catalog size, custom logic, and integrations needed. We provide a fixed quote after understanding your requirements in a discovery call." },
      { q: "Can you migrate my store from another platform?", a: "Yes. We handle migrations from platforms like WooCommerce, Magento, or a legacy custom build, including product, customer, and order data." },
      { q: "Do you handle payment gateway integration?", a: "Yes — Stripe, PayPal, and region-specific gateways are integrated as a standard part of our e-commerce builds." },
      { q: "How do you optimize an online store for mobile conversions?", a: "Through fast page loads, a minimal-step checkout, and mobile-first design decisions validated against Core Web Vitals and real funnel data rather than guesswork." },
      { q: "Can you integrate our store with our existing inventory or accounting software?", a: "Yes — connecting your store to inventory, fulfillment, and accounting systems, such as QuickBooks or a warehouse management system, is a standard part of our e-commerce builds." },
      { q: "Do you offer ongoing support after the store launches?", a: "Yes. Post-launch support includes monitoring, bug fixes, and conversion optimization based on real funnel data, not just a handoff and goodbye." },
      { q: "Do you build stores for international shipping and multi-currency?", a: "Yes — multi-currency pricing and international shipping logic are supported on both Shopify and custom builds, configured based on the regions you actually sell into." },
      { q: "Can you redesign an existing store without rebuilding it from scratch?", a: "Often, yes. Many engagements start with a UX and checkout audit of the existing store to identify high-impact fixes before deciding whether a full rebuild is actually necessary." },
      { q: "Do you handle SEO for the e-commerce store as well?", a: "We can, either as part of the build or in partnership with our digital marketing team, so the store is structured correctly for search from day one." },
      { q: "Should I use a freelancer or agency instead of a dedicated e-commerce team?", a: "A freelancer can work for a small, well-defined task, but a full store build benefits from a team covering design, payments, inventory integration, and performance together, so nothing falls through the gaps between specialists." },
      { q: "Is my customer payment data secure?", a: "Yes — we use PCI-compliant payment processors like Stripe rather than handling raw card data ourselves, which keeps sensitive payment information out of your infrastructure entirely." },
      { q: "Can you build a marketplace or multi-vendor store, not just a single-brand shop?", a: "Yes, though marketplace and multi-vendor logic add meaningful scope — vendor onboarding, split payments, and commission tracking are scoped as part of a larger custom build." },
      { q: "Do you offer a warranty or guarantee on the finished store?", a: "Every build includes a post-launch support window to fix any issues that surface under real traffic and orders, before you're moved to an ongoing maintenance plan or on your own." },
      { q: "Do you support subscription or recurring billing models?", a: "Yes — subscription logic, recurring billing, and free-trial flows are supported on both Shopify, via its subscription APIs, and custom builds using Stripe's billing tools." },
      { q: "How do you handle sales tax and multi-region tax compliance?", a: "Tax calculation is typically handled through integrated services like Shopify Tax or Stripe Tax rather than built from scratch, configured for the regions you actually sell into." },
      { q: "Can you set up abandoned cart recovery and email marketing integrations?", a: "Yes — connecting your store to email marketing and abandoned cart recovery tools like Klaviyo is a common addition during or shortly after the initial build." },
    ],
    closingParagraph:
      "The best e-commerce platform is the one that gets out of the way of making sales — not the one with the most features on a comparison chart or the most impressive-looking demo. Book a free call and tell us about your catalog and growth plans, and we'll recommend the right approach honestly, even if that means Shopify instead of a bigger custom build.",
    related: ["digital-marketing-seo", "mobile-app-development", "cybersecurity-services"],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    tag: "Mobile",
    name: "Mobile App Development",
    navLabel: "Mobile App Development",
    seoTitle: "Mobile App Development Company | iOS & Android Apps | 360CloudTech",
    metaDescription:
      "Mobile app development services for iOS, Android, and cross-platform apps — built with React Native or Flutter, launched to the App Store and Google Play, and supported after release.",
    h1: "Mobile App Development Services",
    image: "/images/services/mobile-app-development.webp",
    imageAlt: "Mobile app dashboard interface displayed on a smartphone screen",
    image2: "/images/services/custom-software-development-2.webp",
    image2Alt: "Mobile app development team collaborating on laptops during a build sprint",
    intro:
      "360CloudTech builds mobile apps for iOS and Android — as native apps, or cross-platform using React Native or Flutter when one codebase can serve both platforms well. Whether you need a consumer app ready for the App Store and Google Play, or an internal tool for field teams, our mobile app development company handles design, development, testing, and submission end to end.",
    whatIsTitle: "What Does Mobile App Development Include?",
    whatIsParagraphs: [
      "Mobile app development covers everything needed to take an app from idea to a published, working product on a user's phone: UX and interface design suited to mobile screens, the actual coding of the app for iOS, Android, or both, backend APIs the app talks to, testing across real devices, and submission to the App Store and Google Play — each with its own review process and technical requirements.",
      "The first real decision is native versus cross-platform. Native development, using Swift for iOS or Kotlin for Android, gives the best performance and deepest access to device features, but means building and maintaining two separate codebases. Cross-platform frameworks like React Native and Flutter let one codebase ship to both platforms, trading a small amount of native polish for meaningfully faster development and lower long-term maintenance cost — the right choice for most apps that aren't graphically intensive or hardware-dependent.",
      "A mobile app development company worth hiring should be able to recommend which approach fits your actual app, instead of defaulting to whichever one they happen to specialize in.",
    ],
    signs: {
      title: "Signs You're Ready for a Mobile App",
      intro: "Not every business needs a mobile app immediately — these are the situations where one usually pays for itself.",
      items: [
        "Your customers are asking for a way to interact with your business from their phone, not just a mobile website.",
        "You need access to device features — push notifications, camera, GPS location, or offline access — that a website can't provide reliably.",
        "Your mobile website traffic is high, but engagement and repeat visits are lower than they should be.",
        "You're running an internal process on paper or spreadsheets that field staff could handle faster from a phone.",
        "A competitor has launched an app and is capturing customer attention and loyalty that used to be yours.",
        "You've validated demand through a website or MVP, and a dedicated app is the natural next step for retention.",
      ],
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      intro: "Mobile app projects tend to go wrong in predictable ways. Here's what we see most often.",
      items: [
        "Building every feature on the wish list before launch, instead of shipping a focused version and learning from real users.",
        "Choosing native development by default without checking whether cross-platform would meet the actual performance needs.",
        "Treating App Store and Google Play submission as a final step instead of planning for review requirements from day one.",
        "Skipping testing on older or lower-end devices, which is where most performance complaints actually come from.",
        "Launching without a plan for updates, so the app quietly falls behind OS changes within a year.",
      ],
    },
    whoItsFor: ["Startups launching a consumer app", "Businesses needing an internal tool for field teams", "Companies replacing a slow or outdated existing app", "Products needing offline access or device features"],
    whoItsForIntro:
      "Mobile app development makes sense once a website or web app genuinely isn't enough — usually because of device features, offline needs, or how often customers expect to open the app.",
    whoItsForDetail: [
      { label: "Startups launching a consumer app", desc: "Get to the App Store and Google Play with an app built to handle real user growth, not just a demo." },
      { label: "Businesses needing an internal tool for field teams", desc: "Give staff a fast, purpose-built app instead of a clunky mobile website or paper process." },
      { label: "Companies replacing a slow or outdated app", desc: "Rebuild on modern architecture without losing your existing users, ratings, or App Store history." },
      { label: "Products needing offline access or device features", desc: "Build apps that use push notifications, camera, GPS, or offline storage — things a website can't reliably do." },
    ],
    problems: [
      { problem: "You're not sure whether to build native apps or a single cross-platform app.", solution: "We assess your actual performance and feature needs and recommend honestly — cross-platform for most apps, native when performance or device access genuinely requires it." },
      { problem: "A previous app was rejected or delayed during App Store or Google Play review.", solution: "We build to each platform's current guidelines from the start and handle the submission and review process directly, so rejections don't blindside you at launch." },
      { problem: "Your existing app is slow, buggy, or expensive to maintain.", solution: "We audit the existing codebase first, then either refactor the specific problem areas or rebuild the parts that are actually holding you back — not a full rewrite by default." },
    ],
    includesIntro:
      "Every mobile app engagement is scoped around your platform and feature needs, but most projects draw from the same core set of deliverables — here's what's typically covered from design through launch.",
    includes: [
      "UX/UI design for mobile screens",
      "iOS app development (Swift)",
      "Android app development (Kotlin)",
      "Cross-platform development (React Native / Flutter)",
      "Backend APIs & third-party integrations",
      "Device testing across screen sizes & OS versions",
      "App Store & Google Play submission",
      "Post-launch support & updates",
    ],
    benefits: [
      { icon: Gauge, title: "Built for real-world performance", desc: "Smooth animations and fast load times tested on actual mid-range devices, not just the newest phone in the office." },
      { icon: Boxes, title: "One codebase, two platforms", desc: "Cross-platform development means most features ship to iOS and Android together, instead of building everything twice." },
      { icon: FileCheck2, title: "Submission handled for you", desc: "We prepare store listings and handle App Store and Google Play review requirements, so launch isn't held up by paperwork." },
    ],
    whyChooseUs:
      "We treat app store submission as part of development, not an afterthought tacked on at the end — icon sizes, privacy disclosures, and platform-specific review requirements are handled from the first sprint, not discovered the week of launch. Mobile app work also pairs naturally with custom software development for the backend APIs an app depends on, and with digital marketing to drive installs once the app is live.",
    costTitle: "How Much Does Mobile App Development Cost?",
    costParagraphs: [
      "Cost depends primarily on feature complexity and whether the app is cross-platform or fully native for both iOS and Android — a focused app with a handful of core screens costs meaningfully less than one with real-time features, complex offline sync, or heavy backend logic.",
      "Cross-platform development is typically more cost-effective than building separate native apps, since most of the code is shared between iOS and Android. We quote projects after a discovery call once we understand your feature list and platform requirements, either as a fixed price for a defined scope or in priced sprints for larger apps.",
    ],
    comparisonTitle: "Native vs. Cross-Platform: Which Should You Choose?",
    comparisonIntro: "This is usually the first real decision in mobile app development, and the right answer depends on what your app actually needs to do.",
    comparisonItems: [
      { name: "Native (Swift / Kotlin)", desc: "Best performance and full access to device features and the latest platform capabilities, but requires building and maintaining two separate codebases — more suited to graphically intensive or hardware-dependent apps." },
      { name: "Cross-platform (React Native / Flutter)", desc: "One codebase ships to both iOS and Android, meaningfully reducing development time and long-term maintenance cost — the right fit for most business and consumer apps." },
      { name: "Progressive Web App (PWA)", desc: "Installable from the browser with no app store required, at the cost of more limited access to native device features — worth considering for simpler use cases." },
      { name: "When you're not sure yet", desc: "If you're unsure which approach fits, walk us through your feature list and we'll recommend honestly — sometimes a PWA solves the problem without needing a full native build." },
    ],
    process: [
      { title: "Discover & Scope", desc: "We map required features, target platforms, and any backend dependencies before choosing a technical approach." },
      { title: "Design UX/UI", desc: "Screens are designed around how people actually use a phone — one-handed, on the move, with attention spans measured in seconds." },
      { title: "Build in Sprints", desc: "Two-week sprints with a build you can install and test on your own device, not just a set of static screens to review." },
      { title: "Test Across Devices", desc: "Testing covers a real spread of screen sizes, OS versions, and network conditions, not just the latest flagship phone." },
      { title: "Launch & Support", desc: "We handle App Store and Google Play submission, then move into monitoring and post-launch updates as real usage comes in." },
    ],
    scenarioTitle: "What This Looks Like in Practice",
    scenarioParagraphs: [
      "A typical engagement starts with a hard look at the feature list to separate what the app actually needs on day one from what can wait until after launch — a common pattern is a founder wanting fifteen features when five would validate the idea just as well, faster and cheaper. Getting that scope right early avoids a six-month build for an app that hasn't been tested with real users yet.",
      "From there, cross-platform development usually moves quickly since most of the UI and logic is shared between iOS and Android. App Store and Google Play submission is planned from the start rather than left as a surprise at the end, since review requirements — privacy disclosures, icon formats, permission justifications — are far easier to satisfy when built in from the first sprint than retrofitted the week before launch.",
    ],
    stackLabel: "Technology we build with",
    stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "GraphQL"],
    faqs: [
      { q: "Should I build a native app or a cross-platform app?", a: "For most business and consumer apps, cross-platform development with React Native or Flutter is the better starting point — it's faster to build and cheaper to maintain. Native makes sense when your app is graphically intensive, hardware-dependent, or needs the absolute latest platform features." },
      { q: "How much does mobile app development cost?", a: "It depends on feature complexity and whether you need native or cross-platform development. We scope this in a discovery call and provide a fixed quote before starting, based on your actual feature list." },
      { q: "How long does it take to build a mobile app?", a: "A focused MVP with core features typically takes 8–12 weeks after discovery. Apps with more complex backend logic or real-time features take longer, broken into sprints with clear milestones." },
      { q: "Do you build apps for both iOS and Android?", a: "Yes. Most projects use cross-platform development to ship to both platforms from one codebase, though we also build fully native apps when the project calls for it." },
      { q: "Will you handle App Store and Google Play submission?", a: "Yes. Submission, including store listings, screenshots, and meeting each platform's review requirements, is a standard part of every mobile app engagement." },
      { q: "Can you build an app that works offline?", a: "Yes. Offline data storage and sync are common requirements we build for, particularly for field-service and internal tools apps that can't rely on constant connectivity." },
      { q: "Do you offer support after the app launches?", a: "Yes. Every engagement can include ongoing maintenance and updates to keep the app working as new iOS and Android versions release." },
      { q: "Can you take over an existing app instead of building from scratch?", a: "Yes. We regularly audit and take ownership of existing app codebases, including apps built by other developers, before continuing development or fixing specific issues." },
      { q: "Do you build apps for startups, or only established companies?", a: "Both. We work with early-stage startups building their first app as well as established businesses replacing or extending an existing one." },
      { q: "What's the difference between a mobile app and a progressive web app (PWA)?", a: "A PWA runs in the browser and can be installed without an app store, but has more limited access to native device features. A native or cross-platform app is required for full access to things like push notifications, camera, and background processes." },
      { q: "Do you sign an NDA and guarantee IP ownership?", a: "Yes. We sign NDAs before discovery calls on request, and every contract transfers full IP ownership of the code and design to you on completion." },
      { q: "Can the app integrate with our existing backend or CRM?", a: "Yes. Connecting to existing APIs, a custom CRM, or third-party services is a standard part of most mobile app builds — we scope this during discovery." },
      { q: "Do you provide push notifications and analytics?", a: "Yes — push notification infrastructure and analytics tracking, including screen views, events, and conversion funnels, are commonly included so you can see how the app is actually being used after launch." },
      { q: "Should I hire a freelancer instead of a mobile app development company?", a: "A freelancer can work for a very small, well-defined app, but a company gives you continuity, coverage across design, iOS, Android, and backend, and accountability a single individual can't always provide on larger projects." },
      { q: "Do you work with clients outside India?", a: "Yes. We build mobile apps for clients across India and internationally, coordinating across time zones as part of normal delivery." },
      { q: "What happens if requirements change mid-project?", a: "Scope changes are normal. Because we work in two-week sprints, new requirements get added to the backlog and prioritized for an upcoming sprint, with a clear conversation about how it affects timeline." },
    ],
    closingParagraph:
      "Whether you're validating a new app idea or replacing one that's become hard to maintain, getting the native-versus-cross-platform decision right early saves significant time and cost later. Book a free call and we'll give you an honest read on the right approach for your app, timeline, and budget.",
    related: ["custom-software-development", "cloud-infrastructure-devops", "digital-marketing-seo"],
  },
];

export function getServiceBySlug(slug: string | undefined) {
  return servicesContent.find((s) => s.slug === slug);
}
