import { REAL_ESTATE_AGENT_SCHEMA } from "@/lib/seo";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(REAL_ESTATE_AGENT_SCHEMA) }}
    />
  );
}
