"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#foundation", label: "Foundation" },
  { href: "#steps", label: "Steps" },
  { href: "#questions", label: "Questions" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className={`menu-button relative z-[70] grid size-10 place-items-center rounded-full outline-none transition-all duration-700 ease-fluid focus-visible:ring-2 focus-visible:ring-signal active:scale-[0.98] ${isOpen ? "menu-open" : ""}`}
      >
        <span className="menu-line menu-line-one" />
        <span className="menu-line menu-line-two" />
      </button>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal={isOpen || undefined}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-6 backdrop-blur-3xl transition-all duration-700 ease-fluid ${isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`}
      >
        <div className="flex w-full flex-col items-center gap-6 text-center">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${100 + index * 50}ms` : "0ms" }}
              className={`rounded-xl px-4 py-2 text-4xl font-semibold outline-none transition-all duration-700 ease-fluid focus-visible:ring-2 focus-visible:ring-signal ${isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
