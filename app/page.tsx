import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Badge,
  Camera,
  PenTool,
  BookOpen,
  MonitorSmartphone,
  LayoutTemplate,
  Search,
  Megaphone,
  Mail,
  Phone,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { IndustryGrid } from "@/components/IndustryGrid";
import { ImageGallery } from "@/components/ImageGallery";
import {
  homeImages,
  portfolioImages,
  aboutImages,
  promotionalImages,
} from "@/data/images";

const featuredServices = [
  {
    title: "Branding",
    icon: Badge,
    points: [
      "Build a clear and memorable business identity.",
      "Keep your message consistent across digital and print.",
      "Create a professional look customers can trust.",
    ],
  },
  {
    title: "Web Design",
    icon: MonitorSmartphone,
    points: [
      "Modern responsive websites for service businesses.",
      "Clear quote forms, contact buttons and service pages.",
      "Designed to improve trust and customer enquiries.",
    ],
  },
  {
    title: "SEO",
    icon: Search,
    points: [
      "Search-friendly page structure and content layout.",
      "Optimised headings, titles and service-focused pages.",
      "Better visibility for customers searching online.",
    ],
  },
  {
    title: "Graphic Design",
    icon: PenTool,
    points: [
      "Marketing visuals for campaigns and promotions.",
      "Designs for flyers, business cards and adverts.",
      "Professional layouts that match your brand.",
    ],
  },
  {
    title: "Promotional Material",
    icon: BookOpen,
    points: [
      "Business cards, flyers, leaflets and letterheads.",
      "Magnets, menus, glass vinyls and branded print.",
      "Cost-effective marketing that keeps you visible.",
    ],
  },
  {
    title: "Social Media",
    icon: Camera,
    points: [
      "Consistent branded content for social channels.",
      "Better presence, engagement and customer trust.",
      "Professional visuals and captions for regular posting.",
    ],
  },
  {
    title: "UX / UI",
    icon: LayoutTemplate,
    points: [
      "Cleaner website layout and user experience.",
      "Easier navigation for visitors and customers.",
      "Better journeys that encourage enquiries.",
    ],
  },
  {
    title: "Google Ads & PPC",
    icon: Megaphone,
    points: [
      "Targeted paid advertising for business enquiries.",
      "Campaign structure focused on measurable growth.",
      "Landing page direction to improve results.",
    ],
  },
];

