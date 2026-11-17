"use client";

import { useEffect, useRef, useState } from "react";
import { pill } from "@/lib/ui";

export function CopyEmail({ email }: { email: string }) {
  const text = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [label, setLabel] = useState("Copy email");

  useEffect(() => () => clearTimeout(timer.current), []);

  const flash = (message: string) => {
    setLabel(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel("Copy email"), 1800);
  };

  const selectText = () => {
    const node = text.current;
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      flash("Copied");
    } catch {
      selectText();
      flash("Press copy");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3.5">
      <code
        ref={text}
        className="select-all font-display text-[clamp(0.95rem,2.4vw,1.5rem)] text-fg [overflow-wrap:anywhere]"
      >
        {email}
      </code>
      <button type="button" className={pill} onClick={copy}>
        {label}
      </button>
    </div>
  );
}
