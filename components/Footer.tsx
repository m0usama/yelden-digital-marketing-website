import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-yelden-line bg-black px-5 pt-14 sm:px-8 lg:px-16">
      <div className="container-width grid gap-10 pb-10 md:grid-cols-[2fr_1fr_1fr_1.3fr]">
        
        {/* Company */}
        <div>
          <h3 className="mb-4 text-2xl font-black text-yelden-yellow">
            Yelden Digital Marketing Ltd
          </h3>

          <p className="max-w-xl text-white/70">
            Website design, maintenance, SEO, Google Ads, PPC,
            social media management, branding, content marketing
            and promotional materials.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-black uppercase tracking-wider text-yelden-yellow">
            Contact
          </h4>

          <p className="text-white/70">
            <a
              href="mailto:ali@yeldendigital.co.uk"
              className="transition hover:text-yelden-yellow"
            >
              ali@yeldendigital.co.uk
            </a>
          </p>

          <p className="mt-2 text-white/70">
            <a
              href="tel:+447915675141"
              className="transition hover:text-yelden-yellow"
            >
              +44 7915 675141
            </a>
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="mb-4 font-black uppercase tracking-wider text-yelden-yellow">
            Pages
          </h4>

          <div className="flex flex-col gap-2 text-white/70">
            <Link href="/services" className="transition hover:text-yelden-yellow">
              Services
            </Link>

            <Link href="/industries" className="transition hover:text-yelden-yellow">
              Industries
            </Link>

            <Link href="/portfolio" className="transition hover:text-yelden-yellow">
              Portfolio
            </Link>

            <Link href="/about" className="transition hover:text-yelden-yellow">
              About
            </Link>

            <Link href="/contact" className="transition hover:text-yelden-yellow">
              Contact
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="mb-4 font-black uppercase tracking-wider text-yelden-yellow">
            Follow Us
          </h4>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/yeldendigitalmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-yelden-yellow"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/people/Yelden-Digital-Marketing-LTD/61591448369755/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-yelden-yellow"
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ali-haydar-yelden-67716241b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-yelden-yellow"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://x.com/yeldendigital21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 transition hover:text-yelden-yellow"
            >
              <Twitter size={18} />
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-yelden-line py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Yelden Digital Marketing Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}