import { ArrowRight, MapPin } from "lucide-react";

const STATES = [
  "Maryland",
  "Virginia",
  "Pennsylvania",
  "North Carolina",
  "South Carolina",
  "Georgia",
  "Florida",
];

// Simplified geographically recognizable US state paths
// Using an Albers-USA-like projection mapped to viewBox 60 60 620 400
const US_STATES: { id: string; label: string; d: string }[] = [
  {
    id: "AL",
    label: "Alabama",
    d: "M 500,297 L 504,296 L 510,298 L 514,309 L 516,321 L 516,337 L 510,340 L 504,340 L 498,336 L 494,324 L 494,310 Z",
  },
  {
    id: "AZ",
    label: "Arizona",
    d: "M 170,265 L 202,264 L 210,266 L 210,300 L 208,320 L 196,324 L 176,320 L 168,308 L 162,290 L 164,272 Z",
  },
  {
    id: "AR",
    label: "Arkansas",
    d: "M 472,269 L 506,266 L 512,272 L 510,288 L 498,294 L 480,294 L 464,292 L 460,280 L 462,268 Z",
  },
  {
    id: "CA",
    label: "California",
    d: "M 100,175 L 138,168 L 148,174 L 152,186 L 158,202 L 160,220 L 158,244 L 148,262 L 136,274 L 120,276 L 108,270 L 98,256 L 92,236 L 90,210 L 94,192 Z",
  },
  {
    id: "CO",
    label: "Colorado",
    d: "M 248,202 L 312,200 L 316,238 L 312,256 L 252,256 L 244,254 L 244,220 Z",
  },
  {
    id: "CT",
    label: "Connecticut",
    d: "M 628,149 L 638,148 L 640,156 L 636,162 L 628,162 L 626,156 Z",
  },
  {
    id: "DE",
    label: "Delaware",
    d: "M 618,176 L 624,174 L 626,184 L 622,192 L 616,190 L 614,182 Z",
  },
  {
    id: "FL",
    label: "Florida",
    d: "M 514,335 L 528,330 L 544,330 L 558,336 L 566,348 L 568,364 L 562,382 L 550,398 L 536,412 L 522,424 L 510,420 L 502,408 L 496,390 L 494,372 L 496,352 L 502,340 Z",
  },
  {
    id: "GA",
    label: "Georgia",
    d: "M 514,270 L 542,268 L 556,272 L 564,282 L 562,300 L 554,316 L 540,328 L 526,332 L 514,330 L 504,322 L 502,308 L 502,292 L 506,278 Z",
  },
  {
    id: "ID",
    label: "Idaho",
    d: "M 172,100 L 204,96 L 216,100 L 220,116 L 214,136 L 210,156 L 196,168 L 180,168 L 170,162 L 164,148 L 166,124 Z",
  },
  {
    id: "IL",
    label: "Illinois",
    d: "M 490,168 L 508,164 L 514,172 L 516,188 L 514,210 L 508,228 L 500,236 L 490,234 L 482,224 L 482,202 L 484,182 Z",
  },
  {
    id: "IN",
    label: "Indiana",
    d: "M 516,168 L 530,166 L 534,178 L 536,196 L 532,214 L 524,224 L 514,226 L 508,220 L 510,204 L 514,186 L 514,172 Z",
  },
  {
    id: "IA",
    label: "Iowa",
    d: "M 432,162 L 468,158 L 490,162 L 490,178 L 484,194 L 468,196 L 442,196 L 428,192 L 426,176 Z",
  },
  {
    id: "KS",
    label: "Kansas",
    d: "M 318,218 L 426,214 L 430,236 L 318,238 Z",
  },
  {
    id: "KY",
    label: "Kentucky",
    d: "M 506,232 L 524,228 L 548,228 L 564,224 L 578,228 L 580,238 L 570,246 L 548,250 L 524,252 L 500,250 L 490,244 L 490,238 Z",
  },
  {
    id: "LA",
    label: "Louisiana",
    d: "M 460,294 L 494,292 L 510,296 L 514,312 L 512,324 L 498,330 L 478,332 L 460,326 L 450,314 L 450,300 Z",
  },
  {
    id: "ME",
    label: "Maine",
    d: "M 636,86 L 656,82 L 666,92 L 660,110 L 644,118 L 634,114 L 630,100 Z",
  },
  {
    id: "MD",
    label: "Maryland",
    d: "M 582,198 L 600,194 L 614,196 L 618,202 L 614,208 L 600,210 L 582,210 L 572,208 L 568,202 L 574,198 Z",
  },
  {
    id: "MA",
    label: "Massachusetts",
    d: "M 622,128 L 644,124 L 654,130 L 652,140 L 638,144 L 622,140 L 618,134 Z",
  },
  {
    id: "MI",
    label: "Michigan",
    d: "M 510,126 L 526,118 L 544,118 L 552,128 L 546,140 L 530,142 L 514,140 L 508,134 Z",
  },
  {
    id: "MN",
    label: "Minnesota",
    d: "M 430,90 L 468,86 L 484,92 L 486,112 L 480,130 L 464,142 L 442,144 L 428,140 L 424,120 L 426,100 Z",
  },
  {
    id: "MS",
    label: "Mississippi",
    d: "M 490,258 L 502,256 L 508,266 L 508,284 L 504,300 L 498,312 L 490,318 L 480,316 L 476,300 L 478,278 L 484,262 Z",
  },
  {
    id: "MO",
    label: "Missouri",
    d: "M 428,196 L 468,194 L 484,196 L 492,206 L 494,220 L 490,236 L 480,246 L 460,248 L 440,248 L 426,242 L 420,226 L 420,210 Z",
  },
  {
    id: "MT",
    label: "Montana",
    d: "M 176,70 L 310,68 L 316,76 L 316,100 L 296,110 L 266,116 L 216,116 L 200,108 L 192,90 Z",
  },
  {
    id: "NE",
    label: "Nebraska",
    d: "M 318,162 L 428,158 L 432,162 L 430,184 L 318,184 Z",
  },
  {
    id: "NV",
    label: "Nevada",
    d: "M 148,170 L 180,166 L 196,172 L 198,200 L 200,230 L 192,262 L 172,264 L 160,258 L 148,238 L 144,212 L 142,188 Z",
  },
  {
    id: "NH",
    label: "New Hampshire",
    d: "M 626,108 L 636,106 L 638,118 L 634,128 L 624,130 L 620,120 L 620,110 Z",
  },
  {
    id: "NJ",
    label: "New Jersey",
    d: "M 624,158 L 634,158 L 638,168 L 636,178 L 626,184 L 618,180 L 616,170 L 618,162 Z",
  },
  {
    id: "NM",
    label: "New Mexico",
    d: "M 210,256 L 252,254 L 256,258 L 258,296 L 256,318 L 238,322 L 210,322 L 206,300 L 208,270 Z",
  },
  {
    id: "NY",
    label: "New York",
    d: "M 548,128 L 568,122 L 594,120 L 616,126 L 624,136 L 622,150 L 614,156 L 594,156 L 568,158 L 546,160 L 538,148 L 540,136 Z",
  },
  {
    id: "NC",
    label: "North Carolina",
    d: "M 558,248 L 574,244 L 596,242 L 618,244 L 630,248 L 634,256 L 624,262 L 604,266 L 582,268 L 562,266 L 548,262 L 546,254 Z",
  },
  {
    id: "ND",
    label: "North Dakota",
    d: "M 318,90 L 424,88 L 428,100 L 430,110 L 316,112 Z",
  },
  {
    id: "OH",
    label: "Ohio",
    d: "M 534,148 L 556,144 L 564,152 L 566,166 L 562,184 L 548,198 L 534,202 L 520,198 L 514,182 L 514,164 L 518,152 Z",
  },
  {
    id: "OK",
    label: "Oklahoma",
    d: "M 316,238 L 426,234 L 432,242 L 436,254 L 424,258 L 380,258 L 340,258 L 318,258 L 312,252 L 314,240 Z",
  },
  {
    id: "OR",
    label: "Oregon",
    d: "M 106,120 L 140,116 L 172,118 L 196,120 L 198,148 L 196,168 L 164,170 L 134,170 L 108,168 L 102,148 Z",
  },
  {
    id: "PA",
    label: "Pennsylvania",
    d: "M 546,152 L 566,148 L 592,148 L 614,150 L 622,156 L 616,170 L 606,176 L 580,178 L 552,178 L 538,172 L 534,160 Z",
  },
  {
    id: "RI",
    label: "Rhode Island",
    d: "M 644,148 L 650,148 L 652,154 L 646,158 L 640,156 L 640,150 Z",
  },
  {
    id: "SC",
    label: "South Carolina",
    d: "M 564,268 L 582,268 L 602,268 L 612,274 L 614,286 L 608,298 L 594,306 L 578,308 L 562,304 L 556,292 L 558,278 Z",
  },
  {
    id: "SD",
    label: "South Dakota",
    d: "M 316,114 L 430,112 L 432,130 L 432,148 L 430,156 L 316,158 L 314,136 Z",
  },
  {
    id: "TN",
    label: "Tennessee",
    d: "M 496,252 L 518,250 L 546,252 L 566,248 L 582,246 L 592,252 L 590,260 L 572,264 L 548,266 L 524,266 L 498,264 L 486,260 L 484,254 Z",
  },
  {
    id: "TX",
    label: "Texas",
    d: "M 314,258 L 318,258 L 340,258 L 380,258 L 424,258 L 436,258 L 442,270 L 448,286 L 454,306 L 454,324 L 446,342 L 432,358 L 406,372 L 378,378 L 348,374 L 328,362 L 310,348 L 298,332 L 286,316 L 278,300 L 278,282 L 288,268 L 302,260 Z",
  },
  {
    id: "UT",
    label: "Utah",
    d: "M 200,170 L 242,168 L 244,210 L 242,254 L 208,254 L 202,240 L 196,220 L 196,192 Z",
  },
  {
    id: "VT",
    label: "Vermont",
    d: "M 606,110 L 618,108 L 622,118 L 618,130 L 608,132 L 602,124 L 602,114 Z",
  },
  {
    id: "VA",
    label: "Virginia",
    d: "M 558,218 L 580,212 L 604,210 L 620,212 L 626,220 L 628,230 L 624,238 L 612,242 L 594,242 L 570,244 L 552,244 L 542,238 L 540,228 L 546,220 Z",
  },
  {
    id: "WA",
    label: "Washington",
    d: "M 106,72 L 182,68 L 192,76 L 196,88 L 196,102 L 180,110 L 160,114 L 136,114 L 112,110 L 100,96 L 100,82 Z",
  },
  {
    id: "WV",
    label: "West Virginia",
    d: "M 538,188 L 554,182 L 568,182 L 580,186 L 582,198 L 576,208 L 566,214 L 552,214 L 540,208 L 532,198 L 534,190 Z",
  },
  {
    id: "WI",
    label: "Wisconsin",
    d: "M 466,130 L 486,126 L 504,130 L 510,140 L 506,156 L 494,162 L 474,162 L 460,156 L 458,142 Z",
  },
  {
    id: "WY",
    label: "Wyoming",
    d: "M 218,118 L 316,114 L 318,162 L 218,164 Z",
  },
];

