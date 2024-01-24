"use client"

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavButton from "./ui/navbar-buttons";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));

    // return (
    //     <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
    //         {routes.map((route) => (
                
    //             <NavButton>
    //                 <Link key={route.href} href={route.href} className={cn(
    //                     "text-sm font-medium transition-colors"
    //                 )}>
    //                     {route.label}
    //                 </Link>
    //             </NavButton>

    //         ))}
    //     </nav>
    // );

    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={cn(
                    "text-sm font-medium transition-colors",
                    { 'font-bold': route.active }
                )} passHref>
                    
                        <NavButton>
                            {route.label}
                        </NavButton>
                    
                </Link>
            ))}
        </nav>
    );
}

export default MainNav;


