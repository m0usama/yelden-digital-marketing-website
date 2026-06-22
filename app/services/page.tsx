import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, maintenance, SEO, Google Ads, PPC, social media management, branding, content marketing and promotional materials.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Services</p>
          <h1 className="heading-xl max-w-6xl">Digital marketing services designed to support growth.</h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            Choose from website design, SEO, paid advertising, social media, branding, content and
            promotional material support.
          </p>
        </div>
      </section>

      <AnimatedSection className="section-padding pt-0">
        <div className="container-width grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index + 1} />
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
