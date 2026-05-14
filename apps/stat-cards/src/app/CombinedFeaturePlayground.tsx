import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, DollarSign, Download, Heart, Star, TrendingUp } from "lucide-react";
import { Label } from "./components/ui/label";
import { Switch } from "./components/ui/switch";
import { cn } from "./components/ui/utils";

export const FEATURE_IDS = [
  "title",
  "iconBadge",
  "headline",
  "trend",
  "goalProgress",
  "ringRating",
  "twoColStats",
  "dualMetrics",
  "retentionBand",
  "threeColKpis",
  "perfHeadline",
  "timingPills",
  "cpuLoad",
  "footerMeta",
] as const;

export type FeatureId = (typeof FEATURE_IDS)[number];

const LABELS: Record<FeatureId, string> = {
  title: "Title label",
  iconBadge: "Icon badge",
  headline: "Primary headline value",
  trend: "Trend vs prior period",
  goalProgress: "Goal progress bar & caption",
  ringRating: "Ring chart & star rating",
  twoColStats: "Two-column breakdown",
  dualMetrics: "Dual mini progress bars",
  retentionBand: "Retention donut panel",
  threeColKpis: "Three KPI columns",
  perfHeadline: "Performance % & ring",
  timingPills: "Response & throughput",
  cpuLoad: "CPU usage meter",
  footerMeta: "Stars & operations",
};

const allEnabled = (): Record<FeatureId, boolean> =>
  Object.fromEntries(FEATURE_IDS.map((id) => [id, true])) as Record<FeatureId, boolean>;

const defaultFeatures = (): Record<FeatureId, boolean> => ({
  ...Object.fromEntries(FEATURE_IDS.map((id) => [id, false])) as Record<FeatureId, boolean>,
  title: true,
  iconBadge: false,
  headline: true,
  twoColStats: true,
});

type Accent = "info" | "lavender" | "success";

const ACCENT_BORDER: Record<Accent, string> = {
  info: "border-svc-info",
  lavender: "border-svc-lavender",
  success: "border-svc-success",
};

const PREVIEW_SLOTS: { accent: Accent; caption: string }[] = [
  { accent: "info", caption: "Total Revenue" },
  { accent: "lavender", caption: "User Engagement" },
  { accent: "success", caption: "Performance Metrics" },
];

