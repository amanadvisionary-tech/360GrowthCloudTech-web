import logo from "@assets/logo.png";
import { Linkedin, Mail, Phone, CalendarDays, Send, Twitter, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { useScheduleMeeting } from "@/hooks/useScheduleMeeting";
import { EMAIL, EMAIL_LINK, PHONE_DISPLAY, PHONE_TEL_LINK, WHATSAPP_LINK } from "@/lib/contact";

export function Footer({ hideCta }: { hideCta?: boolean }) {
  const { setOpen } = useScheduleMeeting();

  return (
    <footer data-testid="footer" style={{ backgroundColor: "#1a1512", color: "white" }}>

      {/* CTA BAND — skipped on pages that already show their own CTA banner, to avoid two "book a call" prompts stacked back to back */}
      {!hideCta && (
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl py-16 text-center">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full border"
            style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.1)" }}
          >
            Ready to start?
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }} className="text-3xl md:text-4xl text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Let's discuss your project and explore how we can help you reach your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="btn-primary rounded-full"
              style={{ fontSize: "0.85rem", padding: "10px 22px" }}
              data-testid="footer-schedule-btn"
            >
              <CalendarDays size={14} /> Schedule a Meeting
            </button>
            <Link
              href="/contact"
              className="btn-outline rounded-full"
              style={{ fontSize: "0.85rem", padding: "9px 22px", color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.18)" }}
              data-testid="footer-send-message-btn"
            >
              <Send size={14} /> Send Message
            </Link>
          </div>
        </div>
      </div>
      )}

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <img src={logo} alt="360GrowthCloudTech" className="h-10 w-auto brightness-0 invert shrink-0" />
              <span className="text-base font-bold text-white leading-snug">
                360 Growth cloud tech
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Designing digital-first technologies for future growth — across software, cloud, security, and marketing.
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={EMAIL_LINK} className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }} data-testid="footer-email-link">
                  <Mail size={13} /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={PHONE_TEL_LINK} className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }} data-testid="footer-phone-link">
                  <Phone size={13} /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }} data-testid="footer-whatsapp-link">
                  <FaWhatsapp size={14} /> Chat on WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex gap-2">
              {[{ icon: Linkedin, label: "LinkedIn" }, { icon: Twitter, label: "Twitter" }, { icon: Facebook, label: "Facebook" }].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/15" style={{ background: "rgba(255,255,255,0.07)" }} data-testid={`social-${label.toLowerCase()}`}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {[{ label: "About Us", href: "/about" }, { label: "Careers", href: "/about" }, { label: "Contact", href: "/contact" }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {[{ label: "Consulting", href: "/services" }, { label: "Technology", href: "/services" }, { label: "Industries", href: "/industries" }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-5">Resources</h4>
            <ul className="space-y-3">
              {[{ label: "Insights", href: "/insights" }, { label: "Case Studies", href: "/case-studies" }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} 360CloudTech. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-terms">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-cookies">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