const HIGHLIGHTED = new Set(["FL", "GA", "SC", "NC", "VA", "MD", "PA"]);

export function LocationsSection() {
  return (
    <section
      id="locations"
      className="section-padding bg-background"
      data-ocid="locations-section"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-blue font-body text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Find Care Near You
          </p>
          <h2 className="text-display-lg font-display text-foreground mb-6">
            Care That's Close to Home
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Serving seven states across the Mid-Atlantic and Southeast regions —
            Maryland, Virginia, Pennsylvania, North Carolina, South Carolina,
            Georgia, and Florida.
          </p>
        </div>

        {/* State badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {STATES.map((state) => (
            <span
              key={state}
              className="font-body text-sm font-semibold text-brand-blue border border-brand-blue px-5 py-2 hover:bg-brand-blue hover:text-white transition-colors duration-200 cursor-default"
              data-ocid={`state-badge-${state.toLowerCase().replace(/\s/g, "-")}`}
            >
              {state}
            </span>
          ))}
        </div>

        {/* SVG Map */}
        <div
          className="relative border border-border bg-[#F7FAFC] overflow-hidden"
          style={{ borderRadius: "2px" }}
          data-ocid="locations-map"
        >
          <svg
            viewBox="60 60 620 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ display: "block", maxHeight: "480px" }}
            aria-label="Map of the United States highlighting Anne Arundel Dermatology practice states"
            role="img"
          >
            <defs>
              <filter
                id="state-glow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="4"
                  floodColor="#0076C0"
                  floodOpacity="0.4"
                />
              </filter>
            </defs>

            {/* Non-highlighted states */}
            {US_STATES.filter((s) => !HIGHLIGHTED.has(s.id)).map((state) => (
              <path
                key={state.id}
                d={state.d}
                fill="#DDE8F0"
                stroke="#B8CEDD"
                strokeWidth="0.8"
              >
                <title>{state.label}</title>
              </path>
            ))}

            {/* Highlighted states — rendered on top for visibility */}
            {US_STATES.filter((s) => HIGHLIGHTED.has(s.id)).map((state) => (
              <path
                key={state.id}
                d={state.d}
                fill="#0076C0"
                fillOpacity="0.88"
                stroke="#ffffff"
                strokeWidth="1.4"
                filter="url(#state-glow)"
              >
                <title>{state.label}</title>
              </path>
            ))}
          </svg>

          {/* Location pin overlay */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none">
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 shadow-lg border-l-4 border-brand-blue whitespace-nowrap">
              <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <p className="font-body text-sm font-semibold text-foreground">
                60+ Locations across 7 States
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#locations"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-10 py-4 text-sm font-body font-bold uppercase tracking-widest hover:bg-[#005fa3] transition-colors duration-200"
            data-ocid="view-all-locations"
          >
            View All Locations <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
