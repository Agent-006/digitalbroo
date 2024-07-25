import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/constants/navitems";

import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import Text from "./Text";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavContent = ({ closeSheet }: { closeSheet?: any }) => {
  const path = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-7">
      {navItems.map((item, index) => {
        const isActive = path === item.path;
        return (
          <ul key={index}>
            <li>
              <SheetClose asChild>
                <Link
                  href={item.path}
                  className={cn(
                    "text-[1em] navlink hover:opacity-90 transition relative font-medium list-none tracking-normal",
                    isActive && "active"
                  )}
                  onClick={closeSheet}
                >
                  {item.name}
                </Link>
              </SheetClose>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

const MobileNavbar = ({className}:{className?:string}) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn("",className)}>
        <AlignJustify className="size-6 shrink-0" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none flex flex-col gap-2 max-w-[80vw] bg-light"
      >
        <div className="flex flex-col space-y-7">
          <Logo />
          <NavContent />
          <SheetClose asChild>
            <Button
              variant={"outline"}
              className="border border-dark rounded-md text-center bg-light hover:bg-dark hover:text-light transition-all duration-300 ease-in-out w-[160px]"
              asChild
            >
              <p className="text-dark-foreground xl:text-xl">Get a Proposal</p>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
