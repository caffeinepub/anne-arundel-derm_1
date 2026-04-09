interface Stat {
  value: string;
  label: string;
}

const STATS_DATA: Stat[] = [
  { value: "150+", label: "Clinicians" },
  { value: "60+", label: "Locations" },
  { value: "7", label: "States" },
  { value: "40+", label: "Years of Practice" },
  { value: "4.9★", label: "Average Rating" },
];

export function StatsBar() {
  return (
    <section
      id="stats"
      className="bg-white border-b border-border shadow-sm"
      data-ocid="stats-bar"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x divide-border">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              data-ocid={`stat-item-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <p
                className="font-body font-bold text-brand-blue mb-1.5 leading-none"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                {stat.value}
              </p>
              <p className="font-body text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.12em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
