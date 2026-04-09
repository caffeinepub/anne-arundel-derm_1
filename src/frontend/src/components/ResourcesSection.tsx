import { ArrowRight } from "lucide-react";

interface Article {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const ARTICLES: Article[] = [
  {
    id: "a1",
    tag: "Skincare",
    title: "How to Build a Dermatologist-Approved Skincare Routine",
    excerpt:
      "Start with the basics: gentle cleanser, moisturizer, and broad-spectrum SPF 30+. Here's what our dermatologists recommend for every skin type.",
    image: "/assets/generated/blog-skincare-routine.dim_800x500.jpg",
    href: "#article-skincare-routine",
  },
  {
    id: "a2",
    tag: "Skin Cancer",
    title: "The ABCDEs of Melanoma: What to Look For",
    excerpt:
      "Early detection is critical. Learn how to perform a self-examination and what warning signs to watch for on your skin.",
    image: "/assets/generated/blog-skin-cancer-abcde.dim_800x500.jpg",
    href: "#article-melanoma-abcde",
  },
  {
    id: "a3",
    tag: "Aesthetics",
    title: "Botox vs. Fillers: Which Is Right for You?",
    excerpt:
      "Both treatments can address signs of aging, but they work in very different ways. Our aesthetic providers break it down.",
    image: "/assets/generated/blog-botox-fillers.dim_800x500.jpg",
    href: "#article-botox-vs-fillers",
  },
];

export function ResourcesSection() {
  return (
    <section
      id="resources"
      className="section-padding bg-muted/20"
      data-ocid="resources-section"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-blue font-body text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Skin Advice
          </p>
          <h2 className="text-display-lg font-display text-foreground mb-5">
            Your Skin Questions, Answered
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Expert advice from our dermatologists on everything from skincare
            routines to treatment options.
          </p>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <a
              key={article.id}
              href={article.href}
              className="group block bg-card border border-border overflow-hidden card-hover"
              data-ocid={`article-card-${article.id}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="font-body text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-3">
                  {article.tag}
                </p>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-brand-blue transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-body font-semibold">
                  Read More{" "}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#resources"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue px-10 py-4 text-sm font-body font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors duration-200"
            data-ocid="explore-skin-advice"
          >
            Explore Helpful Skin Advice <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
