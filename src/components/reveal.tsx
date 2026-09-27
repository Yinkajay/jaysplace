"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -64px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal="true"
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function TaglineReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wordElements = Array.from(
      container.querySelectorAll<HTMLElement>("[data-tagline-word]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.active = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -32%", threshold: 0.8 },
    );

    wordElements.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 py-24" aria-label="Project promise">
      <div className="mx-auto max-w-6xl">
        <h2
          ref={containerRef}
          className="max-w-[680px] text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {words.map((word, index) => (
            <span key={`${word}-${index}`}>
              <span
                data-tagline-word
                style={{ transitionDelay: `${index * 35}ms` }}
                className="tagline-word inline-block"
              >
                {word}
              </span>{" "}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
