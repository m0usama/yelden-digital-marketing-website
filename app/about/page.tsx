import Image from "next/image";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { aboutImages } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Yelden Digital Marketing Ltd and our website design, maintenance, SEO, social media and promotional material services.",
};

const aboutGallery = [
  {
    title: "Digital Strategy",
    text: "We help businesses plan a stronger online presence with clear messaging and focused marketing direction.",
    image: aboutImages[0],
  },
  {
    title: "Website Design",
    text: "Professional website layouts designed to present your services clearly and generate customer enquiries.",
    image: aboutImages[1],
  },
  {
    title: "Social Media Support",
    text: "Consistent digital content and brand presentation to help your business stay active and recognisable.",
    image: aboutImages[2],
  },
  {
    title: "Creative Promotion",
    text: "Promotional materials, branded content and business visuals designed to support your marketing.",
    image: aboutImages[3],
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">About</p>
          <h1 className="heading-xl max-w-6xl">
            A digital marketing partner for growing businesses.
          </h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            Yelden Digital Marketing Ltd supports businesses with online visibility,
            professional website design, social media presentation and promotional
            material design.
          </p>
        </div>
      </section>

      <AnimatedSection className="section-padding pt-0">
        <div className="container-width grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-lg mb-8">Who We Are</h2>

            <p className="mb-5 text-lg text-white/70">
              We help businesses present themselves more professionally online and
              offline. Our work includes website design and maintenance, social
              media management, SEO and promotional materials for a wide range of
              businesses.
            </p>

            <p className="mb-5 text-lg text-white/70">
              From service-led websites to branded social media and printed
              marketing material, our focus is simple: clear design, practical
              messaging and a professional customer experience.
            </p>

            <p className="text-lg text-white/70">
              Whether a business needs a modern website, stronger search visibility,
              better social media content or promotional print materials, Yelden
              Digital Marketing Ltd provides practical creative support to help the
              brand look more professional.
            </p>
          </div>

          <div className="card p-7 sm:p-10">
            <p className="eyebrow mb-5">Our Approach</p>
            <h3 className="mb-6 text-3xl font-black text-yelden-yellow">
              Simple, clear and business-focused.
            </h3>

            <ul className="space-y-5 text-white/70">
              <li>
                <strong className="text-white">Clear Design:</strong> clean layouts
                that make services easy to understand.
              </li>
              <li>
                <strong className="text-white">Strong Presentation:</strong>{" "}
                professional visuals across website, social media and print.
              </li>
              <li>
                <strong className="text-white">Customer Enquiries:</strong> contact
                forms, calls to action and clear service pages.
              </li>
              <li>
                <strong className="text-white">Long-Term Support:</strong> website
                maintenance, content updates and marketing improvements.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-width">
          <p className="eyebrow mb-5">What We Focus On</p>
          <h2 className="heading-lg mb-10">
            Digital support that makes your business look professional.
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutGallery.map((item) => (
              <article
                key={item.title}
                className="card overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-yelden-yellow/70"
              >
                <div className="relative aspect-video w-full bg-white/5">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-6 text-center text-sm text-white/50">
                      Add image in public/images/about
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-yelden-yellow">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/65">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}