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

// Each column shows all three reviews in a different order, then duplicated so
// the vertical marquee loops seamlessly. (We only have three real reviews, so
// they repeat down the wall until more genuine reviews are added.)
const columns = [
  { order: [0, 1, 2], dir: "down" as const, duration: "36s" },
  { order: [1, 2, 0], dir: "up" as const, duration: "44s" },
  { order: [2, 0, 1], dir: "down" as const, duration: "40s" },
];

const TestimonialCard = ({ quote, name }: { quote: string; name: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
    <div className="font-display text-4xl leading-none text-accent h-5">&rdquo;</div>
    <p className="mt-3.5 text-[15px] leading-relaxed text-white/90">{quote}</p>
    <div className="mt-4 text-sm font-bold text-white">{name}</div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="gradient-primary text-white overflow-hidden py-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        <div className="inline-flex items-center gap-2.5 text-accent text-xs font-bold tracking-[0.18em] uppercase mb-4">
          <span className="w-6 h-0.5 bg-accent inline-block" />
          Testimonials
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2.5">
          What buyers say
        </h2>
        <p className="text-white/65 text-lg max-w-2xl mb-10">
          What clients across Nairobi say about buying with Lamona.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-[560px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, #000 13%, #000 87%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, #000 13%, #000 87%, transparent)",
          }}
        >
          {columns.map((col, ci) => {
            const cards = col.order.map((i) => reviews[i]);
            const doubled = [...cards, ...cards];
            return (
              <div key={ci} className={`overflow-hidden ${ci === 2 ? "hidden lg:block" : ""}`}>
                <div
                  className={`flex flex-col gap-5 ${
                    col.dir === "down" ? "marquee-col-down" : "marquee-col-up"
                  }`}
                  style={{ "--marquee-duration": col.duration } as React.CSSProperties}
                >
                  {doubled.map((r, i) => (
                    <TestimonialCard key={i} quote={r.quote} name={r.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
