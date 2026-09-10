import { Link } from "wouter";

interface Rule {
  test: RegExp;
  href: string;
}

const RULES: Rule[] = [
  { test: /mobile app development/i, href: "/services/mobile-app-development" },
  { test: /mobile app/i, href: "/services/mobile-app-development" },
  { test: /custom software development/i, href: "/services/custom-software-development" },
  { test: /custom software/i, href: "/services/custom-software-development" },
  { test: /custom CRM development/i, href: "/services/custom-crm-development" },
  { test: /custom CRM/i, href: "/services/custom-crm-development" },
  { test: /digital marketing/i, href: "/services/digital-marketing-seo" },
  { test: /\bSEO\b/, href: "/services/digital-marketing-seo" },
  { test: /cloud infrastructure/i, href: "/services/cloud-infrastructure-devops" },
  { test: /\bDevOps\b/, href: "/services/cloud-infrastructure-devops" },
  { test: /security audit/i, href: "/services/cybersecurity-services" },
  { test: /penetration testing/i, href: "/services/cybersecurity-services" },
  { test: /cybersecurity/i, href: "/services/cybersecurity-services" },
  { test: /e-commerce development/i, href: "/services/ecommerce-development" },
  { test: /online store/i, href: "/services/ecommerce-development" },
];

/**
 * Renders plain text with the first eligible keyword match turned into an internal link.
 * Skips the current page's own service and any target already linked elsewhere on the page,
 * so each page picks up a handful of natural, non-repetitive internal links instead of none.
 */
export function AutoLinkText({
  text,
  currentPath,
  usedHrefs,
}: {
  text: string;
  currentPath: string;
  usedHrefs: Set<string>;
}) {
  for (const rule of RULES) {
    if (rule.href === currentPath) continue;
    if (usedHrefs.has(rule.href)) continue;
    const match = rule.test.exec(text);
    if (match) {
      usedHrefs.add(rule.href);
      const start = match.index;
      const end = start + match[0].length;
      return (
        <>
          {text.slice(0, start)}
          <Link href={rule.href} className="text-primary font-semibold hover:underline">
            {match[0]}
          </Link>
          {text.slice(end)}
        </>
      );
    }
  }
  return <>{text}</>;
}
