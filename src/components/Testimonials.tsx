import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I called after days of no responses from other agents. Lamona picked up, understood exactly what I needed, and had me viewing homes the same week.",
    name: "Wanjiru M.",
  },
  {
    quote:
      "A wide range of properties and completely trustworthy. They made it easy to find the right house without any pressure.",
    name: "Kelvin O.",
  },
  {
    quote:
      "Excellent support, honest pricing and a great selection. I'd recommend anyone looking for a home in Nairobi to visit them.",
    name: "Achieng' A.",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-14 sm:py-16">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-7">What buyers say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.name} className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-0.5 text-accent mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-[15px] text-foreground leading-relaxed mb-4">{review.quote}</p>
            <div className="text-sm font-semibold text-muted-foreground">{review.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
