"use client";

import { createContext, useContext, useState } from "react";

interface IntroContextValue {
  introDone: boolean;
  markIntroDone: () => void;
}

const IntroContext = createContext<IntroContextValue>({
  introDone: true,
  markIntroDone: () => {},
});

export function useIntroDone() {
  return useContext(IntroContext).introDone;
}

export function useMarkIntroDone() {
  return useContext(IntroContext).markIntroDone;
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const markIntroDone = () => setIntroDone(true);

  return (
    <IntroContext.Provider value={{ introDone, markIntroDone }}>
      {children}
    </IntroContext.Provider>
  );
}

export { IntroContext };
