import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Badge,
  PenTool,
  Paintbrush,
  LayoutTemplate,
  BookOpen,
  Sticker,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creative Services",
  description:
    "Branding, graphic design, UX/UI and promotional material services from Yelden Digital Marketing Ltd.",
};

const creativeServices = [
  {
    title: "Branding",
    icon: Badge,
    points: [
      "Clear identity for your business and audience.",
      "Consistent visual style across digital and print.",
      "Professional branding that helps customers remember you.",
    ],
  },
  {
    title: "Graphic Design",
    icon: PenTool,
    points: [
      "Designs for campaigns, promotions and business materials.",
      "Layouts for flyers, business cards, leaflets and adverts.",
      "Clean creative work aligned with your business goals.",
    ],
  },
  {
    title: "UX / UI",
    icon: LayoutTemplate,
    points: [
      "Better website layout and user experience.",
      "Cleaner navigation and more professional pages.",
      "Design direction focused on enquiries and trust.",
    ],
  },
  {
    title: "Promotional Materials",
    icon: BookOpen,
    points: [
      "Business cards, flyers, leaflets and letterheads.",
      "Magnets, menus, glass vinyls and branded print products.",
      "Print-focused designs that support your marketing.",
    ],
  },
  {
    title: "Creative Direction",
    icon: Paintbrush,
    points: [
      "Visual direction for campaigns and brand presentation.",
      "Ideas for content, marketing material and social visuals.",
      "Support to make your business look consistent.",
    ],
  },
  {
    title: "Business Print Design",
    icon: Sticker,
    points: [
      "Practical designs for everyday business promotion.",
      "Materials made to look clear, readable and professional.",
      "Brand-focused print support for local and online marketing.",
    ],
  },
];

export default function CreativeServicesPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Creative Services</p>
          <h1 className="heading-xl max-w-6xl">
            Creative design that makes your business look professional.
          </h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            We support businesses with branding, graphic design, UX/UI and
            promotional materials that create a stronger and more trusted image.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {creativeServices.map((item) => {
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
              src="/images/services/services-3.jpg"
              alt="Creative services"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-black/65">
              Creative Business Support
            </p>
            <h2 className="mb-6 text-5xl font-black leading-tight tracking-[-0.05em] lg:text-7xl">
              We design materials that make your brand stand out.
            </h2>
            <p className="text-lg font-medium text-black/75">
              From branding to printed marketing materials, we create professional
              creative work that supports your website, social media and offline
              business promotion.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width border border-yelden-line bg-yelden-panel p-8 sm:p-12 lg:p-16">
          <h2 className="heading-lg">Start your creative project with us.</h2>
          <p className="mt-6 max-w-3xl text-lg text-white/70">
            Tell us what you need designed and we will help create professional
            visuals for your brand, campaign or promotional material.
          </p>
          <Link href="/contact" className="yellow-button mt-8">
            Get a Quote <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
