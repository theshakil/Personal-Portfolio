"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

/** Shows the local time in Nairobi, refreshed every 30 seconds. */
export function Clock({ className }: { className?: string }) {
  const [text, setText] = useState<string>(profile.city);

  useEffect(() => {
    const tick = () => {
      try {
        const time = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: profile.timeZone,
        }).format(new Date());
        setText(`${profile.city} ${time} EAT`);
      } catch {
        setText(profile.city);
      }
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span className={className}>{text}</span>;
}
