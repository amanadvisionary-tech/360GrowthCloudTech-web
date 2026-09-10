import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { useScheduleMeeting } from "@/hooks/useScheduleMeeting";
import { useSeo, SITE_URL } from "@/lib/seo";
import { AutoLinkText } from "@/components/AutoLinkText";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code2, Users, TrendingUp, Cloud, ShieldCheck, ShoppingCart, Smartphone,
  ArrowRight, CheckCircle, Zap, Globe, Lock, Award, Wallet, Headphones, Calendar,
  Database, Sparkles, Building2, MapPin, XCircle, Layers, Gauge,
} from "lucide-react";
import {
  SiReact, SiNodedotjs, SiNextdotjs, SiTypescript, SiGooglecloud, SiPostgresql, SiDocker,
  SiGraphql, SiKubernetes, SiTerraform, SiGithubactions, SiShopify, SiStripe,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const ICON_STYLES = [
  { chip: "bg-primary/10 group-hover:bg-primary", icon: "text-primary group-hover:text-white" },
  { chip: "bg-accent/10 group-hover:bg-accent", icon: "text-accent group-hover:text-white" },
  { chip: "bg-foreground/8 group-hover:bg-foreground", icon: "text-foreground/70 group-hover:text-white" },
];

const ORBIT_STYLES = [
  { ring: "bg-white text-primary", active: "bg-primary text-white" },
  { ring: "bg-white text-accent", active: "bg-accent text-white" },
  { ring: "bg-white text-foreground/70", active: "bg-foreground text-white" },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.09 } } };

const PAGE_TITLE = "Custom Software Development Company in India | 360CloudTech";
const PAGE_DESCRIPTION =
  "360CloudTech is a top custom software development company in India building web, mobile, CRM, ERP & AI-powered software for startups and enterprises.";

