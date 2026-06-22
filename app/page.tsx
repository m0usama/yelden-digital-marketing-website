import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";
import { IndustryGrid } from "@/components/IndustryGrid";
import { ImageGallery } from "@/components/ImageGallery";
import { services } from "@/data/services";
import {
  homeImages,
  portfolioImages,
  aboutImages,
  serviceImages,
  promotionalImages,
} from "@/data/images";

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

  {/* Background Slideshow */}
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

  {/* Light Tint */}
  <div className="absolute inset-0 z-10 bg-black/30" />

  {/* Left Side Darker for Text */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

  {/* Yellow Glow */}
  <div className="absolute right-0 top-0 z-10 h-[420px] w-[420px] rounded-full bg-yelden-yellow/10 blur-3xl" />

  {/* Content */}
  <div className="container-width relative z-20">

    <p className="eyebrow mb-6">
      DIGITAL MARKETING AGENCY
    </p>

    <h1 className="heading-xl max-w-6xl">
      Expert Digital{" "}
      <span className="text-yelden-yellow">
        Marketing
      </span>
      <br />
      Services.
    </h1>

    <p className="mt-8 max-w-5xl text-xl text-white/80 sm:text-2xl">
      Yelden Digital Marketing Ltd helps businesses grow with professional
      websites, SEO, Google Ads, PPC, social media management,
      branding, content marketing and promotional materials.
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

      {/* FINAL CTA */}
      <AnimatedSection className="px-5 pb-24 sm:px-8 lg:px-16">
        <div className="container-width border border-yelden-line bg-yelden-panel p-8 sm:p-12 lg:p-16">
          <h2 className="text-6xl font-black leading-none tracking-[-0.06em] underline decoration-yelden-yellow decoration-4 underline-offset-[14px] sm:text-7xl lg:text-9xl">
            Start a project
          </h2>
          <p className="mt-10 max-w-5xl text-xl text-white/75">
            Do you have a digital marketing objective you would like to achieve?
            Contact Yelden Digital Marketing Ltd today and tell us what you need.
          </p>
          <Link href="/contact" className="yellow-button mt-10">
            Get a Quote
          </Link>
        </div>
      </AnimatedSection>

      {/* QUICK SERVICES */}
      <AnimatedSection className="border-y border-yelden-line">
        <div className="grid md:grid-cols-3">
          {["SEO", "Web Design", "Creative"].map((title, index) => (
            <article
              key={title}
              className="border-b border-yelden-line p-8 md:border-b-0 md:border-r md:last:border-r-0 lg:p-14"
            >
              <p className="mb-10 text-6xl text-yelden-yellow">
                {index === 0 ? "⌕" : index === 1 ? "▣" : "✎"}
              </p>
              <h2 className="mb-5 text-4xl font-black">{title}</h2>
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                  <CheckCircle2 className="shrink-0 text-yelden-yellow" />
                  Search-friendly structure
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="shrink-0 text-yelden-yellow" />
                  Professional business presentation
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="shrink-0 text-yelden-yellow" />
                  Clear enquiry-focused pages
                </li>
              </ul>
            </article>
          ))}
        </div>
      </AnimatedSection>

          {/* ABOUT */} <AnimatedSection className="section-padding">

  <div className="container-width grid gap-16 lg:grid-cols-2 items-center">


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
    websites, search engine optimisation, social media management
    and digital advertising campaigns.
  </p>

  <p className="text-lg text-white/70">
    Alongside digital marketing, we also provide promotional
    materials including business cards, flyers, leaflets,
    letterheads, glass vinyls and other branded print products.
  </p>

  <Link href="/about" className="yellow-button mt-8">
    Read More
  </Link>
</div>

<div className="grid gap-5">

  <div className="grid grid-cols-2 gap-5">

    <div className="group relative overflow-hidden rounded-lg border border-white/10">
      <div className="relative aspect-video">
        <Image
          src={aboutImages[0]}
          alt="About 1"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-lg border border-white/10">
      <div className="relative aspect-video">
        <Image
          src={aboutImages[1]}
          alt="About 2"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    </div>

  </div>

  <div className="grid grid-cols-2 gap-5">

    <div className="group relative overflow-hidden rounded-lg border border-white/10">
      <div className="relative aspect-video">
        <Image
          src={aboutImages[2]}
          alt="About 3"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-lg border border-white/10">
      <div className="relative aspect-video">
        <Image
          src={aboutImages[3]}
          alt="About 4"
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    </div>

  </div>

</div>

  </div>
</AnimatedSection>


      {/* SERVICES */}
      <AnimatedSection className="section-padding bg-white/[0.02]">
        <div className="container-width">
          <p className="eyebrow mb-5">Our Services</p>
          <h2 className="heading-lg mb-12">
            Services Built for Business Growth
          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index + 1} />
            ))}
          </div>

          <Link href="/services" className="yellow-button mt-12">
            View All Services
          </Link>
        </div>
      </AnimatedSection>

      {/* PROMOTIONAL MATERIALS */}
      <AnimatedSection className="section-padding">
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
                      Add image in public/images/services
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
      <AnimatedSection className="section-padding bg-white/[0.02]">
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
      <AnimatedSection className="section-padding">
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
        <div className="container-width grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <h2 className="heading-lg mb-8">Start your project today.</h2>
            <p className="mb-8 max-w-3xl text-lg text-white/70">
              Tell us what you need and we will get back to you. Use the form
              below to request a quote.
            </p>

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
          </div>

          <aside className="card h-fit p-7 sm:p-10">
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
                <a href="tel:+447915675141" className="hover:text-yelden-yellow">
                  +44 7915 675141
                </a>
              </p>
            </div>
          </aside>
        </div>
      </AnimatedSection>

      
    </main>
  );
}