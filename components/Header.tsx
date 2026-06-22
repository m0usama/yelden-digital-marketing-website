"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-16">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="text-lg font-black uppercase tracking-tight text-yelden-yellow sm:text-2xl">
            Yelden Digital Marketing Ltd
          </span>
        </Link>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-black uppercase tracking-wider text-white/85 transition hover:text-yelden-yellow"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="yellow-button py-3 text-xs">
            Get a Quote
          </Link>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-black uppercase tracking-wider text-white/85"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="yellow-button w-fit py-3 text-xs">
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
