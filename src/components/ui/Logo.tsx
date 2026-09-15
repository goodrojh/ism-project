import React from "react";
import { SITE } from "@/lib/site";

export default function Logo({ light = true, className = "" }: { light?: boolean; className?: string }) {
  const text = light ? "text-white" : "text-ink";
  const sub = light ? "text-white/50" : "text-muted";
  return (
    <span className={"inline-flex items-center gap-2.5 " + className}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
        <rect x="1.5" y="1.5" width="31" height="31" rx="8" stroke="currentColor" className="text-amber" strokeWidth="1.5" />
        <path d="M9 24V11l7-3 9 4v12" stroke="currentColor" className="text-amber" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 24h16" stroke="currentColor" className="text-amber" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 8v16M12 15h8M12 19h8" stroke="currentColor" className="text-cyan" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="25" cy="12" r="2" fill="currentColor" className="text-cyan" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={"font-display text-[17px] font-semibold tracking-tight " + text}>{SITE.name}</span>
        <span className={"mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] " + sub}>{SITE.tagline}</span>
      </span>
    </span>
  );
}
