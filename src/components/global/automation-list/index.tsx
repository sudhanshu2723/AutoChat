'use client'

import usePaths from "@/hooks/user-nav"
import { cn } from "@/lib/utils";
import Link from "next/link";



export default function AutomationList(){

    const {pathname}=usePaths();

    return (
        <div className="flex flex-col gap-y-3">
            <Link
          href={`${pathname}/${24324}`}
          key={324}
          className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold">Automation Name</h2>
            <p className="text-[#9B9CA0] text-sm font-light mb-2">
              This is from the comment
            </p> 
            <div className="flex gap-x-2 flex-wrap mt-3">
                <div className={cn('rounded-full px-4 py-1 capitalize')}>

                </div>
            </div>
            </div>

             </Link>
        </div>
    )
}