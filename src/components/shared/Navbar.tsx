"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { navItems } from "@/constants/navitems";
import MobileNavbar from "./MobileNav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="w-full">
      <div className="flex items-center h-20 md:h-16 xl:h-20 w-full justify-between px-2 md:px-10 xl:px-[10rem]">
        <div>
          <h1 className="text-lg xl:text-4xl font-bold bg-gradient-to-b from-[#0F324F] via-[#E66E42] to-[#6A3834] bg-clip-text text-transparent">
            DigitalBroo
          </h1>
        </div>

        <div className="items-center hidden md:block">
          <ul className="flex gap-5 xl:gap-[3rem]">
            {navItems.map((item) => {
              const isActive = path === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`${isActive ? "border-b-2 border-[#6A3834]" : ""
                      } lg:text-[15px] md:text-[12px] xl:text-xl text-[#6A3834]`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="hidden md:block">
            <Link href="">
              <Button
                variant={"outline"}
                className="bg-light border border-[#6A3834] rounded-2xl text-center"
                asChild
              >
                <p className="text-dark-foreground xl:text-xl">Get a Proposal</p>
              </Button>
            </Link>
          </div>

          <div className="block md:hidden mr-1">
            <MobileNavbar />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-[#C19E96] mx-2 md:mx-10 xl:mx-[10rem]" />
    </div>
  );
};

export default Navbar;
