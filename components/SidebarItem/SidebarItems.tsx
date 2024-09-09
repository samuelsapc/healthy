"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarItemsProps } from "./SidebarItems.types";
import { cn } from "@/lib/utils";


export function SidebarItems(props: SidebarItemsProps) {
    const { item } = props
    const { href, icon: Icon, label } = item

    const pathname = usePathname()

    const activePath = pathname === href
    return (
        <Link href={href}
            className={cn(`flex gap-x-2 mt-2 ligth:text-slave-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursosr-pointer`, activePath && 'bg-slate-400/20')}>
            <Icon className="h-5 w-5" strokeWidth={1} />
            {label}
        </Link>
    )
}
