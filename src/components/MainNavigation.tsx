"use client";

import { FunctionComponent } from "react";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { BotMessageSquare } from "lucide-react";

export const MainNavigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between">
      <Link
        href="/"
        className="mr-6 flex items-center space-x-2 p-1 bg-primary"
      >
        <BotMessageSquare className="w-6 h-6 fill-primary-foreground" />
        <span className="text-primary-foreground pr-1 font-semibold">GAIS</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/lessons"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/lessons")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Lessons
        </Link>
      </nav>
    </div>
  );
};
