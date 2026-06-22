import type { Metadata } from "next";
import Link from "next/link";
import { IndustryGrid } from "@/components/IndustryGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Digital marketing services for accountants, architects, construction, ecommerce, healthcare, restaurants, retail, small businesses and more.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Industries</p>
          <h1 className="heading-xl max-w-6xl">Digital marketing for every industry.</h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            We support businesses across many sectors with websites, SEO, paid ads, social media,
            branding, content marketing and promotional materials.
          </p>
        </div>
      </section>

      <AnimatedSection className="section-padding pt-0">
        <div className="container-width">
          <IndustryGrid />
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-5 pb-24 sm:px-8 lg:px-16">
        <div className="container-width border border-yelden-line bg-yelden-panel p-8 sm:p-12">
          <h2 className="heading-lg">Ready to grow your business?</h2>
          <p className="mt-5 max-w-3xl text-white/70">
            Tell us your industry and goals, and we can recommend the right digital marketing approach.
          </p>
          <Link href="/contact" className="yellow-button mt-8">Get a Quote</Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
