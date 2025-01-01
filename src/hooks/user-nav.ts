'use client'
import { usePathname } from "next/navigation"

// custom hook to get the current page and pathname
export default function usePaths(){
    const pathname=usePathname();
    const path=pathname.split('/');
    let page=path[path.length-1];
    return {page,pathname};
}

