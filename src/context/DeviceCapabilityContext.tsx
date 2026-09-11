"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  detectDeviceCapability,
  type DeviceCapability,
  type PerformanceTier,
} from "@/lib/deviceCapability";

interface DeviceCapabilityContextValue {
  capability: DeviceCapability;
  isReady: boolean;
  setTierOverride: (tier: PerformanceTier | null) => void;
  tierOverride: PerformanceTier | null;
  activeTier: PerformanceTier;
}

const defaultCapability: DeviceCapability = {
  tier: "high",
  hardwareConcurrency: 8,
  deviceMemory: 8,
  saveData: false,
  effectiveType: "4g",
  isTouchDevice: false,
  prefersReducedMotion: false,
  browserName: "Browser",
  osName: "System",
  screenResolution: "1920x1080",
  devicePixelRatio: 1,
};

const DeviceCapabilityContext = createContext<DeviceCapabilityContextValue>({
  capability: defaultCapability,
  isReady: false,
  setTierOverride: () => {},
  tierOverride: null,
  activeTier: "high",
});

export function DeviceCapabilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [capability, setCapability] = useState<DeviceCapability>(defaultCapability);
  const [isReady, setIsReady] = useState(false);
  const [tierOverride, setTierOverride] = useState<PerformanceTier | null>(null);

  useEffect(() => {
    const detected = detectDeviceCapability();
    setCapability(detected);
    setIsReady(true);

    const activeTier = tierOverride || detected.tier;
    document.documentElement.setAttribute("data-device-tier", activeTier);
    document.documentElement.setAttribute("data-touch", String(detected.isTouchDevice));
    document.documentElement.setAttribute("data-browser", detected.browserName.toLowerCase());
    document.documentElement.setAttribute("data-os", detected.osName.toLowerCase());

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => {
      setCapability(detectDeviceCapability());
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [tierOverride]);

  const activeTier = tierOverride || capability.tier;

  return (
    <DeviceCapabilityContext.Provider
      value={{
        capability,
        isReady,
        setTierOverride,
        tierOverride,
        activeTier,
      }}
    >
      {children}
    </DeviceCapabilityContext.Provider>
  );
}

export function useDeviceCapability() {
  return useContext(DeviceCapabilityContext);
}
