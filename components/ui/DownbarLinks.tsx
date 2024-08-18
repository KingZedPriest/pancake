"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


const DownBarLinks = ({icon, path, pathName}: DownBarLinksProps) => {

    const currentPath = usePathname()

    return ( 
        <Link href={path} className={`${path === currentPath ? "text-warmOrange font-semibold" : "text-black/70"} hover:text-warmOrange duration-300 cursor-pointer flex flex-col items-center gap-y-1`}>
            {icon}
            <p className={`text-[10px] md:text-xs xl:text-sm`}>{pathName}</p>
        </Link>
     );
}
 
export default DownBarLinks;