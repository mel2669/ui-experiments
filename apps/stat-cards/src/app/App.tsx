import { CombinedFeaturePlayground } from "./CombinedFeaturePlayground";
import { StatCardShowcase } from "./StatCardShowcase";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen bg-background p-8 text-foreground">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Stat card playground</p>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Toggle appearance to review catalog cards and the combined builder on both light and dark surfaces.
            </p>
          </div>
          <ThemeToggle />
        </header>

        <CombinedFeaturePlayground />

        <h1 className="mb-8 text-[28px] font-medium leading-tight tracking-normal text-foreground">
          Stat Card Examples
        </h1>

        <StatCardShowcase />
      </div>
    </div>
  );
}
