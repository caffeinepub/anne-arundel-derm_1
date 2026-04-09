import { Star } from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "My experience with my dermatologist and assistant has been nothing short of exceptional. From the moment I walked in, I was treated with genuine care and professionalism.",
    author: "Fred B.",
    location: "Millersville, MD",
  },
  {
    id: "t2",
    quote:
      "The staff was incredibly knowledgeable and took the time to explain everything thoroughly. My skin has never looked better!",
    author: "Sarah M.",
    location: "Annapolis, MD",
  },
  {
    id: "t3",
    quote:
      "Scheduled a same-week appointment and the whole experience was seamless. Highly recommend Anne Arundel Dermatology!",
    author: "James L.",
    location: "Bethesda, MD",
  },
];

function StarRating() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-1 mb-6" aria-label="5 stars">
      {stars.map((n) => (
        <Star
          key={`star-${n}`}
          className="w-4 h-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-muted/40"
      data-ocid="testimonials-section"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-blue font-body text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Patient Reviews
          </p>
          <h2 className="text-display-lg font-display text-foreground">
            What Patients Are Saying
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-sm rounded-sm p-8 flex flex-col card-hover border border-border"
              data-ocid={`testimonial-card-${testimonial.id}`}
            >
              <StarRating />
              <blockquote className="font-display text-base italic text-foreground/85 leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-5">
                <p className="font-body text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