function CombinedStatCardPreview({
  features,
  showBorder,
  accent,
}: {
  features: Record<FeatureId, boolean>;
  showBorder: boolean;
  accent: Accent;
}) {
  const anyOn = useMemo(() => FEATURE_IDS.some((id) => features[id]), [features]);
  const showTitleRow = features.title || features.iconBadge;

  return (
    <div
      className={cn(
        "h-full rounded-lg bg-card p-6 shadow-svc-card transition-[border-color,box-shadow] duration-200",
        showBorder ? cn("border-2", ACCENT_BORDER[accent]) : "border-0",
      )}
    >
      {!anyOn ? (
        <p className="text-center text-sm text-muted-foreground">Turn on at least one section to preview the card.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {showTitleRow && (
            <div
              className={cn(
                "flex items-center gap-4",
                features.title && features.iconBadge && "justify-between",
                features.title && !features.iconBadge && "justify-start",
                !features.title && features.iconBadge && "justify-end",
              )}
            >
              {features.title && <p className="text-sm text-muted-foreground">Total Revenue</p>}
              {features.iconBadge && (
                <div className={cn("rounded-full bg-svc-brand-primary-light-max p-3", !features.title && "shrink-0")}>
                  <DollarSign className="size-6 text-svc-brand-primary" />
                </div>
              )}
            </div>
          )}

          {features.headline && (
            <div className="flex items-baseline gap-2">
              <p className="text-[28px] font-medium leading-tight tracking-normal text-foreground">$234,567</p>
            </div>
          )}

          {features.trend && (
            <div className="flex items-center gap-1 text-sm text-svc-success">
              <TrendingUp className="size-4 shrink-0" />
              <span>+24.5% from last month</span>
            </div>
          )}

          {features.goalProgress && (
            <div className="flex flex-col gap-2">
              <div className="h-2 w-full rounded-full bg-svc-track">
                <div className="h-2 w-[78%] rounded-full bg-svc-info" />
              </div>
              <p className="text-xs text-muted-foreground">78% of annual goal ($300K)</p>
            </div>
          )}

          {features.ringRating && (
            <div className="flex items-center gap-4">
              <div className="relative size-16 shrink-0">
                <svg className="size-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted-foreground/20" />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26}`}
                    strokeDashoffset={`${2 * Math.PI * 26 * (1 - 0.82)}`}
                    className="text-svc-success"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold">82%</span>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Success Rate</p>
                <div className="mt-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        "size-3 shrink-0",
                        star <= 4 ? "fill-svc-warning text-svc-warning" : "text-muted-foreground/40",
                      )}
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">4.8</span>
                </div>
              </div>
            </div>
          )}

          {features.twoColStats && (
            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
              <div>
                <p className="text-xs text-muted-foreground">Active</p>
                <p className="text-base font-medium text-foreground">1,234</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Completed</p>
                <p className="text-base font-medium text-foreground">8,901</p>
              </div>
            </div>
          )}

          {features.dualMetrics && (
            <div className="flex flex-col gap-4 border-t border-border pt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Active Sessions</span>
                  <span>3,421</span>
                </div>
                <div className="h-2 w-full rounded-full bg-svc-track">
                  <div className="h-2 w-[68%] rounded-full bg-svc-lavender" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Page Views</span>
                  <span>12,543</span>
                </div>
                <div className="h-2 w-full rounded-full bg-svc-track">
                  <div className="h-2 w-[85%] rounded-full bg-svc-info" />
                </div>
              </div>
            </div>
          )}

          {features.retentionBand && (
            <div className="flex items-center justify-between gap-4 rounded-lg bg-muted p-4">
              <div className="flex items-center gap-2">
                <div className="relative size-12 shrink-0">
                  <svg className="size-12 -rotate-90" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="none" className="text-muted-foreground/20" />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${2 * Math.PI * 20 * (1 - 0.64)}`}
                      className="text-svc-lavender"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold">64%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Retention</p>
                  <p className="text-sm font-semibold text-foreground">6,401/10K</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-right">
                <Heart className="size-5 shrink-0 fill-red-500 text-red-500" />
                <p className="text-xs text-muted-foreground">2,341</p>
              </div>
            </div>
          )}

          {features.threeColKpis && (
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-4 text-center">
              <div>
                <p className="text-xs text-muted-foreground">New</p>
                <p className="text-sm font-semibold text-foreground">892</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Return</p>
                <p className="text-sm font-semibold text-foreground">1,234</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Loyal</p>
                <p className="text-sm font-semibold text-foreground">543</p>
              </div>
            </div>
          )}

          {features.perfHeadline && (
            <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
              <div>
                <p className="text-[28px] font-medium text-foreground">98.7%</p>
                <div className="mt-1 flex items-center gap-1 text-xs text-svc-success">
                  <ArrowUpRight className="size-3 shrink-0" />
                  <span>+2.3% uptime</span>
                </div>
              </div>
              <div className="relative size-16 shrink-0">
                <svg className="size-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted-foreground/20" />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 26}`}
                    strokeDashoffset={`${2 * Math.PI * 26 * (1 - 0.987)}`}
                    className="text-svc-success"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold">99%</span>
                </div>
              </div>
            </div>
          )}

          {features.timingPills && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 rounded-md bg-svc-info-light-max p-2">
                <span className="text-xs text-muted-foreground">Avg Response</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-foreground">1.2s</span>
                  <ArrowDownRight className="size-3 shrink-0 text-svc-success" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-md bg-svc-lavender-light-max p-2">
                <span className="text-xs text-muted-foreground">Throughput</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-foreground">5.4K/s</span>
                  <ArrowUpRight className="size-3 shrink-0 text-svc-success" />
                </div>
              </div>
            </div>
          )}

          {features.cpuLoad && (
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>CPU Usage</span>
                <span>42%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-svc-track">
                <div className="h-2 w-[42%] rounded-full bg-svc-success" />
              </div>
            </div>
          )}

          {features.footerMeta && (
            <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-3 shrink-0 fill-svc-warning text-svc-warning" />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Download className="size-4 shrink-0 text-muted-foreground" />
                <span>2,341 ops</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function CombinedFeaturePlayground() {
  const [features, setFeatures] = useState<Record<FeatureId, boolean>>(defaultFeatures);
  const [showCardBorder, setShowCardBorder] = useState(true);

  const setFeature = (id: FeatureId, value: boolean) => {
    setFeatures((prev) => ({ ...prev, [id]: value }));
  };

  const enableAll = () => setFeatures(allEnabled());
  const clearAll = () =>
    setFeatures(Object.fromEntries(FEATURE_IDS.map((id) => [id, false])) as Record<FeatureId, boolean>);

  return (
    <section className="mb-8 rounded-lg border border-border bg-card p-6 shadow-sm">
      <div className="mb-8 flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Build a combined stat card</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Three previews share the same section toggles. Each preview uses a different accent border color
            (matching the combined examples below) whenever the card border is on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start">
          {PREVIEW_SLOTS.map(({ accent, caption }) => (
            <div key={accent} className="flex min-w-0 flex-col gap-2">
              <p className="text-xs font-medium text-muted-foreground">{caption}</p>
              <CombinedStatCardPreview features={features} showBorder={showCardBorder} accent={accent} />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-muted p-6 shadow-sm">
        <p className="mb-6 text-sm font-semibold text-foreground">Controls</p>

        <div className="mb-8 flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-4 sm:justify-start">
            <Label htmlFor="card-border" className="cursor-pointer text-sm font-normal text-foreground">
              Colored card border
            </Label>
            <Switch id="card-border" checked={showCardBorder} onCheckedChange={setShowCardBorder} />
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <button
              type="button"
              onClick={enableAll}
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-muted"
            >
              Enable all sections
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-muted"
            >
              Clear all sections
            </button>
          </div>
        </div>

        <p className="mb-4 text-xs font-semibold text-muted-foreground">Sections</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_IDS.map((id) => (
            <div key={id} className="flex items-center justify-between gap-4 rounded-md border border-border bg-card px-4 py-3">
              <Label htmlFor={`feat-${id}`} className="cursor-pointer text-sm font-normal text-foreground">
                {LABELS[id]}
              </Label>
              <Switch id={`feat-${id}`} checked={features[id]} onCheckedChange={(v) => setFeature(id, v)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
