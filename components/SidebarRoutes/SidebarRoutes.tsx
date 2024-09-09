"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import { SidebarItems } from "../SidebarItem"
import { dataGeneralSidebar, dataSupportSidebart, dataToolSidebar } from "./SidebarRoutes.data"

export function SidebarRoutes() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p className="text-slate-500 mb-2">General</p>
                    {dataGeneralSidebar.map((item) => (
                        <SidebarItems key={item.label} item={item} />
                    ))}
                </div>

                <Separator />

                <div className="p-2 md:p-6">
                    <p className="text-slate-500 mb-2">Herramientas</p>
                    {dataToolSidebar.map((item) => (
                        <SidebarItems key={item.label} item={item} />
                    ))}
                </div>

                <Separator />

                <div className="p-2 md:p-6">
                    <p className="text-slate-500 mb-2">Soporte</p>
                    {dataSupportSidebart.map((item) => (
                        <SidebarItems key={item.label} item={item} />
                    ))}
                </div>


            </div>
            <div>
                <div className="text-center p-6">
                   <Button variant="outline" className="w-full">
                        Mejorar plan
                    </Button> 
                </div>

                <Separator />

                <footer className="mt-3 p-3 text-center">
                    2024. Todos los derechos reservados
                </footer>
            </div>
        </div>
    )
}