export default function Home() {
  const { setOpen } = useScheduleMeeting();

  const services = [
    {
      icon: Code2, tag: "Engineering", title: "Custom Software Development", label: "Custom Software", slug: "custom-software-development",
      short: "High-performance web & mobile apps, built to scale.",
      desc: "High-performance web and mobile applications engineered for scale — from MVPs to enterprise-grade platforms, built on modern, maintainable architecture.",
    },
    {
      icon: Smartphone, tag: "Mobile", title: "Mobile App Development", label: "Mobile Apps", slug: "mobile-app-development",
      short: "Native & cross-platform apps for iOS and Android.",
      desc: "iOS, Android, and cross-platform apps built with React Native or Flutter, launched to the App Store and Google Play, and supported after release.",
    },
    {
      icon: Users, tag: "Product", title: "Custom CRM Tools", label: "Custom CRM Tools", slug: "custom-crm-development",
      short: "CRM systems built around your exact workflow.",
      desc: "Bespoke CRM and internal tools that mirror your exact workflow, instead of forcing your team to adapt to rigid, off-the-shelf software.",
    },
    {
      icon: TrendingUp, tag: "Growth", title: "Digital Marketing & SEO", label: "Digital Marketing", slug: "digital-marketing-seo",
      short: "SEO & paid ads that turn traffic into revenue.",
      desc: "Data-driven SEO, paid advertising, and content strategy designed to turn search traffic into qualified leads and measurable revenue growth.",
    },
    {
      icon: Cloud, tag: "DevOps", title: "Cloud Infrastructure", label: "Cloud Infrastructure", slug: "cloud-infrastructure-devops",
      short: "Scalable, secure cloud infrastructure & DevOps.",
      desc: "Scalable cloud architecture, containerization, and CI/CD pipelines on AWS, Google Cloud, or Azure — built for uptime, security, and cost efficiency.",
    },
    {
      icon: ShieldCheck, tag: "Security", title: "Cybersecurity Services", label: "Cybersecurity", slug: "cybersecurity-services",
      short: "Audits & monitoring that keep you protected.",
      desc: "Security audits, penetration testing, and continuous monitoring that protect your applications, infrastructure, and customer data from evolving threats.",
    },
    {
      icon: ShoppingCart, tag: "Commerce", title: "E-commerce Development", label: "E-commerce", slug: "ecommerce-development",
      short: "Online stores built to convert browsers into buyers.",
      desc: "End-to-end online stores with fast, easy checkout, payment integrations, and inventory systems built to convert browsers into buyers.",
    },
  ];

  const FeaturedIcon = services[0].icon;
  const [activeService, setActiveService] = useState(0);
  const orbitTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startOrbitTimer = () => {
    if (orbitTimerRef.current) clearInterval(orbitTimerRef.current);
    orbitTimerRef.current = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3500);
  };

  useEffect(() => {
    startOrbitTimer();
    return () => {
      if (orbitTimerRef.current) clearInterval(orbitTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOrbitSelect = (i: number) => {
    setActiveService(i);
    startOrbitTimer();
  };

  const stack = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", icon: SiNextdotjs, color: "#1a1512" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
    { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  ];

  const commitments = [
    { icon: Award, value: "100%", label: "Code Ownership", sub: "yours from day one, no lock-in" },
    { icon: Wallet, value: "Fixed", label: "Transparent Pricing", sub: "scoped and quoted upfront" },
    { icon: Headphones, value: "24/7", label: "Support & Monitoring", sub: "across time zones" },
    { icon: Calendar, value: "Weekly", label: "Progress Demos", sub: "see real work, every sprint" },
  ];

  const faqs = [
    {
      q: "What services does 360CloudTech provide?",
      a: "We provide custom software development, bespoke CRM tools, digital marketing and SEO, cloud infrastructure and DevOps, cybersecurity, and e-commerce development — all delivered by one accountable team instead of multiple disconnected vendors.",
    },
    {
      q: "How long does a typical software development project take?",
      a: "It depends on scope. Discovery and technical planning usually take 1–2 weeks, a focused MVP can launch in 6–10 weeks, and larger platforms are broken into sprints with a timeline agreed before work begins.",
    },
    {
      q: "Can you improve or take over an existing product instead of building from scratch?",
      a: "Yes. We regularly audit, refactor, and take ownership of existing codebases — including performance fixes, cloud migrations, and security hardening — without requiring a full rebuild.",
    },
    {
      q: "How is pricing structured?",
      a: "We offer fixed-price engagements for clearly defined scope, or a dedicated-team model billed monthly for ongoing work. You'll always receive a detailed quote after an initial discovery call, with no hidden costs.",
    },
    {
      q: "What should I look for in the top custom software development companies in India?",
      a: "Look at their past work, make sure you'll own 100% of the code, and check if they show you real progress every sprint — not just a final reveal months later. That's exactly how we work, which is why we're often on the shortlist.",
    },
    {
      q: "Do you build custom ERP software?",
      a: "Yes — it's one of our most common projects. We bring your inventory, finance, and HR into one system built around how your business actually works, not a rigid, one-size-fits-all template.",
    },
    {
      q: "Are you an AI software development company as well?",
      a: "Yes. Most of what we build today has some AI built in — automation, a smart internal assistant, or AI-powered support — and it's reviewed by our engineers just like any other feature.",
    },
    {
      q: "What are some real examples of custom software?",
      a: "A custom CRM for your sales pipeline, a custom ERP for inventory and finance, an AI tool that automates busywork, a booking platform, or a dashboard for logistics, healthcare, or lending.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  useSeo({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: "/", jsonLd });

  const usedHrefs = new Set<string>();

  const customSoftwareExamples = [
    { icon: Users, title: "Custom CRM Systems", desc: "Sales pipelines, lead scoring, and support workflows built around how your team actually sells." },
    { icon: Database, title: "Custom ERP Software", desc: "Inventory, finance, procurement, and HR unified into one system instead of three disconnected tools." },
    { icon: Sparkles, title: "AI-Powered Internal Tools", desc: "Automation, document processing, and AI copilots that remove hours of manual, repetitive work." },
    { icon: Calendar, title: "Booking & Scheduling Platforms", desc: "Customer-facing scheduling systems built for your exact rules, not a generic calendar plugin." },
    { icon: Building2, title: "Industry-Specific Dashboards", desc: "Logistics tracking, patient scheduling, and lending workflows off-the-shelf software rarely handles well." },
    { icon: Smartphone, title: "Custom Mobile Apps", desc: "Native and cross-platform apps for iOS and Android, sharing a backend with your web platform." },
  ];

  const comparisonRows = [
    { label: "Live in days, not months", shelf: true, custom: false },
    { label: "Lower upfront cost", shelf: true, custom: false },
    { label: "Matches your exact workflow", shelf: false, custom: true },
    { label: "No per-seat licensing fees", shelf: false, custom: true },
    { label: "You own the code outright", shelf: false, custom: true },
    { label: "No ceiling on customization", shelf: false, custom: true },
  ];

  return (
    <Layout hideFooterCta>
      <div data-testid="home-page">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden hero-grid-bg">
          {/* Warm orange glow */}
          <div
            className="absolute inset-x-0 top-0 h-72 opacity-60"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% -5%, rgba(232,82,26,0.12) 0%, transparent 70%)" }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

              {/* Left: copy */}
              <div className="text-center lg:text-left">
                <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
                  <span className="section-label mb-7 inline-flex">✦ Custom Software Development Company ✦</span>
                </motion.div>

                <motion.h1
                  className="display-heading text-5xl md:text-6xl lg:text-[4.2rem] mb-7"
                  variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.7, delay: 0.1 }}
                >
                  We build the product.
                  <br />
                  You build the{" "}
                  <span className="cursive-accent" style={{ fontSize: "1.05em" }}>company.</span>
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                  variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.25 }}
                >
                  360CloudTech is a custom software development company in India offering end-to-end software development services — web apps, mobile apps, CRM & ERP systems, and AI tools — plus cloud, security, and marketing, all under one roof, for clients in India and worldwide.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10"
                  variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <button
                    onClick={() => setOpen(true)}
                    className="btn-primary"
                    data-testid="hero-cta-get-started"
                  >
                    Book a Free Strategy Call
                  </button>
                  <Link href="/services" className="btn-dark">
                    View services
                  </Link>
                </motion.div>

                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2"
                  variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.55 }}
                >
                  {[
                    { icon: CheckCircle, text: "No lock-in contracts" },
                    { icon: Lock, text: "Security-first builds" },
                    { icon: Globe, text: "India & global delivery" },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Icon size={13} className="text-primary" />{text}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: orbiting services visual */}
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div
                  className="absolute -inset-16 rounded-full -z-10"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(232,82,26,0.14), transparent 65%)" }}
                />

                <div className="relative w-full max-w-[440px] aspect-square mx-auto">
                  {/* orbit rings (slow clockwise spin) */}
                  <motion.div
                    className="absolute inset-[6%] rounded-full border border-dashed border-foreground/15"
                    style={{ transformOrigin: "50% 50%" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-[26%] rounded-full border border-dashed border-foreground/12"
                    style={{ transformOrigin: "50% 50%" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />

                  {/* orbit nodes — the whole ring spins clockwise, icons counter-rotate to stay upright */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ transformOrigin: "50% 50%" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  >
                    {services.map((service, i) => {
                      const angle = -90 + i * (360 / services.length);
                      const rad = (angle * Math.PI) / 180;
                      const radius = 42;
                      const left = 50 + radius * Math.cos(rad);
                      const top = 50 + radius * Math.sin(rad);
                      const style = ORBIT_STYLES[i % ORBIT_STYLES.length];
                      const isActive = i === activeService;
                      return (
                        <div key={i} className="absolute" style={{ left: `${left}%`, top: `${top}%` }}>
                          <motion.button
                            type="button"
                            onClick={() => handleOrbitSelect(i)}
                            style={{ x: "-50%", y: "-50%" }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                            className="flex flex-col items-center gap-2"
                            aria-label={service.title}
                            aria-pressed={isActive}
                          >
                            <span
                              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 border border-border/60 ${isActive ? style.active : style.ring}`}
                            >
                              <service.icon size={20} />
                            </span>
                            <span className="text-[11px] font-bold text-foreground/70 text-center leading-tight w-20">
                              {service.label}
                            </span>
                          </motion.button>
                        </div>
                      );
                    })}
                  </motion.div>

                  {/* center card */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[44%] aspect-square rounded-full bg-white shadow-xl flex items-center justify-center p-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeService}
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35 }}
                          className="text-center max-w-[85%]"
                        >
                          {/* <div className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 ${ORBIT_STYLES[activeService % ORBIT_STYLES.length].active}`}>
                            {(() => {
                              const ActiveIcon = services[activeService].icon;
                              return <ActiveIcon size={18} />;
                            })()}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                            {services[activeService].tag}
                          </span> */}
                          <h3 className="font-bold text-sm text-foreground mb-1.5 leading-snug">
                            {services[activeService].title}
                          </h3>
                          <p className="text-muted-foreground text-[11px] leading-relaxed">
                            {services[activeService].short}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────── */}
        <section className="py-10 border-y border-border/60 bg-white/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">Built with modern, production-grade technology</p>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...stack, ...stack].map(({ name, icon: Icon, color }, i) => (
                <span
                  key={i}
                  title={name}
                  aria-label={name}
                  style={{ color }}
                  className="flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200 select-none px-8 md:px-10 shrink-0"
                >
                  <Icon size={32} />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Our Expertise</span>
              <h2 className="display-heading text-3xl md:text-5xl text-foreground mb-5">
                Everything you need<br />to <span className="cursive-accent">succeed online.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Looking for custom software development services — not just code, but a partner who builds, grows, and supports your product? We handle every layer, so you're not juggling three different vendors.
              </p>
            </motion.div>

            {/* Featured service — our flagship offering, called out from the grid */}
            <motion.div
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Link href={`/services/${services[0].slug}`}>
                <div
                  className="relative rounded-3xl overflow-hidden p-8 md:p-10 group cursor-pointer"
                  style={{ backgroundColor: "#1a1512" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse 60% 90% at 100% 0%, rgba(232,82,26,0.28) 0%, transparent 60%)" }}
                  />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                          <FeaturedIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/15 px-3 py-1.5 rounded-full">
                          Our Specialty
                        </span>
                      </div>
                      <h3 className="display-heading text-2xl md:text-3xl text-white mb-3">{services[0].title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed max-w-xl">{services[0].desc}</p>
                    </div>
                    <div className="shrink-0">
                      <span className="btn-primary inline-flex items-center gap-2">
                        Explore This Service
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
              variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
            >
              {services.slice(1).map((service, i) => {
                const style = ICON_STYLES[i % ICON_STYLES.length];
                return (
                  <Link href={`/services/${service.slug}`} key={i}>
                    <motion.div
                      variants={fadeUp} transition={{ duration: 0.45 }}
                      className="premium-card rounded-2xl p-6 group h-full cursor-pointer relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        style={{ background: "linear-gradient(90deg, #e8521a, #f07a3a)" }}
                      />
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 ${style.chip}`}>
                          <service.icon className={`w-5 h-5 transition-colors ${style.icon}`} />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{service.tag}</span>
                      </div>
                      <h3 className="font-bold text-base mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                      <span className="text-xs font-bold text-primary flex items-center gap-1">
                        Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── WHAT IS CUSTOM SOFTWARE DEVELOPMENT ──────────── */}
        <section className="py-24 bg-white/40 border-y border-border/60 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <span className="section-label mb-5 inline-flex">Custom Software Development Company</span>
                <h2 className="display-heading text-3xl md:text-5xl text-foreground mb-6">
                  What is a <span className="cursive-accent">custom software development company?</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-7">
                  Simple answer: it's a company that builds software made just for your business, instead of selling you the same generic product as everyone else. Some call it a custom software development agency, others call it one of the custom software design companies — same idea either way, and it's what <AutoLinkText text="360CloudTech" currentPath="/" usedHrefs={usedHrefs} /> does every day.
                </p>
                <motion.div className="space-y-4 mb-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
                  {[
                    { icon: Sparkles, title: "Built just for you", desc: "No extra features you'll never touch — only what your team actually needs." },
                    { icon: Layers, title: "CRM, ERP, AI & apps — one team", desc: "Everything built under one roof, so nothing gets lost between vendors." },
                    { icon: Globe, title: "Trusted in India, the US & UK", desc: "From Delhi to Mumbai to clients abroad — same quality, every time." },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="flex gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm mb-0.5">{title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="flex flex-wrap items-center gap-2"
                  variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                >
                  {["Delhi NCR", "Noida, Uttar Pradesh", "Bengaluru", "Mumbai", "USA", "UK"].map((place, i) => (
                    <motion.span
                      key={i} variants={fadeUp} transition={{ duration: 0.4 }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 bg-white/60 border border-border/60 px-3 py-1.5 rounded-full"
                    >
                      <MapPin size={12} className="text-primary" />{place}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 24, scale: 0.96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              >
                <div
                  className="absolute -inset-10 rounded-full -z-10"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(232,82,26,0.16), transparent 65%)" }}
                />
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/services/custom-software-development.webp"
                    alt="Custom software development company engineers writing and testing production code"
                    width={1200} height={900} loading="lazy"
                    className="w-full h-[300px] md:h-[420px] object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -left-6 premium-card rounded-2xl p-5 hidden sm:flex items-center gap-3 shadow-lg"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ background: "rgba(255,255,255,0.9)" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground leading-tight">100% Code Ownership</div>
                    <div className="text-muted-foreground text-xs">Yours from day one</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CUSTOM SOFTWARE EXAMPLES ─────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Custom Software Examples</span>
              <h2 className="display-heading text-3xl md:text-5xl text-foreground mb-5">
                What we actually <span className="cursive-accent">build.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Real custom software examples from businesses we work with — not a generic feature list.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
              variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
            >
              {customSoftwareExamples.map((item, i) => {
                const style = ICON_STYLES[i % ICON_STYLES.length];
                return (
                  <motion.div key={i} variants={fadeUp} transition={{ duration: 0.45 }} className="premium-card rounded-2xl p-6 group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300 ${style.chip}`}>
                      <item.icon className={`w-5 h-5 transition-colors ${style.icon}`} />
                    </div>
                    <h3 className="font-bold text-base mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── REAL RESULTS ─────────────────────────────────── */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -24, scale: 0.96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              >
                <div
                  className="absolute -inset-10 rounded-full -z-10"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(232,82,26,0.14), transparent 65%)" }}
                />
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/images/services/custom-software-development-2.webp"
                    alt="Software development team reviewing results during a build sprint"
                    width={1200} height={900} loading="lazy"
                    className="w-full h-[300px] md:h-[420px] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <span className="section-label mb-5 inline-flex">Proven Track Record</span>
                <h2 className="display-heading text-3xl md:text-5xl text-foreground mb-5">
                  Real results, not just <span className="cursive-accent">promises.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  We judge every project the same way you do — by results, not busywork.
                </p>
                <motion.div
                  className="grid grid-cols-3 gap-4 mb-8"
                  variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                >
                  {[
                    { value: "40%", label: "Faster Load Times" },
                    { value: "2x", label: "Conversion Rates" },
                    { value: "99.99%", label: "System Uptime" },
                  ].map((stat, i) => (
                    <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }} className="premium-card rounded-2xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-black gradient-text mb-1">{stat.value}</div>
                      <div className="text-muted-foreground text-[11px] font-semibold uppercase tracking-wide leading-tight">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
                <Link href="/case-studies" className="btn-dark inline-flex items-center gap-1.5">
                  See Full Case Studies <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── COMMITMENTS BANNER ───────────────────────────── */}
        <section className="py-16 border-y border-border/60 bg-white/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
            >
              {commitments.map((item, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="display-heading text-3xl md:text-4xl text-foreground mb-1.5">{item.value}</div>
                  <div className="text-foreground text-sm font-bold mb-0.5">{item.label}</div>
                  <div className="text-muted-foreground text-xs">{item.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <span className="section-label mb-5 inline-flex">Why Choose Us</span>
                <h2 className="display-heading text-3xl md:text-5xl text-foreground mb-6">
                  Why choose <span className="cursive-accent">360CloudTech?</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10 text-sm">
                  We're not just here for one project. We become your long-term tech partner — which is why most clients stick around long after the first build.
                </p>
                <div className="relative">
                  <div
                    className="absolute left-[18px] top-2 bottom-2 w-px hidden sm:block"
                    style={{ background: "linear-gradient(to bottom, rgba(232,82,26,0.35), rgba(232,82,26,0.05))" }}
                  />
                  <motion.div className="space-y-2" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
                    {[
                      { icon: Zap, title: "Fast Delivery", desc: "Agile sprints with weekly demos — see progress from day one." },
                      { icon: Lock, title: "Security-First Engineering", desc: "Best-practice architecture aligned with SOC 2, HIPAA, and GDPR principles, built in from the start." },
                      { icon: Globe, title: "India & Global Support", desc: "Round-the-clock support across time zones, for clients in India and worldwide." },
                      { icon: TrendingUp, title: "Measurable Results", desc: "Data-backed KPIs and transparent reporting every step of the way." },
                    ].map(({ icon: Icon, title, desc }, i) => (
                      <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="relative flex gap-4 p-3 rounded-2xl transition-colors hover:bg-primary/5 group">
                        <div className="relative z-10 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon size={16} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="font-bold text-foreground text-sm mb-0.5">{title}</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Right side metric grid */}
              <motion.div
                className="grid grid-cols-2 gap-3"
                variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
              >
                {[
                  { icon: Layers, bg: "#1a1512", value: "Full-Stack", label: "Delivery", sub: "Web, mobile & cloud — one team" },
                  { icon: Wallet, bg: "#e8521a", value: "Flexible", label: "Engagement Models", sub: "Fixed-price or dedicated team" },
                  { icon: Gauge, bg: "#2d2620", value: "99.9%", label: "Uptime SLA", sub: "On managed cloud infrastructure" },
                  { icon: Headphones, bg: "#3d1a0a", value: "24/7", label: "Support", sub: "Always-on monitoring & response" },
                ].map((item, i) => (
                  <motion.div
                    key={i} variants={fadeUp} transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative rounded-2xl p-6 text-white cursor-default overflow-hidden shadow-md"
                    style={{ backgroundColor: item.bg }}
                  >
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20"
                      style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)" }}
                    />
                    <div className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,255,255,0.12)" }}>
                      <item.icon size={16} className="text-white" />
                    </div>
                    <div className="relative z-10 display-heading text-2xl mb-1">{item.value}</div>
                    <div className="relative z-10 font-bold text-sm mb-1">{item.label}</div>
                    <div className="relative z-10 text-white/65 text-xs leading-snug">{item.sub}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────── */}
        <section className="py-24 bg-white/40 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-4"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Making The Right Call</span>
              <h2 className="display-heading text-2xl md:text-4xl text-foreground mb-4">
                Custom Software vs. Off-the-Shelf Software
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Not sure which one's right for you? Here's an honest, side-by-side look.
              </p>
            </motion.div>

            <motion.div
              className="premium-card rounded-3xl overflow-hidden mt-10"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              {/* header row */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] items-end border-b border-border/60">
                <div className="p-4 sm:p-5" />
                <div className="text-center p-4 sm:p-5">
                  <div className="text-xs sm:text-sm font-bold text-foreground/60">Off-the-Shelf</div>
                </div>
                <div className="text-center p-4 sm:p-5" style={{ background: "rgba(232,82,26,0.06)" }}>
                  <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-white bg-primary px-2.5 py-1 rounded-full whitespace-nowrap mb-1.5">
                    Our Approach
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-primary">Custom Software</div>
                </div>
              </div>

              {/* rows */}
              {comparisonRows.map((row, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`grid grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr] items-center ${i !== comparisonRows.length - 1 ? "border-b border-border/40" : ""}`}
                >
                  <div className="p-4 sm:p-5 text-xs sm:text-sm font-semibold text-foreground/80">{row.label}</div>
                  <div className="flex justify-center p-4 sm:p-5">
                    {row.shelf ? (
                      <CheckCircle size={18} className="text-foreground/40" />
                    ) : (
                      <XCircle size={18} className="text-foreground/20" />
                    )}
                  </div>
                  <div className="flex justify-center p-4 sm:p-5 h-full" style={{ background: "rgba(232,82,26,0.06)" }}>
                    {row.custom ? (
                      <CheckCircle size={18} className="text-primary" />
                    ) : (
                      <XCircle size={18} className="text-foreground/20" />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-center text-muted-foreground text-xs sm:text-sm leading-relaxed mt-6"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              Still not sure which fits? A short discovery call is usually enough to tell — we'll say directly if an existing platform would serve your business better.{" "}
              <button onClick={() => setOpen(true)} className="text-primary font-bold hover:underline">
                Book a free call
              </button>
            </motion.p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-24 bg-white/40 border-t border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

              <motion.div
                className="lg:col-span-2"
                variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <span className="section-label mb-5 inline-flex">FAQ</span>
                <h2 className="display-heading text-3xl md:text-5xl text-foreground mb-4">
                  Questions, <span className="cursive-accent">answered.</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Can't find what you're looking for? Book a free call and we'll walk you through it directly.
                </p>
                <div className="rounded-2xl p-6 relative overflow-hidden" style={{ backgroundColor: "#1a1512" }}>
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(232,82,26,0.22) 0%, transparent 70%)" }} />
                  <div className="relative z-10">
                    <h4 className="font-bold text-white text-sm mb-1">Still have questions?</h4>
                    <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Talk to an engineer, not a salesperson.
                    </p>
                    <button onClick={() => setOpen(true)} className="btn-primary rounded-full" style={{ fontSize: "0.8rem", padding: "9px 18px" }}>
                      Book a Free Call
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-3"
                variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Accordion type="single" collapsible className="premium-card rounded-2xl px-6">
                  {faqs.map((faq, i) => (
                    <AccordionItem value={`faq-${i}`} key={i} className={i === faqs.length - 1 ? "border-b-0" : ""}>
                      <AccordionTrigger className="text-left font-bold text-foreground text-sm py-5 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-3xl overflow-hidden text-center px-8 py-20 relative"
              style={{ backgroundColor: "#1a1512" }}
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 50% 100%, rgba(232,82,26,0.18) 0%, transparent 65%)" }} />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full border" style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }}>
                  Ready to start?
                </span>
                <h2 className="display-heading text-3xl md:text-5xl text-white mb-6">
                  Let's build something<br />
                  <span className="cursive-accent" style={{ color: "#f07a3a" }}>amazing together.</span>
                </h2>
                <p className="text-white/50 text-base mb-10 max-w-md mx-auto">
                  Free consultation, no commitment. Just a friendly conversation about your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="btn-primary"
                  >
                    Book a Free Call <ArrowRight size={16} />
                  </button>
                  <Link href="/contact" className="btn-outline" style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.18)" }}>
                    Send a Message
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
