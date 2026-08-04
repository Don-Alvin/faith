import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Lamona Realtors uses cookies and similar technologies on this website.",
  url: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="container-responsive py-16 sm:py-20 lg:py-24 mt-16 sm:mt-20 lg:mt-24 max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
        Legal
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Cookie Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: August 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/80">
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">What cookies are</h2>
          <p>
            Cookies are small text files a website stores in your browser to remember information
            between visits, such as whether you&apos;ve been here before or how you found the
            site. Some cookies come directly from us; others come from third-party tools we use.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">What we actually use</h2>
          <p className="mb-4">
            We keep this simple: the only cookies set on lamonarealtors.com come from{" "}
            <strong>Google Analytics</strong> (via Firebase Analytics), which we use to
            understand how many people visit the site, which pages and listings get the most
            interest, and how visitors generally navigate the site. This helps us know which
            properties and content to prioritize &mdash; it doesn&apos;t identify you personally.
          </p>
          <p>
            We don&apos;t run advertising or retargeting cookies, and we don&apos;t sell or share
            analytics data with third parties beyond Google&apos;s standard analytics
            infrastructure.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Forms are not cookies</h2>
          <p>
            When you submit a booking or contact form, that information (your name, phone,
            email, and message) is sent directly to our inbox via FormSubmit &mdash; it&apos;s
            not stored as a cookie or used for tracking, it&apos;s simply how your enquiry
            reaches our team.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Managing cookies</h2>
          <p>
            Most browsers let you block or delete cookies in their settings. Blocking analytics
            cookies won&apos;t stop you from browsing listings or booking a viewing &mdash; it
            just means we won&apos;t be able to count your visit in our analytics.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Changes to this policy</h2>
          <p>
            If the tools we use on this site change, we&apos;ll update this page to reflect it.
            The &quot;last updated&quot; date above shows the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href="mailto:anadoomollo@zohomail.com" className="text-[#b07d10] hover:text-accent font-medium">
              anadoomollo@zohomail.com
            </a>{" "}
            or +254 750 030 357.
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-4 border-t border-border">
          This page reflects the cookies actually in use on this site today. If you add new
          tools later (ads, chat widgets, remarketing pixels, etc.), this page needs to be
          updated to match, and reviewed against Kenya&apos;s Data Protection Act, 2019.
        </p>
      </div>
    </div>
  );
}
