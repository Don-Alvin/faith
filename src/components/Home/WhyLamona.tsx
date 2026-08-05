const reasons = [
  {
    title: "Every listing vetted",
    body: "Titles, pricing and ownership verified before a home ever reaches you, with no surprises and no dodgy deals.",
  },
  {
    title: "Local market experts",
    body: "We know Runda, Karen, Westlands and Kilimani street by street, and share honest pricing guidance.",
  },
  {
    title: "Visit before you commit",
    body: "Book a site visit in minutes and walk the home with an expert, zero pressure to buy.",
  },
];

const steps = [
  {
    number: "01",
    title: "Search & shortlist",
    body: "Filter vetted homes by area, budget and size.",
  },
  {
    number: "02",
    title: "Pick a time",
    body: "Choose a visit slot, confirmed on WhatsApp instantly.",
  },
  {
    number: "03",
    title: "Meet on site",
    body: "A Lamona expert walks you through, no pressure.",
  },
];

const WhyLamona = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-14 sm:py-16">
        <div className="mb-9">
          <div className="text-xs sm:text-sm uppercase tracking-widest text-[#b07d10] dark:text-accent font-semibold mb-3">
            Why Lamona
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Why buyers choose Lamona
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-10">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <div className="font-display text-xl font-bold text-foreground mb-2.5">{reason.title}</div>
              <div className="text-[15px] leading-relaxed text-muted-foreground">{reason.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-secondary">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-14 sm:py-16">
          <div className="mb-9">
            <div className="text-xs sm:text-sm uppercase tracking-widest text-[#b07d10] dark:text-accent font-semibold mb-3">
              How it works
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              From search to site visit in three steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="text-sm font-bold text-[#b07d10] dark:text-accent mb-2.5">{step.number}</div>
                <div className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</div>
                <div className="text-sm leading-relaxed text-muted-foreground">{step.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyLamona;
