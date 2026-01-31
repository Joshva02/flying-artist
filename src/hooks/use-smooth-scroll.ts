"use client";
export function useSmoothScroll() {
  const scrollTo = (id: string) => {
    if (id === "#" || id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById(id.replace("#", ""));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return scrollTo;
}
