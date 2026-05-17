"use client";

import { useEffect, useState } from "react";

function readMedia(query: string) {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    readMedia("(prefers-reduced-motion: reduce)")
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(() => readMedia("(pointer: coarse)"));

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return coarse;
}

/** Disabilita effetti pesanti su mobile / touch e se l'utente chiede meno movimento. */
export function useLiteMotion() {
  const reduced = usePrefersReducedMotion();
  const coarse = useIsCoarsePointer();
  return reduced || coarse;
}
