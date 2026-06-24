import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Code2,
  LayoutTemplate,
  MonitorSmartphone,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Services",
  description:
    "Website design, website development, maintenance, landing pages and website support from Yelden Digital Marketing Ltd.",
};

const webServices = [
  {
    title: "Website Design",
    icon: LayoutTemplate,
    points: [
      "Modern layouts designed around your business services.",
      "Mobile-friendly pages that look clean on all devices.",
      "Clear calls to action to encourage customer enquiries.",
    ],
  },
  {
    title: "Website Development",
    icon: Code2,
    points: [
      "Fast, structured websites built with clean code.",
      "Professional pages for service-based businesses.",
      "Scalable setup for future improvements and updates.",
    ],
  },
  {
    title: "Landing Pages",
    icon: MonitorSmartphone,
    points: [
      "Focused pages for campaigns, ads and lead generation.",
      "Simple structure to explain your offer quickly.",
      "Designed to help turn visitors into enquiries.",
    ],
  },
  {
    title: "Website Maintenance",
    icon: Wrench,
    points: [
      "Content updates, page changes and ongoing improvements.",
      "Support for keeping your website accurate and fresh.",
      "Help with small fixes and website adjustments.",
    ],
  },
  {
    title: "Website Support",
    icon: ShieldCheck,
    points: [
      "Reliable support when you need updates or changes.",
      "Guidance for website structure and future growth.",
      "Practical help with keeping the site professional.",
    ],
  },
  {
    title: "Performance & Speed",
    icon: Zap,
    points: [
      "Cleaner pages focused on faster loading.",
      "Better user experience for visitors on mobile and desktop.",
      "Optimised structure for professional presentation.",
    ],
  },
];

export default function WebServicesPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Web Services</p>
          <h1 className="heading-xl max-w-6xl">
            Professional websites built to present your business clearly.
          </h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            Yelden Digital Marketing Ltd creates modern, responsive and enquiry-focused
            websites for businesses that want a stronger online presence.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {webServices.map((item) => {
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
              src="/images/services/services-2.jpg"
              alt="Website services"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-black/65">
              Website Solutions
            </p>
            <h2 className="mb-6 text-5xl font-black leading-tight tracking-[-0.05em] lg:text-7xl">
              We build websites that work for your business.
            </h2>
            <p className="text-lg font-medium text-black/75">
              Whether you need a new website, a landing page, a refresh or regular
              maintenance, we create web solutions that are clean, practical and built
              around customer enquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width border border-yelden-line bg-yelden-panel p-8 sm:p-12 lg:p-16">
          <h2 className="heading-lg">Start your first website project with us.</h2>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Tell us what your business needs and we will recommend the right website
            structure, pages and design direction.
          </p>
          <Link href="/contact" className="yellow-button mt-8">
            Get a Quote <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
