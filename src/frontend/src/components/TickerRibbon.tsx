const TICKER_TEXT =
  "BOARD-CERTIFIED DERMATOLOGISTS • 60+ LOCATIONS • 7 STATES • 150+ CLINICIANS • SAME-WEEK APPOINTMENTS • SKIN HEALTH FOR EVERYONE •";

export function TickerRibbon() {
  return (
    <div
      className="bg-brand-blue overflow-hidden"
      style={{ height: "52px" }}
      aria-hidden="true"
      data-ocid="ticker-ribbon"
    >
      <div className="ticker-track flex items-center h-full">
        {/* Duplicate 6 times for seamless loop on wider screens */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={`ticker-block-${i}`}
            className="font-body font-bold text-white uppercase whitespace-nowrap px-8 flex-shrink-0"
            style={{ fontSize: "13px", letterSpacing: "0.1em" }}
          >
            {TICKER_TEXT}&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
