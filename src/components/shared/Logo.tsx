import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link className={cn("pt-2 md:pt-4", className)} href="/">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-[110px] md:w-[140px] lg:w-[160px] h-auto object-cover pointer-events-none select-none"
      />
    </Link>
  );
};
