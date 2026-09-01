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
    scripts: [
      {
        children: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '985013594550295');
          fbq('track', 'PageView');
        `,
      },
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
