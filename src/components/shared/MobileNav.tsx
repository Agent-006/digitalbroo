import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/constants/navitems";

import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import Text from "./Text";


const MobileNavbar = () => {


    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className=""><TiThMenu className="h-5 w-5"/></button>
            </SheetTrigger>
            <SheetContent>
                <div className="mt-10">
                {navItems.map((item) => (
                    <Link href={item.path}>
                        <div className="my-2 items-center rounded-lg py-4 w-40 mx-[3rem] bg-[#F4E2CB] hover:bg-[#FFEBD1]">
                        <SheetHeader className="">
                            <SheetTitle className="text-[#6A3834] text-sm">{item.name}</SheetTitle>
                        </SheetHeader>
                    </div>
                    </Link>
                    
                ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;