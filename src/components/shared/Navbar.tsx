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
    <div className="w-full min-w-screen-2xl h-[4rem] relative top-0">
      <div className="flex mx-4 md:mx-10 lg:mx-20 xl:mx-40 h-full">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10 h-full mt-2 ">
          <h1 className="text-xl xl:text-4xl font-bold bg-gradient-to-b from-[#0F324F] via-[#E66E42] to-[#6A3834] bg-clip-text text-transparent">
            Techacee
          </h1>
          <ul className="hidden md:flex gap-x-7 md:gap-x-6">
            {navItems.map((item) => {
              const isActive = path === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`${
                      isActive ? "border-b-2 border-[#6A3834]" : ""
                    } lg:text-[16px] md:text-[12px] xl:text-xl text-[#6A3834]`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="">
            <Button variant={"outline"} className="hidden md:block bg-light border border-[#6A3834] rounded-2xl text-center" asChild>
              <p className="text-dark-foreground xl:text-xl">Get a Proposal</p>
            </Button>
          </Link>
          <div className="lg:hidden md:hidden top-5 right-4 block z-50">
            <MobileNavbar />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-[#C19E96] mx-4 md:mx-10 lg:mx-20 xl:mx-40" />
    </div>
  );
};

export default Navbar;