const promotionalItems = [
  {
    title: "Business Cards",
    text: "Premium business cards designed to leave a professional first impression.",
    image: promotionalImages[0],
  },
  {
    title: "Flyers & Leaflets",
    text: "A3, A4 and A5 flyers and leaflets for promotions, menus and advertising campaigns.",
    image: promotionalImages[1],
  },
  {
    title: "Letterheads & Stamps",
    text: "Corporate stationery, custom stamps and branded office materials.",
    image: promotionalImages[2],
  },
  {
    title: "Glass Vinyls & Window Graphics",
    text: "Professional window graphics, vinyls and branding solutions for businesses.",
    image: promotionalImages[3],
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-36 sm:px-8 lg:px-16">
        <div className="absolute inset-0 z-0">
          {homeImages.slice(0, 3).map((image, index) => (
            <div
              key={image}
              className="absolute inset-0 bg-cover bg-center opacity-0 animate-heroSlide"
              style={{
                backgroundImage: `url(${image})`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-10 bg-black/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute right-0 top-0 z-10 h-[420px] w-[420px] rounded-full bg-yelden-yellow/10 blur-3xl" />

        <div className="container-width relative z-20">
          <p className="eyebrow mb-6">Digital Marketing & Website Maintenance</p>

          <h1 className="heading-xl max-w-6xl">
            Expert Digital{" "}
            <span className="text-yelden-yellow">Solutions</span>
            <br />
            Services.
          </h1>

          <p className="mt-8 max-w-5xl text-xl text-white/80 sm:text-2xl">
            Yelden Digital Marketing Ltd helps businesses grow with professional
            websites design and maintenance, SEO, Google Ads, PPC, social media management, branding,
            content marketing and promotional materials.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="yellow-button">
              Get a Quote <ArrowRight className="ml-2" size={18} />
            </Link>

            <Link href="/services" className="dark-button">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <AnimatedSection className="section-padding border-y border-yelden-line">
        <div className="container-width">
          <div className="mb-14 max-w-4xl">
            <p className="eyebrow mb-5">Our Services</p>
            <h2 className="heading-lg mb-6">
              Everything your business needs to look professional.
            </h2>
            <p className="text-lg text-white/70">
              We combine digital marketing, creative design and promotional
              materials to help businesses build trust, increase visibility and
              generate better customer enquiries.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group card p-7 transition duration-300 hover:-translate-y-2 hover:border-yelden-yellow hover:bg-yelden-yellow"
                >
                  <Icon
                    size={42}
                    strokeWidth={1.6}
                    className="mb-9 text-yelden-yellow transition duration-300 group-hover:text-black"
                  />

                  <h3 className="mb-6 text-2xl font-black text-white transition duration-300 group-hover:text-black">
                    {item.title}
                  </h3>

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

          <Link href="/services" className="yellow-button mt-12">
            Explore More Services
          </Link>
        </div>
      </AnimatedSection>

      {/* START PROJECT - FULL WIDTH YELLOW */}
      <AnimatedSection className="bg-yelden-yellow px-5 py-20 text-black sm:px-8 lg:px-16 lg:py-28">
        <div className="container-width">
          <h2 className="text-6xl font-black leading-none tracking-[-0.06em] underline decoration-black decoration-4 underline-offset-[14px] sm:text-7xl lg:text-9xl">
            Start a project
          </h2>

          <p className="mt-10 max-w-5xl text-xl font-medium text-black/75">
            Do you have a digital marketing objective you would like to achieve?
            Contact Yelden Digital Marketing Ltd today and tell us what you need.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center bg-black px-6 py-4 font-black uppercase tracking-wide text-white transition duration-300 hover:-translate-y-1"
          >
            Get a Quote <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </AnimatedSection>

      {/* ABOUT */}
      <AnimatedSection className="section-padding">
        <div className="container-width grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">About Us</p>

            <h2 className="heading-lg mb-8">
              A digital marketing partner for growing businesses.
            </h2>

            <p className="mb-5 text-lg text-white/70">
              Yelden Digital Marketing Ltd supports businesses with online
              visibility, professional website design, social media management,
              SEO, PPC advertising and promotional material design.
            </p>

            <p className="mb-5 text-lg text-white/70">
              We help businesses create stronger online brands through modern
              websites, search engine optimisation, social media management and
              digital advertising campaigns.
            </p>

            <p className="text-lg text-white/70">
              Alongside digital marketing, we also provide promotional materials
              including business cards, flyers, leaflets, letterheads, glass
              vinyls and other branded print products.
            </p>

            <Link href="/about" className="yellow-button mt-8">
              Read More
            </Link>
          </div>

          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-5">
              {aboutImages.slice(0, 2).map((image, index) => (
                <div
                  key={image}
                  className="group relative overflow-hidden rounded-lg border border-white/10"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={image}
                      alt={`About ${index + 1}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-5">
              {aboutImages.slice(2, 4).map((image, index) => (
                <div
                  key={image}
                  className="group relative overflow-hidden rounded-lg border border-white/10"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={image}
                      alt={`About ${index + 3}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* PROMOTIONAL MATERIALS */}
      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-width">
          <p className="eyebrow mb-5">Promotional Materials</p>
          <h2 className="heading-lg mb-8">
            Business Cards, Flyers, Stamps, Letterheads & Branded Print
          </h2>

          <p className="mb-10 max-w-4xl text-lg text-white/70">
            We also provide promotional content and printed business materials
            including business cards, stamps, letterheads, A3, A4 and A5 flyers,
            leaflets, magnets and glass vinyls to help your brand look
            professional everywhere.
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {promotionalItems.map((item) => (
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
                      Add image in public/images/promotional
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

      {/* PORTFOLIO */}
      <AnimatedSection className="section-padding">
        <div className="container-width">
          <p className="eyebrow mb-5">Portfolio</p>
          <h2 className="heading-lg mb-8">
            Website, social media and promotional material work.
          </h2>
          <p className="mb-10 max-w-4xl text-lg text-white/70">
            Add real project images later inside the portfolio image folder and
            they will appear in this section.
          </p>

          <ImageGallery
            title="Portfolio"
            images={portfolioImages.length ? portfolioImages : homeImages}
            folderHint="public/images/portfolio"
          />

          <Link href="/portfolio" className="yellow-button mt-12">
            View Portfolio
          </Link>
        </div>
      </AnimatedSection>

      {/* INDUSTRIES */}
      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-width">
          <p className="eyebrow mb-5">Industries</p>
          <h2 className="heading-lg mb-10">
            Digital Marketing Across Multiple Industries
          </h2>
          <p className="mb-10 max-w-4xl text-lg text-white/70">
            We provide digital marketing services for businesses across multiple
            industries, including retail, food, construction, healthcare,
            ecommerce, finance, real estate, hospitality, technology and small
            businesses.
          </p>

          <IndustryGrid limit={32} />

          <Link href="/industries" className="yellow-button mt-12">
            View All Industries
          </Link>
        </div>
      </AnimatedSection>

      {/* CONTACT */}
<AnimatedSection className="section-padding bg-white/[0.02]">
  <div className="container-width">
    <div className="mb-12">
      <p className="eyebrow mb-5">Contact</p>

      <h2 className="heading-lg mb-6">
        Let's Grow Your Business
      </h2>

      <p className="max-w-4xl text-lg text-white/70">
        Whether you need a new website, SEO, social media management,
        promotional materials or a complete digital marketing strategy,
        we're ready to help.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
      <form
        action="https://formsubmit.co/ali@yeldendigital.co.uk"
        method="POST"
        className="card p-7 sm:p-10"
      >
        <input
          type="hidden"
          name="_subject"
          value="New quote request from Yelden Digital Marketing Ltd website"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="font-black">
            Name
            <input
              className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow"
              name="name"
              required
            />
          </label>

          <label className="font-black">
            Email
            <input
              className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow"
              type="email"
              name="email"
              required
            />
          </label>

          <label className="font-black">
            Phone
            <input
              className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow"
              type="tel"
              name="phone"
            />
          </label>

          <label className="font-black">
            Service
            <select
              className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow"
              name="service"
            >
              <option>Website Design & Maintenance</option>
              <option>Social Media Management</option>
              <option>Promotional Materials</option>
              <option>SEO</option>
              <option>Google Ads</option>
              <option>PPC</option>
              <option>Branding</option>
              <option>Content Marketing</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <label className="mt-5 block font-black">
          Message
          <textarea
            className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow"
            name="message"
            rows={7}
            required
          />
        </label>

        <button className="yellow-button mt-6" type="submit">
          Send Message
        </button>
      </form>

      <aside className="space-y-6">
        <div className="card p-7 sm:p-10">
          <h3 className="mb-8 text-4xl font-black text-yelden-yellow">
            Contact Details
          </h3>

          <div className="space-y-7">
            <p className="flex gap-4 text-white/75">
              <Mail className="shrink-0 text-yelden-yellow" />
              <a
                href="mailto:ali@yeldendigital.co.uk"
                className="hover:text-yelden-yellow"
              >
                ali@yeldendigital.co.uk
              </a>
            </p>

            <p className="flex gap-4 text-white/75">
              <Phone className="shrink-0 text-yelden-yellow" />
              <a
                href="tel:+447915675141"
                className="hover:text-yelden-yellow"
              >
                +44 7915 675141
              </a>
            </p>
          </div>
        </div>

        <div className="bg-yelden-yellow p-8 text-black">
          <h3 className="mb-4 text-3xl font-black">
            Ready to get started?
          </h3>

          <p className="mb-6 text-black/80">
            Contact us today and let's discuss how we can help grow
            your business online and offline.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center bg-black px-6 py-3 font-black text-white transition hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </div>
  </div>
</AnimatedSection>
    </main>
  );
}