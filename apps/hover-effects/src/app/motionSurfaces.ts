/**
 * Theme-aware values for Framer Motion props (hex/rgb cannot use Tailwind `dark:`).
 * `isDark` should come from `next-themes` `resolvedTheme === "dark"`.
 */
export function getMotionSurfaces(isDark: boolean) {
  const ink = isDark ? "255, 255, 255" : "15, 23, 42";
  const inkSoft = (a: number) => `rgba(${ink}, ${a})`;

  return {
    borderFlashHover: "#3b82f6",
    borderRevealInset: isDark ? "inset 0 0 0 1px rgba(255,255,255,0.14)" : "inset 0 0 0 1px #cbd5e1",
    borderRevealHoverBorder: "#8b5cf6",
    bgFillInitial: isDark ? "#18181b" : "#ffffff",
    bgFillHover: isDark ? "#422006" : "#fef3c7",
    outlineRingBlue: "0 0 0 3px rgba(59, 130, 246, 0.45)",
    borderDashedHover: isDark ? "#a1a1aa" : "#64748b",
    textHeadline: isDark ? "#fafafa" : "#0f172a",
    textHeadlineHoverRed: "#dc2626",
    textMuted: isDark ? "#a1a1aa" : "#64748b",
    textMutedHover: isDark ? "#fafafa" : "#0f172a",
    borderSyncInitial: isDark ? "rgb(63 63 70)" : "rgb(203 213 225)",
    bgSyncInitial: isDark ? "#18181b" : "#ffffff",
    borderSyncHover: "#10b981",
    bgSyncHover: isDark ? "#052e16" : "#f0fdf4",
    combinedBorderInitial: isDark ? "rgb(63 63 70)" : "rgb(203 213 225)",
    combinedBorderHover: "rgb(245 158 11)",
    combinedRing: "0 0 0 2px rgba(245, 158, 11, 0.28)",
    layeredLift: {
      initial: {
        y: 0,
        boxShadow: `0 0 0 1px ${inkSoft(0.05)}, 0 1px 2px ${inkSoft(0.06)}`,
      },
      hover: {
        y: -3,
        boxShadow: `0 0 0 1px ${inkSoft(0.08)}, 0 2px 4px -1px ${inkSoft(0.1)}, 0 14px 28px -10px ${inkSoft(0.2)}`,
      },
    },
    ambientBloom: {
      initial: { boxShadow: `0 1px 2px ${inkSoft(0.06)}` },
      hover: {
        boxShadow: `0 1px 2px ${inkSoft(0.06)}, 0 18px 40px -12px ${inkSoft(0.22)}`,
      },
    },
    keyLight: {
      initial: { y: 0, boxShadow: `1px 2px 4px ${inkSoft(0.08)}` },
      hover: {
        y: -2,
        boxShadow: `3px 6px 10px -2px ${inkSoft(0.12)}, 6px 14px 22px -8px ${inkSoft(0.16)}`,
      },
    },
    insetPress: {
      initial: { y: 0, boxShadow: `0 2px 8px ${inkSoft(0.1)}` },
      hover: {
        y: 1,
        boxShadow: isDark
          ? `inset 0 1px 2px rgba(0,0,0,0.45), inset 0 -1px 1px rgba(255,255,255,0.06), 0 1px 1px rgba(0,0,0,0.35)`
          : `inset 0 1px 2px rgba(15, 23, 42, 0.08), inset 0 -1px 1px rgba(255, 255, 255, 0.6), 0 1px 1px rgba(15, 23, 42, 0.04)`,
      },
    },
    tintedCast: {
      initial: { y: 0, boxShadow: `0 1px 3px ${inkSoft(0.08)}` },
      hover: {
        y: -2,
        boxShadow:
          "0 2px 6px -1px rgba(59, 130, 246, 0.18), 0 12px 28px -10px rgba(59, 130, 246, 0.22), 0 0 0 1px rgba(59, 130, 246, 0.12)",
      },
    },
    paperStack: {
      initial: {
        boxShadow: `0 1px 2px ${inkSoft(0.07)}, 0 0 0 1px ${inkSoft(0.06)}`,
      },
      hover: {
        boxShadow: isDark
          ? `0 1px 2px ${inkSoft(0.08)}, 0 3px 0 ${inkSoft(0.06)}, 0 10px 22px -8px ${inkSoft(0.2)}, 0 18px 0 -14px rgba(24,24,27,1), 0 22px 16px -12px ${inkSoft(0.18)}`
          : "0 1px 2px rgba(15, 23, 42, 0.06), 0 3px 0 rgba(15, 23, 42, 0.04), 0 10px 22px -8px rgba(15, 23, 42, 0.12), 0 18px 0 -14px rgba(248, 250, 252, 1), 0 22px 16px -12px rgba(15, 23, 42, 0.1)",
      },
    },
    rimFloat: {
      initial: {
        y: 0,
        boxShadow: `0 0 0 1px ${inkSoft(0.08)}, 0 1px 2px ${inkSoft(0.06)}`,
      },
      hover: {
        y: -2,
        boxShadow: isDark
          ? `0 0 0 1px ${inkSoft(0.12)}, 0 0 0 4px rgba(24,24,27,1), 0 0 0 5px rgba(113,113,122,0.45), 0 10px 24px -8px ${inkSoft(0.2)}`
          : "0 0 0 1px rgba(15, 23, 42, 0.08), 0 0 0 4px rgba(255, 255, 255, 1), 0 0 0 5px rgba(148, 163, 184, 0.35), 0 10px 24px -8px rgba(15, 23, 42, 0.12)",
      },
    },
    dropShadowFilter: {
      initial: { filter: `drop-shadow(0 1px 1px ${inkSoft(0.08)})` },
      hover: {
        y: -2,
        filter: `drop-shadow(0 2px 4px ${inkSoft(0.12)}) drop-shadow(0 10px 16px ${inkSoft(0.18)})`,
      },
    },
  };
}
