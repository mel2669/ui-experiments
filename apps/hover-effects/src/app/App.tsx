import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import {
  ArrowRight,
  Award,
  Cloud,
  Heart,
  Layers,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  Zap,
} from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { getMotionSurfaces } from "./motionSurfaces";

/** Variant keys shared by parent cards and inner accents so hover hits the whole card. */
const v = {
  initial: "initial" as const,
  hover: "hover" as const,
};

/** Emil-style: short duration, exit-friendly ease-out. Respects reduced motion. */
function useShadowMotion() {
  const reduce = useReducedMotion();
  return reduce
    ? { duration: 0.01 }
    : { duration: 0.22, ease: [0.32, 0.72, 0, 1] as const };
}

export default function App() {
  const shadowT = useShadowMotion();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const s = useMemo(() => getMotionSurfaces(isDark), [isDark]);

  return (
    <div className="size-full overflow-auto bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <h1 className="mb-2 text-balance text-center sm:text-left">Card Hover Effects Gallery</h1>
            <p className="mx-auto max-w-2xl text-pretty text-center text-muted-foreground sm:mx-0 sm:text-left">
              Explore hover effects for card components—borders, motion, and a second grid of layered drop
              shadows with restrained timing.
            </p>
          </div>
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* 1. Border Flash — fixed border width so hover never changes layout */}
          <motion.div
            className="box-border cursor-pointer rounded-lg border-2 border-border bg-card p-6"
            whileHover={{ borderColor: s.borderFlashHover }}
            transition={{ duration: 0.2 }}
          >
            <Heart className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Border Flash</h3>
            <p className="text-sm text-muted-foreground">2px stroke; color flashes blue on hover</p>
          </motion.div>

          {/* 2. Border Reveal */}
          <motion.div
            className="box-border cursor-pointer rounded-lg border border-transparent bg-card p-6"
            style={{ boxShadow: s.borderRevealInset }}
            whileHover={{
              borderColor: s.borderRevealHoverBorder,
              boxShadow: "inset 0 0 0 0px transparent",
            }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Border Reveal</h3>
            <p className="text-sm text-muted-foreground">Border becomes visible</p>
          </motion.div>

          {/* 3. Left Border Accent — parent hover drives stripe */}
          <motion.div
            className="relative p-6 bg-card border border-border rounded-lg cursor-pointer overflow-hidden"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 origin-left bg-gradient-to-b from-cyan-500 to-blue-600"
              variants={{
                initial: { opacity: 0, scaleY: 0 },
                hover: { opacity: 1, scaleY: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
            <Zap className="relative z-10 w-6 h-6 mb-3 text-foreground" />
            <h3 className="relative z-10 mb-2">Left Border Accent</h3>
            <p className="relative z-10 text-sm text-muted-foreground">Colored left stripe appears</p>
          </motion.div>

          {/* 4. Top Border Accent */}
          <motion.div
            className="relative p-6 bg-card border border-border rounded-lg cursor-pointer overflow-hidden"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="pointer-events-none absolute top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-pink-500 to-rose-600"
              variants={{
                initial: { opacity: 0, scaleX: 0 },
                hover: { opacity: 1, scaleX: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
            <TrendingUp className="relative z-10 w-6 h-6 mb-3 text-foreground" />
            <h3 className="relative z-10 mb-2">Top Border Accent</h3>
            <p className="relative z-10 text-sm text-muted-foreground">Colored top stripe appears</p>
          </motion.div>

          {/* 5. Underline Sweep */}
          <motion.div
            className="relative p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="pointer-events-none absolute bottom-0 left-0 h-0.5 bg-emerald-500"
              variants={{
                initial: { width: "0%" },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <Award className="relative z-10 w-6 h-6 mb-3 text-foreground" />
            <h3 className="relative z-10 mb-2">Underline Sweep</h3>
            <p className="relative z-10 text-sm text-muted-foreground">Line animates across bottom</p>
          </motion.div>

          {/* 6. Background Fill */}
          <motion.div
            className="p-6 border border-border rounded-lg cursor-pointer bg-card"
            initial={{ backgroundColor: s.bgFillInitial }}
            whileHover={{ backgroundColor: s.bgFillHover }}
            transition={{ duration: 0.3 }}
          >
            <Heart className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Background Fill</h3>
            <p className="text-sm text-muted-foreground">Background shifts color</p>
          </motion.div>

          {/* 7. Overlay Tint — parent hover; overlay does not steal pointer */}
          <motion.div
            className="relative p-6 bg-card border border-border rounded-lg cursor-pointer overflow-hidden"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 bg-violet-600/[0.12] dark:bg-violet-400/[0.16]"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 0.45 },
              }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <Star className="w-6 h-6 mb-3 text-foreground" />
              <h3 className="mb-2">Overlay Tint</h3>
              <p className="text-sm text-muted-foreground">Color wash fades in</p>
            </div>
          </motion.div>

          {/* 8. Scale Up */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Zap className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Scale Up</h3>
            <p className="text-sm text-muted-foreground">Card grows slightly</p>
          </motion.div>

          {/* 9. Scale Down / Press */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <TrendingUp className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Scale Down / Press</h3>
            <p className="text-sm text-muted-foreground">Card shrinks like a button</p>
          </motion.div>

          {/* 10. Translate Up */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Award className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Translate Up</h3>
            <p className="text-sm text-muted-foreground">Card lifts on Y axis</p>
          </motion.div>

          {/* 11. Translate Right */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
          >
            <Heart className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Translate Right</h3>
            <p className="text-sm text-muted-foreground">Card nudges horizontally</p>
          </motion.div>

          {/* 12. Outline Ring */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            whileHover={{ boxShadow: s.outlineRingBlue }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Outline Ring</h3>
            <p className="text-sm text-muted-foreground">Focus-style ring appears</p>
          </motion.div>

          {/* 13. Radius Expand — motion owns radius so hover reads clearly (no Tailwind fight) */}
          <motion.div
            className="box-border border border-border bg-card p-6 cursor-pointer overflow-hidden"
            initial={{ borderRadius: 6 }}
            whileHover={{ borderRadius: 22 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Zap className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Radius Expand</h3>
            <p className="text-sm text-muted-foreground">Corners ease from crisp to soft</p>
          </motion.div>

          {/* 14. Border Style Shift */}
          <motion.div
            className="p-6 bg-card rounded-lg cursor-pointer border-2 border-solid border-border"
            whileHover={{ borderStyle: "dashed", borderColor: s.borderDashedHover }}
            transition={{ duration: 0.2 }}
          >
            <TrendingUp className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Border Style Shift</h3>
            <p className="text-sm text-muted-foreground">Solid to dashed border</p>
          </motion.div>

          {/* 15. Text Color Shift */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <Award className="w-6 h-6 mb-3 text-foreground" />
            <motion.h3
              className="mb-2"
              variants={{
                initial: { color: s.textHeadline },
                hover: { color: s.textHeadlineHoverRed },
              }}
              transition={{ duration: 0.2 }}
            >
              Text Color Shift
            </motion.h3>
            <p className="text-sm text-muted-foreground">Headline color changes</p>
          </motion.div>

          {/* 16. Icon Translate */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              variants={{
                initial: { x: 0 },
                hover: { x: 6 },
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-6 h-6 mb-3 text-foreground" />
            </motion.div>
            <h3 className="mb-2">Icon Translate</h3>
            <p className="text-sm text-muted-foreground">Icon shifts position</p>
          </motion.div>

          {/* 17. Icon Scale */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="inline-block origin-left"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.25 },
              }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="mb-3 h-6 w-6 text-foreground" />
            </motion.div>
            <h3 className="mb-2">Icon Scale</h3>
            <p className="text-sm text-muted-foreground">Icon grows on hover</p>
          </motion.div>

          {/* 18. Icon Rotate */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="inline-block origin-center"
              variants={{
                initial: { rotate: 0 },
                hover: { rotate: 15 },
              }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-6 h-6 mb-3 text-foreground" />
            </motion.div>
            <h3 className="mb-2">Icon Rotate</h3>
            <p className="text-sm text-muted-foreground">Icon rotates degrees</p>
          </motion.div>

          {/* 19. Corner Badge Reveal */}
          <motion.div
            className="relative p-6 bg-card border border-border rounded-lg cursor-pointer overflow-hidden"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="pointer-events-none absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-sm"
              variants={{
                initial: { opacity: 0, scale: 0.5, x: 12, y: -12 },
                hover: { opacity: 1, scale: 1, x: 0, y: 0 },
              }}
              transition={{ duration: 0.3, type: "spring", stiffness: 380, damping: 24 }}
            >
              NEW
            </motion.div>
            <Zap className="relative z-10 w-6 h-6 mb-3 text-foreground" />
            <h3 className="relative z-10 mb-2">Corner Badge Reveal</h3>
            <p className="relative z-10 text-sm text-muted-foreground">Badge animates from corner</p>
          </motion.div>

          {/* 20. Top Rule Reveal */}
          <motion.div
            className="relative p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <motion.div
              className="pointer-events-none absolute top-0 left-6 right-6 h-0.5 origin-center bg-indigo-500"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <TrendingUp className="relative z-10 w-6 h-6 mb-3 text-foreground" />
            <h3 className="relative z-10 mb-2">Top Rule Reveal</h3>
            <p className="relative z-10 text-sm text-muted-foreground">Horizontal rule from top</p>
          </motion.div>

          {/* 21. Opacity Dim */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            whileHover={{ opacity: 0.65 }}
            transition={{ duration: 0.2 }}
          >
            <Award className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Opacity Dim</h3>
            <p className="text-sm text-muted-foreground">Card fades slightly</p>
          </motion.div>

          {/* 22. Content Color Shift */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{ initial: {}, hover: {} }}
          >
            <Heart className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Content Color Shift</h3>
            <motion.p
              className="text-sm"
              variants={{
                initial: { color: s.textMuted },
                hover: { color: s.textMutedHover },
              }}
              transition={{ duration: 0.2 }}
            >
              Secondary text becomes prominent
            </motion.p>
          </motion.div>

          {/* 23. Border + Background Sync */}
          <motion.div
            className="cursor-pointer rounded-lg border border-solid bg-card p-6"
            initial={{
              borderColor: s.borderSyncInitial,
              backgroundColor: s.bgSyncInitial,
            }}
            whileHover={{
              borderColor: s.borderSyncHover,
              backgroundColor: s.bgSyncHover,
            }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-6 h-6 mb-3 text-foreground" />
            <h3 className="mb-2">Border + BG Sync</h3>
            <p className="text-sm text-muted-foreground">Both transition together</p>
          </motion.div>

          {/* 24. Multiple Combined Effects */}
          <motion.div
            className="p-6 bg-card border border-border rounded-lg cursor-pointer"
            initial={v.initial}
            whileHover={v.hover}
            variants={{
              initial: {
                y: 0,
                scale: 1,
                borderColor: s.combinedBorderInitial,
                boxShadow: "0 0 #0000",
              },
              hover: {
                y: -4,
                scale: 1.02,
                borderColor: s.combinedBorderHover,
                boxShadow: s.combinedRing,
              },
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="inline-block origin-center"
              variants={{
                initial: { rotate: 0, scale: 1 },
                hover: { rotate: 12, scale: 1.15 },
              }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="w-6 h-6 mb-3 text-foreground" />
            </motion.div>
            <h3 className="mb-2">Combined Effects</h3>
            <p className="text-sm text-muted-foreground">Multiple effects at once</p>
          </motion.div>

          {/* —— Drop shadows & elevation (layered like MDS; timing like Emil) —— */}
          <div className="col-span-full mt-4 border-t border-border pt-12">
            <h2 className="mb-2 text-center text-lg font-medium tracking-tight text-foreground">
              Drop shadows & elevation
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Shadows are stacked: a tight “contact” layer plus a softer ambient layer so depth reads
              as physical—not a single muddy blur. Motion stays under ~250ms with ease-out curves;
              hover lifts are a few pixels at most so the card does not feel gimmicky.
            </p>
          </div>

          {/* 25. Layered lift — contact + ambient (classic MDS-style stack) */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.layeredLift.initial}
            whileHover={s.layeredLift.hover}
            transition={shadowT}
          >
            <Layers className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Layered lift</h3>
            <p className="text-sm text-muted-foreground">Tight shadow + soft halo; tiny rise</p>
          </motion.div>

          {/* 26. Ambient bloom — volume without travel */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.ambientBloom.initial}
            whileHover={s.ambientBloom.hover}
            transition={shadowT}
          >
            <Cloud className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Ambient bloom</h3>
            <p className="text-sm text-muted-foreground">Diffuse layer grows; card stays put</p>
          </motion.div>

          {/* 27. Key light — biased offset (directional polish) */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.keyLight.initial}
            whileHover={s.keyLight.hover}
            transition={shadowT}
          >
            <Sun className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Key light</h3>
            <p className="text-sm text-muted-foreground">Shadow biased down-right like a light source</p>
          </motion.div>

          {/* 28. Inset press — recede instead of float */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.insetPress.initial}
            whileHover={s.insetPress.hover}
            transition={shadowT}
          >
            <Award className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Inset press</h3>
            <p className="text-sm text-muted-foreground">Outer lift swaps for shallow inset depth</p>
          </motion.div>

          {/* 29. Tinted cast — hue in shadow, still subtle */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.tintedCast.initial}
            whileHover={s.tintedCast.hover}
            transition={shadowT}
          >
            <Sparkles className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Tinted cast</h3>
            <p className="text-sm text-muted-foreground">Cool tint in the ambient layer, not neon glow</p>
          </motion.div>

          {/* 30. Paper stack — second layer suggests a sheet behind */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.paperStack.initial}
            whileHover={s.paperStack.hover}
            transition={shadowT}
          >
            <TrendingUp className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Paper stack</h3>
            <p className="text-sm text-muted-foreground">Low “shelf” + edge to imply depth behind</p>
          </motion.div>

          {/* 31. Rim + float — crisp edge ring plus soft volume */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.rimFloat.initial}
            whileHover={s.rimFloat.hover}
            transition={shadowT}
          >
            <Star className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Rim + float</h3>
            <p className="text-sm text-muted-foreground">Hairline separation then soft lift shadow</p>
          </motion.div>

          {/* 32. SVG-style drop-shadow — filter for icon-shaped falloff */}
          <motion.div
            className="cursor-pointer rounded-lg border border-border bg-card p-6"
            initial={s.dropShadowFilter.initial}
            whileHover={s.dropShadowFilter.hover}
            transition={shadowT}
          >
            <Zap className="mb-3 h-6 w-6 text-foreground" />
            <h3 className="mb-2">Drop-shadow filter</h3>
            <p className="text-sm text-muted-foreground">Stacked filters follow the glyph silhouette</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Hover over any card to see the effect in action</p>
        </div>
      </div>
    </div>
  );
}
