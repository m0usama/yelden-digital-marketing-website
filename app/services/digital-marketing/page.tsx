import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Search,
  Megaphone,
  BadgePercent,
  Share2,
  FileText,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "SEO, Google Ads, PPC, social media management and content marketing services from Yelden Digital Marketing Ltd.",
};

const marketingServices = [
  {
    title: "SEO",
    icon: Search,
    points: [
      "Search-friendly structure for better online visibility.",
      "Optimised headings, titles and service-focused content.",
      "Support for businesses wanting to be found online.",
    ],
  },
  {
    title: "Google Ads",
    icon: Megaphone,
    points: [
      "Paid search campaigns focused on business enquiries.",
      "Ad structure built around your services and audience.",
      "Landing page direction to improve campaign performance.",
    ],
  },
  {
    title: "PPC Campaigns",
    icon: BadgePercent,
    points: [
      "Targeted advertising designed around measurable results.",
      "Clear campaign planning for paid traffic.",
      "Practical support to improve enquiry generation.",
    ],
  },
  {
    title: "Social Media Management",
    icon: Share2,
    points: [
      "Consistent branded content for social platforms.",
      "Professional captions, visuals and campaign ideas.",
      "Better online presence and customer engagement.",
    ],
  },
  {
    title: "Content Marketing",
    icon: FileText,
    points: [
      "Useful content that explains your services clearly.",
      "Website and social content aligned with your brand.",
      "Support for long-term trust and search visibility.",
    ],
  },
  {
    title: "Reporting & Strategy",
    icon: BarChart3,
    points: [
      "Clear direction based on your business goals.",
      "Marketing improvements focused on visibility and leads.",
      "Simple recommendations for ongoing growth.",
    ],
  },
];

export default function DigitalMarketingPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Digital Marketing</p>
          <h1 className="heading-xl max-w-6xl">
            Digital marketing that helps customers find your business.
          </h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            From SEO to Google Ads, PPC, social media and content marketing, we
            help businesses build visibility and generate better enquiries.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {marketingServices.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group card p-7 transition duration-300 hover:-translate-y-2 hover:border-yelden-yellow hover:bg-yelden-yellow"
                >
                  <Icon
                    size={42}
                    strokeWidth={1.6}
                    className="mb-8 text-yelden-yellow transition duration-300 group-hover:text-black"
                  />

                  <h2 className="mb-6 text-2xl font-black text-white transition duration-300 group-hover:text-black">
                    {item.title}
                  </h2>

                  <ul className="space-y-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-white/70 transition duration-300 group-hover:text-black/75"
                      >
                        <Check
                          size={17}
                          strokeWidth={2.5}
                          className="mt-1 shrink-0 text-yelden-yellow transition duration-300 group-hover:text-black"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-yelden-yellow px-5 py-20 text-black sm:px-8 lg:px-16 lg:py-28">
        <div className="container-width grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden border border-black/10 bg-black">
            <Image
              src="/images/services/services-1.webp"
              alt="Digital marketing services"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-black/65">
              Growth Focused Marketing
            </p>
            <h2 className="mb-6 text-5xl font-black leading-tight tracking-[-0.05em] lg:text-7xl">
              We help your business get seen by the right people.
            </h2>
            <p className="text-lg font-medium text-black/75">
              Our digital marketing support is built around visibility, trust and
              enquiries. We focus on practical campaigns and clear content that help
              customers understand what you offer.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width border border-yelden-line bg-yelden-panel p-8 sm:p-12 lg:p-16">
          <h2 className="heading-lg">Start growing your business online.</h2>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Tell us your goals and we will help you choose the right digital marketing
            approach for your business.
          </p>
          <Link href="/contact" className="yellow-button mt-8">
            Get a Quote <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
