import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-yelden-line bg-black px-5 pt-14 sm:px-8 lg:px-16">
      <div className="container-width grid gap-10 pb-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className="mb-4 text-2xl font-black text-yelden-yellow">Yelden Digital Marketing Ltd</h3>
          <p className="max-w-xl text-white/70">
            Website design, maintenance, SEO, advertising, social media, branding, content and promotional materials.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-black uppercase tracking-wider text-yelden-yellow">Contact</h4>
          <p className="text-white/70">
            <a href="mailto:ali@yeldendigital.co.uk" className="hover:text-yelden-yellow">
              ali@yeldendigital.co.uk
            </a>
          </p>
          <p className="mt-2 text-white/70">
            <a href="tel:+447915675141" className="hover:text-yelden-yellow">
              +44 7915 675141
            </a>
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-black uppercase tracking-wider text-yelden-yellow">Pages</h4>
          <div className="flex flex-col gap-2 text-white/70">
            <Link href="/services" className="hover:text-yelden-yellow">Services</Link>
            <Link href="/industries" className="hover:text-yelden-yellow">Industries</Link>
            <Link href="/portfolio" className="hover:text-yelden-yellow">Portfolio</Link>
            <Link href="/contact" className="hover:text-yelden-yellow">Get a Quote</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-yelden-line py-6 text-center text-sm text-white/60">
        Copyright © 2021 Yelden Digital Marketing - All Rights Reserved.
      </div>
    </footer>
  );
}
