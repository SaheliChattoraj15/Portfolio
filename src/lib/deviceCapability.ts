export type PerformanceTier = "high" | "medium" | "low";

export interface DeviceCapability {
  tier: PerformanceTier;
  hardwareConcurrency: number;
  deviceMemory: number | null;
  saveData: boolean;
  effectiveType: string | null;
  isTouchDevice: boolean;
  prefersReducedMotion: boolean;
  browserName: string;
  osName: string;
  screenResolution: string;
  devicePixelRatio: number;
}

export function detectDeviceCapability(): DeviceCapability {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    // Default server-side fallback
    return {
      tier: "high",
      hardwareConcurrency: 8,
      deviceMemory: 8,
      saveData: false,
      effectiveType: "4g",
      isTouchDevice: false,
      prefersReducedMotion: false,
      browserName: "Server",
      osName: "Unknown",
      screenResolution: "1920x1080",
      devicePixelRatio: 1,
    };
  }

  // 1. Hardware Concurrency (Logical CPU Cores)
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  // 2. Device Memory (RAM in GB) - available in Chromium/modern browsers
  const navAny = navigator as unknown as {
    deviceMemory?: number;
    connection?: {
      saveData?: boolean;
      effectiveType?: string;
    };
  };
  const deviceMemory = typeof navAny.deviceMemory === "number" ? navAny.deviceMemory : null;

  // 3. Network Connection & Data Saver
  const saveData = Boolean(navAny.connection?.saveData);
  const effectiveType = navAny.connection?.effectiveType || null;

  // 4. Input & Motion Preferences
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice =
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  // 5. Browser & OS Detection
  const userAgent = navigator.userAgent || "";
  let browserName = "Modern Browser";
  let osName = "Unknown OS";

  if (/chrome|crios/i.test(userAgent) && !/edg|opr\//i.test(userAgent)) {
    browserName = "Chrome";
  } else if (/safari/i.test(userAgent) && !/chrome|crios|android/i.test(userAgent)) {
    browserName = "Safari";
  } else if (/firefox|fxios/i.test(userAgent)) {
    browserName = "Firefox";
  } else if (/edg/i.test(userAgent)) {
    browserName = "Edge";
  } else if (/opr\//i.test(userAgent)) {
    browserName = "Opera";
  }

  if (/macintosh|mac os x/i.test(userAgent)) {
    osName = "macOS";
  } else if (/windows|win32/i.test(userAgent)) {
    osName = "Windows";
  } else if (/android/i.test(userAgent)) {
    osName = "Android";
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    osName = "iOS";
  } else if (/linux/i.test(userAgent)) {
    osName = "Linux";
  }

  const screenResolution = `${window.screen?.width || 0}x${window.screen?.height || 0}`;
  const devicePixelRatio = Number((window.devicePixelRatio || 1).toFixed(2));

  // 6. Capability Tier Calculation
  let tier: PerformanceTier = "high";

  // Low Tier Conditions:
  // - Low CPU cores (< 4)
  // - Low RAM (< 4 GB)
  // - Save-Data explicitly enabled
  // - Slow 2G/3G network connection
  // - Reduced motion explicitly enabled
  if (
    hardwareConcurrency < 4 ||
    (deviceMemory !== null && deviceMemory < 4) ||
    saveData ||
    effectiveType === "slow-2g" ||
    effectiveType === "2g" ||
    prefersReducedMotion
  ) {
    tier = "low";
  }
  // Medium Tier Conditions:
  // - 4-5 cores
  // - Mobile/touch device on 4G
  // - 4GB RAM
  else if (
    hardwareConcurrency < 6 ||
    (deviceMemory !== null && deviceMemory <= 4) ||
    effectiveType === "3g" ||
    (isTouchDevice && devicePixelRatio > 2)
  ) {
    tier = "medium";
  } else {
    tier = "high";
  }

  return {
    tier,
    hardwareConcurrency,
    deviceMemory,
    saveData,
    effectiveType,
    isTouchDevice,
    prefersReducedMotion,
    browserName,
    osName,
    screenResolution,
    devicePixelRatio,
  };
}
