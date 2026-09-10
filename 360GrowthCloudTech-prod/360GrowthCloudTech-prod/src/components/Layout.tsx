import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children, hideFooterCta }: { children: ReactNode; hideFooterCta?: boolean }) {
  return (
    <div className="flex flex-col min-h-[100dvh] relative bg-background">
      <Navbar />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer hideCta={hideFooterCta} />
      <WhatsAppButton />
    </div>
  );
}
