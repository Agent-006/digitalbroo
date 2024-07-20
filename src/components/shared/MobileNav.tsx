import {
    Sheet,
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

const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className=""><TiThMenu className="h-5 w-5" /></button>
            </SheetTrigger>
            <SheetContent>
                <div className="mt-10">
                    {navItems.map((item) => (
                        <Link href={item.path} key={item.path}>
                            <div className="my-2 items-center rounded-lg py-4 w-40 mx-[3rem] bg-[#F4E2CB] hover:bg-[#FFEBD1]">
                                <SheetHeader>
                                    <SheetTitle className="text-[#6A3834] text-sm">{item.name}</SheetTitle>
                                </SheetHeader>

                            </div>
                        </Link>
                    ))}
                    <Button variant={"outline"} className="ml-[50px] mt-1 border border-[#6A3834] rounded-2xl px-[2rem] py-6" asChild>
              <Text text="Get a Proposal" />
            </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
