"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { navItems } from "@/constants/navitems";
import MobileNavbar from "./MobileNav";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="w-full h-auto md:h-20 fixed top-0 z-50 bg-light flex items-center justify-center">
      <div className="flex items-center w-full h-full justify-between px-5 py-3 md:px-10 2xl:px-64 border-b border-opacity-50 border-dark">
        <Logo className="flex items-center justify-center" />

        <div className="items-center gap-x-9 hidden md:flex">
          {navItems.map((item, index) => {
            const isActive = path === item.path;
            return (
              <Link
                key={index}
                href={item.path}
                className={cn(
                  "text-lg text-dark-foreground navlink relative font-medium tracking-normal",
                  isActive && "active"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex">
          <Link href="/">
            <Button
              variant={"outline"}
              className="border border-dark rounded-2xl text-center bg-light hover:bg-dark hover:text-light transition-all duration-300 ease-in-out"
              asChild
            >
              <p className="text-dark-foreground xl:text-xl">Get a Proposal</p>
            </Button>
          </Link>
        </div>
        <MobileNavbar className="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
