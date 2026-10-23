import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Blog | Nexpres (I) Logistics Pvt Ltd",
  description: "Insights on logistics, supply chain, and e-commerce in India from Nexpres.",
};

const posts = [
  {
    date: "Oct 5, 2026",
    category: "D2C",
    title: "5 ways to reduce RTO without hurting conversion",
    excerpt:
      "Reverse logistics quietly eats into D2C margins. Here's how leading brands are using address verification and risk scoring to cut RTO rates.",
  },
  {
    date: "Sep 18, 2026",
    category: "Supply Chain",
    title: "Choosing between PTL and FTL for your next shipment",
    excerpt:
      "Part truckload and full truckload freight serve very different needs. A practical guide to picking the right mode for your cargo.",
  },
  {
    date: "Sep 02, 2026",
    category: "E-commerce",
    title: "What next-day delivery actually takes behind the scenes",
    excerpt:
      "From sortation to last-mile routing, a look at the infrastructure required to promise — and keep — a next-day delivery SLA.",
  },
  {
    date: "Aug 21, 2026",
    category: "Technology",
    title: "Why Indian addresses are a hard problem for mapping",
    excerpt:
      "Non-standard addresses are one of the biggest causes of failed deliveries. Here's how AI-based address resolution helps.",
  },
  {
    date: "Aug 06, 2026",
    category: "Warehousing",
    title: "Multi-tenant warehousing: what it is and when it makes sense",
    excerpt:
      "Shared fulfilment infrastructure can cut costs and shorten delivery times — if you know when to use it.",
  },
  {
    date: "Jul 15, 2026",
    category: "International",
    title: "A founder's guide to cross-border shipping from India",
    excerpt:
      "Customs, documentation, and carrier selection — the basics every exporter needs to get right the first time.",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Insights on logistics & supply chain"
        description="Practical, India-focused writing on shipping, fulfilment, and building reliable supply chains."
      />

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-border-blue bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs text-text-muted">
                  {post.date}
                </span>
                <span className="rounded-full bg-sky/10 px-3 py-1 text-xs font-medium text-sky">
                  {post.category}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{post.title}</h3>
              <p className="mt-2 font-serif text-sm text-text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
