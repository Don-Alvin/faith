import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using the Lamona Realtors website.",
  url: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24 max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
        Legal
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: August 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/80">
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">1. Who we are</h2>
          <p>
            Lamona Realtors (&quot;Lamona&quot;, &quot;we&quot;, &quot;us&quot;) is a real estate
            agency based in Nairobi, Kenya, operating this website at lamonarealtors.com. By
            browsing this site, requesting a site visit, or otherwise contacting us through it,
            you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">2. What this site does</h2>
          <p>
            This site lists properties we have vetted for sale in Nairobi and lets you request a
            site visit or get in touch with our team. It is a marketing and lead-generation tool,
            not a transaction platform &mdash; no purchase, deposit, or contract is made through
            the website itself. Any sale, rental, or investment agreement is handled directly
            between you and Lamona (or the relevant seller) outside of this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">3. Listing accuracy</h2>
          <p>
            We make a reasonable effort to verify the listings shown here &mdash; pricing,
            availability, title status, and photos &mdash; but property details can change
            quickly. Listed prices, availability, and specifications are not a binding offer and
            should be confirmed with a Lamona agent before you make any decision. We are not
            liable for listings that have sold, changed price, or been withdrawn since the page
            was last updated.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">4. Booking a site visit</h2>
          <p>
            When you submit a booking or contact form, you&apos;re sending your name, contact
            details, and message directly to our team so we can arrange a viewing or respond to
            your enquiry. Submitting a form does not guarantee a specific viewing time &mdash; we
            confirm every request individually, usually within 24 hours.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">5. Acceptable use</h2>
          <p>
            Please don&apos;t use this site to submit false enquiries, scrape or republish our
            listings and photography without permission, or attempt to interfere with how the
            site runs. We may block access for anyone who does.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">6. Content and ownership</h2>
          <p>
            The text, photography, and branding on this site belong to Lamona Realtors unless
            otherwise credited, and shouldn&apos;t be reused commercially without our written
            permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">7. Third-party links</h2>
          <p>
            We link out to our Facebook and Instagram pages and use a third-party service
            (FormSubmit) to deliver form submissions to our inbox. We aren&apos;t responsible for
            the content or privacy practices of those external services once you leave our site
            or once your enquiry reaches them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">8. Limitation of liability</h2>
          <p>
            This site is provided as-is. To the extent permitted by Kenyan law, Lamona Realtors
            is not liable for losses arising from reliance on information published here, or from
            the site being temporarily unavailable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">9. Governing law</h2>
          <p>
            These terms are governed by the laws of the Republic of Kenya. Any dispute arising
            from your use of this site will be subject to the jurisdiction of Kenyan courts.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">10. Changes to these terms</h2>
          <p>
            We may update these terms as our services change. The &quot;last updated&quot; date
            at the top of this page will reflect the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">11. Contact</h2>
          <p>
            Questions about these terms? Reach us at{" "}
            <a href="mailto:anadoomollo@zohomail.com" className="text-[#b07d10] hover:text-accent font-medium">
              anadoomollo@zohomail.com
            </a>{" "}
            or +254 750 030 357.
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-4 border-t border-border">
          This page is provided as a general starting point and hasn&apos;t been reviewed by a
          lawyer. If these terms need to hold up legally &mdash; particularly around property
          transactions &mdash; have them checked by a Kenyan legal professional before relying on
          them.
        </p>
      </div>
    </div>
  );
}
