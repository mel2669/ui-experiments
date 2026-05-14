import { CombinedFeaturePlayground } from "./CombinedFeaturePlayground";
import { StatCardShowcase } from "./StatCardShowcase";

export default function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <CombinedFeaturePlayground />

        <h1 className="mb-8 text-[28px] font-medium leading-tight tracking-normal text-foreground">
          Stat Card Examples
        </h1>

        <StatCardShowcase />
      </div>
    </div>
  );
}
