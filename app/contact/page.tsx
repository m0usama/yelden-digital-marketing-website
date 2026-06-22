import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Yelden Digital Marketing Ltd for a quote. Email ali@yeldendigital.co.uk or call +44 7915 675141.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-padding pt-36 lg:pt-44">
        <div className="container-width">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="heading-xl max-w-6xl">Start your project today.</h1>
          <p className="mt-8 max-w-4xl text-xl text-white/75">
            Tell us what you need and we will get back to you.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <form
            action="https://formsubmit.co/ali@yeldendigital.co.uk"
            method="POST"
            className="card p-7 sm:p-10"
          >
            <input type="hidden" name="_subject" value="New quote request from Yelden Digital Marketing Ltd website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="font-black">
                Name
                <input className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow" name="name" required />
              </label>

              <label className="font-black">
                Email
                <input className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow" type="email" name="email" required />
              </label>

              <label className="font-black">
                Phone
                <input className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow" type="tel" name="phone" />
              </label>

              <label className="font-black">
                Service
                <select className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow" name="service">
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
              <textarea className="mt-2 w-full border border-white/10 bg-black p-4 text-white outline-none focus:border-yelden-yellow" name="message" rows={7} required />
            </label>

            <button className="yellow-button mt-6" type="submit">Send Message</button>
          </form>

          <aside className="card p-7 sm:p-10">
            <h2 className="mb-8 text-4xl font-black text-yelden-yellow">Contact Details</h2>
            <div className="space-y-7">
              <p className="flex gap-4 text-white/75">
                <Mail className="shrink-0 text-yelden-yellow" />
                <a href="mailto:ali@yeldendigital.co.uk" className="hover:text-yelden-yellow">
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
            <p className="mt-10 text-sm text-white/50">
              The form uses FormSubmit. On the first test submission, check the inbox and activate it.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
