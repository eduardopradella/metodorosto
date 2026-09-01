import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { MethodSteps } from "@/components/landing/method-steps";
import { PainPoints } from "@/components/landing/pain-points";
import { Pricing } from "@/components/landing/pricing";
import { SiteFooter } from "@/components/landing/site-footer";
import { Testimonials } from "@/components/landing/testimonials";

const TITLE = "Rejuvenescimento Facial em 3 Minutos por Dia";
const DESCRIPTION =
  "Método guiado de massagem facial: sequência de movimentos em 3 minutos por dia para um rosto mais firme e definido, sem equipamentos ou procedimentos estéticos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <PainPoints />
      <MethodSteps />
      <Pricing />
      <Testimonials />
      <Faq />
      <SiteFooter />
    </main>
  );
}
