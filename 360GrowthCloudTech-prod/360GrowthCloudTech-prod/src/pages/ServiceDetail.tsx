import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";
import { useScheduleMeeting } from "@/hooks/useScheduleMeeting";
import { useSeo, SITE_URL } from "@/lib/seo";
import { getServiceBySlug, servicesContent } from "@/data/servicesContent";
import { AutoLinkText } from "@/components/AutoLinkText";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ChevronRight, XCircle, AlertTriangle } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);
  const { setOpen } = useScheduleMeeting();

  if (!service) {
    return <NotFound />;
  }

  const related = servicesContent.filter((s) => service.related.includes(s.slug));
  const path = `/services/${service.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.metaDescription,
      image: `${SITE_URL}${service.image}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["IN", "Worldwide"],
      url: `${SITE_URL}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}${path}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  useSeo({ title: service.seoTitle, description: service.metaDescription, path, jsonLd });

  const usedHrefs = new Set<string>();

  return (
    <Layout hideFooterCta>
      <div data-testid={`service-page-${service.slug}`}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative pt-36 pb-16 overflow-hidden hero-grid-bg">
          <div
            className="absolute inset-x-0 top-0 h-72 opacity-60"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% -5%, rgba(232,82,26,0.12) 0%, transparent 70%)" }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            >
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-foreground font-semibold">{service.name}</span>
            </motion.nav>

            <div className="max-w-3xl mx-auto text-center">
              <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
                <span className="section-label mb-6 inline-flex">✦ {service.tag} ✦</span>
              </motion.div>
              <motion.h1
                className="display-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground"
                variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.1 }}
              >
                {service.h1}
              </motion.h1>
              <motion.p
                className="text-base md:text-lg text-muted-foreground mb-9 leading-relaxed"
                variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.2 }}
              >
                {service.intro}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
                variants={fadeUp} initial="initial" animate="animate" transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button onClick={() => setOpen(true)} className="btn-primary" data-testid="service-cta-hero">
                  Book a Free Strategy Call
                </button>
                <Link href="/services" className="btn-dark">
                  View all services
                </Link>
              </motion.div>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-2"
                variants={stagger} initial="initial" animate="animate"
              >
                {service.whoItsFor.map((w, i) => (
                  <motion.span
                    key={i} variants={fadeUp} transition={{ duration: 0.4 }}
                    className="text-xs font-semibold text-foreground/70 bg-white/60 border border-border/60 px-3 py-1.5 rounded-full"
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── HERO IMAGE ────────────────────────────────────── */}
        <section className="pb-4 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                width={1600}
                height={800}
                loading="eager"
                className="w-full h-[240px] sm:h-[340px] md:h-[420px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* ── WHAT IS THIS SERVICE ─────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="display-heading text-2xl md:text-3xl text-foreground mb-6 text-center">
                {service.whatIsTitle}
              </h2>
              <div className="premium-card rounded-2xl p-6 md:p-8 space-y-4">
                {service.whatIsParagraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    <AutoLinkText text={p} currentPath={path} usedHrefs={usedHrefs} />
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ─────────────────────────────────── */}
        <section className="py-20 bg-white/40 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-12"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Who It's For</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground mb-5">
                Is this <span className="cursive-accent">right for you?</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.whoItsForIntro}</p>
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {service.whoItsForDetail.map((w, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="premium-card rounded-2xl p-5 flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-foreground mb-1">{w.label}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SIGNS YOU NEED THIS ──────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              className="text-center mb-12"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Self-Check</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground mb-5">
                {service.signs.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.signs.intro}</p>
            </motion.div>
            <motion.div className="space-y-3" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {service.signs.items.map((item, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="flex items-start gap-3 premium-card rounded-2xl p-5">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM → SOLUTION ───────────────────────────── */}
        <section className="py-20 bg-white/40 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Common Challenges</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground">
                Problems we solve <span className="cursive-accent">every day.</span>
              </h2>
            </motion.div>
            <motion.div className="space-y-3" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {service.problems.map((p, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.45 }} className="premium-card rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <XCircle size={18} className="text-foreground/30 shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/70 leading-relaxed">{p.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      <AutoLinkText text={p.solution} currentPath={path} usedHrefs={usedHrefs} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── COMMON MISTAKES ──────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              className="text-center mb-12"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Watch Out For</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground mb-5">
                {service.mistakes.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.mistakes.intro}</p>
            </motion.div>
            <motion.div className="space-y-3" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {service.mistakes.items.map((item, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="flex items-start gap-3 premium-card rounded-2xl p-5">
                  <AlertTriangle size={18} className="text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────── */}
        <section className="py-20 bg-white/40 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Why It Works</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground">
                What you actually <span className="cursive-accent">get.</span>
              </h2>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-3" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {service.benefits.map((b, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.45 }} className="premium-card rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-2 text-foreground">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center mt-10"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <AutoLinkText text={service.whyChooseUs} currentPath={path} usedHrefs={usedHrefs} />
            </motion.p>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ──────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Scope</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground mb-5">
                What's <span className="cursive-accent">included.</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.includesIntro}</p>
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {service.includes.map((item, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground/80 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── COST ─────────────────────────────────────────── */}
        <section className="py-20 bg-white/40 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="display-heading text-2xl md:text-3xl text-foreground mb-6 text-center">
                {service.costTitle}
              </h2>
              <div className="premium-card rounded-2xl p-6 md:p-8 space-y-4">
                {service.costParagraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-4"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Making The Right Call</span>
              <h2 className="display-heading text-2xl md:text-4xl text-foreground mb-4">
                {service.comparisonTitle}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.comparisonIntro}</p>
            </motion.div>
            <motion.div className="space-y-3 mt-10" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              {service.comparisonItems.map((c, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.4 }} className="premium-card rounded-2xl p-6">
                  <div className="font-bold text-sm text-foreground mb-1.5">{c.name}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────── */}
        <section className="py-20 bg-white/40 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">Our Process</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground">
                How we <span className="cursive-accent">get there.</span>
              </h2>
            </motion.div>
            <div className="relative">
              <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(232,82,26,0.2), rgba(232,82,26,0.2), transparent)" }} />
              <motion.div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
                {service.process.map((step, i) => (
                  <motion.div key={i} variants={fadeUp} transition={{ duration: 0.45 }} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center text-white font-black text-base mb-5 shadow-lg border-4 border-background">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-base font-extrabold mb-1 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SCENARIO ─────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="display-heading text-2xl md:text-3xl text-foreground mb-6 text-center">
                {service.scenarioTitle}
              </h2>
              <div className="rounded-2xl overflow-hidden mb-5 shadow-md">
                <img
                  src={service.image2}
                  alt={service.image2Alt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-[200px] sm:h-[260px] object-cover"
                />
              </div>
              <div className="premium-card rounded-2xl p-6 md:p-8 space-y-4">
                {service.scenarioParagraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    <AutoLinkText text={p} currentPath={path} usedHrefs={usedHrefs} />
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TECH / TOOLS STRIP ───────────────────────────── */}
        <section className="py-14 bg-white/40 border-y border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">{service.stackLabel}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {service.stack.map((t, i) => (
                <span key={i} className="text-sm font-bold text-foreground/60 bg-white/60 border border-border/60 px-4 py-2 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-20 bg-white/40 border-t border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              className="text-center mb-14"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-5 inline-flex">FAQ</span>
              <h2 className="display-heading text-3xl md:text-4xl text-foreground">
                {service.name} <span className="cursive-accent">questions.</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Accordion type="single" collapsible className="premium-card rounded-2xl px-6">
                {service.faqs.map((faq, i) => (
                  <AccordionItem value={`faq-${i}`} key={i} className={i === service.faqs.length - 1 ? "border-b-0" : ""}>
                    <AccordionTrigger className="text-left font-bold text-foreground text-sm py-5 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      <AutoLinkText text={faq.a} currentPath={path} usedHrefs={usedHrefs} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ── RELATED SERVICES ─────────────────────────────── */}
        {related.length > 0 && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center max-w-2xl mx-auto mb-14"
                variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
              >
                <span className="section-label mb-5 inline-flex">Related Services</span>
                <h2 className="display-heading text-3xl md:text-4xl text-foreground">
                  Pairs well <span className="cursive-accent">with this.</span>
                </h2>
              </motion.div>
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-3" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
                {related.map((r, i) => (
                  <Link href={`/services/${r.slug}`} key={i}>
                    <motion.div variants={fadeUp} transition={{ duration: 0.45 }} className="premium-card rounded-2xl p-6 group h-full cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                        <r.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-base mb-2 text-foreground">{r.name}</h3>
                      <span className="text-xs font-bold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight size={12} />
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── CTA BANNER ───────────────────────────────────── */}
        <section className="py-20 bg-white/40 border-t border-border/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-center mb-12"
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <AutoLinkText text={service.closingParagraph} currentPath={path} usedHrefs={usedHrefs} />
            </motion.p>
            <motion.div
              className="rounded-3xl overflow-hidden text-center px-8 py-16 relative"
              style={{ backgroundColor: "#1a1512" }}
              variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 50% 100%, rgba(232,82,26,0.18) 0%, transparent 65%)" }} />
              <div className="relative z-10">
                <h2 className="display-heading text-2xl md:text-4xl text-white mb-4">
                  Ready to talk {service.name.toLowerCase()}?
                </h2>
                <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
                  Free consultation, no commitment. Tell us what you're building.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={() => setOpen(true)} className="btn-primary">
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
