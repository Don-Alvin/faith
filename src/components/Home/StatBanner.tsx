const stats = [
  { n: "20+", label: "Vetted listings live right now" },
  { n: "100%", label: "Checked before they reach you" },
  { n: "12h", label: "Typical reply, then a visit booked" },
];

const StatBanner = () => {
  return (
    <section className="gradient-primary text-white border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={stat.n}
            className={`text-center py-4 sm:py-0 sm:px-8 ${
              i > 0 ? "sm:border-l sm:border-white/12" : ""
            }`}
          >
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-accent tracking-tight leading-none">
              {stat.n}
            </div>
            <div className="mt-2.5 text-sm text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatBanner;
