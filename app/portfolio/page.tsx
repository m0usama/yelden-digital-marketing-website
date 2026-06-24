import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  webPortfolioImages,
  socialPortfolioImages,
} from "@/data/images";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Website design and social media portfolio by Yelden Digital Marketing Ltd.",
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Portfolio</p>

          <h1 className="heading-xl max-w-6xl">
            Website Design & Social Media Portfolio
          </h1>

          <p className="mt-8 max-w-4xl text-xl text-white/75">
            A selection of website design projects, digital marketing work and
            social media content created for businesses.
          </p>
        </div>
      </section>

      {/* WEBSITE DESIGN */}
      <AnimatedSection className="section-padding pt-0">
        <div className="container-width">
          <p className="eyebrow mb-5">Website Design</p>

          <h2 className="heading-lg mb-8">
            Professional Websites Built For Business
          </h2>

          <p className="mb-10 max-w-4xl text-lg text-white/70">
            Modern responsive websites focused on customer enquiries,
            professional branding and strong user experience.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {webPortfolioImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-white/10"
              >
                <div className="relative aspect-video">
                  <Image
                    src={image}
                    alt={`Website Project ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SOCIAL MEDIA */}
      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-width">
          <p className="eyebrow mb-5">Social Media</p>

          <h2 className="heading-lg mb-8">
            Social Media Management & Content
          </h2>

          <p className="mb-10 max-w-4xl text-lg text-white/70">
            Social media graphics, campaigns, branded content and marketing
            material created for businesses and organisations.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {socialPortfolioImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border border-white/10"
              >
                <div className="relative aspect-video">
                  <Image
                    src={image}
                    alt={`Social Media Project ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}