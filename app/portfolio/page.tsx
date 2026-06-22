import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ImageGallery } from "@/components/ImageGallery";
import { portfolioImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio examples for website design, social media management and promotional material work by Yelden Digital Marketing Ltd.",
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Portfolio</p>
          <h1 className="heading-xl max-w-6xl">Website, social media and promotional material work.</h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            Add project images inside public/images/portfolio and register them in data/images.ts.
          </p>
        </div>
      </section>

      <AnimatedSection className="section-padding pt-0">
        <div className="container-width">
          <ImageGallery title="Portfolio" images={portfolioImages} folderHint="public/images/portfolio" />
        </div>
      </AnimatedSection>
    </main>
  );
}
