"use client";

import React, { createContext, useContext, useState } from "react";

export type LensMode = "engineering" | "management";

interface LensContextType {
  lens: LensMode;
  setLens: (lens: LensMode) => void;
  toggleLens: () => void;
}

const LensContext = createContext<LensContextType | undefined>(undefined);

export function LensProvider({ children }: { children: React.ReactNode }) {
  const [lens, setLensState] = useState<LensMode>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("saheli_portfolio_lens");
      if (stored === "engineering" || stored === "management") {
        return stored;
      }
    }
    return "engineering";
  });

  const setLens = (newLens: LensMode) => {
    setLensState(newLens);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("saheli_portfolio_lens", newLens);
    }
  };

  const toggleLens = () => {
    const next = lens === "engineering" ? "management" : "engineering";
    setLens(next);
  };

  return (
    <LensContext.Provider value={{ lens, setLens, toggleLens }}>
      {children}
    </LensContext.Provider>
  );
}

export function useLens() {
  const context = useContext(LensContext);
  if (!context) {
    throw new Error("useLens must be used within a LensProvider");
  }
  return context;
}
