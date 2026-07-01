"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Monitor,
  Megaphone,
  PenTool,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const navLinkClass =
  "text-sm font-black uppercase tracking-wider text-white/75 transition hover:text-yelden-yellow";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/yeldendigitalmarketing",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Yelden-Digital-Marketing-LTD/61591448369755/",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-haydar-yelden-67716241b/",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/yeldendigital21",
    icon: X,
  },
];

const webLinks = [
  { label: "Website Design", href: "/services/web" },
  { label: "Website Maintenance", href: "/services/web" },
  { label: "Website Support", href: "/services/web" },
  { label: "Landing Pages", href: "/services/web" },
];

const marketingLinks = [
  { label: "SEO", href: "/services/digital-marketing" },
  { label: "Google Ads", href: "/services/digital-marketing" },
  { label: "PPC", href: "/services/digital-marketing" },
  { label: "Social Media", href: "/services/digital-marketing" },
  { label: "Content Marketing", href: "/services/digital-marketing" },
];

const creativeLinks = [
  { label: "Branding", href: "/services/creative" },
  { label: "Graphic Design", href: "/services/creative" },
  { label: "UX / UI", href: "/services/creative" },
  { label: "Promotional Materials", href: "/services/creative" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="relative flex items-center justify-between px-5 py-2 sm:px-8 sm:py-3 lg:px-16">
        <Link
          href="/"
          className="group flex items-center gap-4"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Yelden Digital Marketing Ltd"
            width={74}
            height={74}
            className="h-[42px] w-auto transition duration-300 group-hover:scale-105 sm:h-[52px] lg:h-[62px]"
            priority
          />

          <div className="hidden leading-tight sm:block">
            <div className="text-xl font-semibold tracking-tight text-yelden-yellow">
              Yelden
            </div>
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">
              Digital Marketing Ltd
            </div>
          </div>
        </Link>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className={navLinkClass}>
              Services
            </Link>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[980px] -translate-x-1/2 pt-6">
                <div className="overflow-hidden border border-white/10 bg-white text-black shadow-2xl">
                  <div className="grid grid-cols-4">
                    <div className="relative min-h-[300px] overflow-hidden bg-black">
                      <Image
                        src="/images/services/services-1.webp"
                        alt="Yelden services"
                        fill
                        className="object-cover opacity-55"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yelden-yellow">
                          Yelden Services
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                          Web, digital marketing and creative support.
                        </h3>
                      </div>
                    </div>

                    <div className="bg-yelden-yellow p-8">
                      <Link
                        href="/services/web"
                        className="mb-5 flex items-center gap-2 font-semibold uppercase hover:underline"
                      >
                        <Monitor size={18} /> Web
                      </Link>
                      <div className="space-y-4 text-sm">
                        {webLinks.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block hover:underline"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="bg-neutral-100 p-8">
                      <Link
                        href="/services/digital-marketing"
                        className="mb-5 flex items-center gap-2 font-semibold uppercase hover:underline"
                      >
                        <Megaphone size={18} /> Digital Marketing
                      </Link>
                      <div className="space-y-4 text-sm">
                        {marketingLinks.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block hover:underline"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-8">
                      <Link
                        href="/services/creative"
                        className="mb-5 flex items-center gap-2 font-semibold uppercase hover:underline"
                      >
                        <PenTool size={18} /> Creative
                      </Link>
                      <div className="space-y-4 text-sm">
                        {creativeLinks.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block hover:underline"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/industries" className={navLinkClass}>
            Industries
          </Link>

          <Link href="/portfolio" className={navLinkClass}>
            Portfolio
          </Link>

          <Link href="/about" className={navLinkClass}>
            About
          </Link>

          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>

          <div className="flex items-center gap-3 border-l border-white/10 pl-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/60 transition hover:-translate-y-0.5 hover:text-yelden-yellow"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <Link href="/contact" className="yellow-button py-5 text-sm">
            Get a Quote
          </Link>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="font-semibold uppercase text-white/80"
            >
              Services
            </Link>

            <div className="grid gap-3 border-l border-yelden-yellow/40 pl-4 text-sm text-white/60">
              <Link href="/services/web" onClick={() => setOpen(false)}>
                Web Services
              </Link>
              <Link
                href="/services/digital-marketing"
                onClick={() => setOpen(false)}
              >
                Digital Marketing
              </Link>
              <Link href="/services/creative" onClick={() => setOpen(false)}>
                Creative Services
              </Link>
            </div>

            <Link
              href="/industries"
              onClick={() => setOpen(false)}
              className="font-semibold uppercase text-white/80"
            >
              Industries
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className="font-semibold uppercase text-white/80"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="font-semibold uppercase text-white/80"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="font-semibold uppercase text-white/80"
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/70 transition hover:text-yelden-yellow"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="yellow-button w-fit py-3 text-xs"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}