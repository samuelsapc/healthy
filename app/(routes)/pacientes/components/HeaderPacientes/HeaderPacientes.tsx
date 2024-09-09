"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from "lucide-react"
import { useState } from "react"

export function HeaderPacientes() {
    const [openModalCreate, setOpenModalCreate] = useState(false)
    return (
        <div className="flex justify-between items-center">
            <h2 className="text-2xl">Lista de pacientes</h2>
            <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
                <DialogTrigger asChild>
                    <Button> Crear Paciente</Button>
                </DialogTrigger>
                <DialogContent>
                <DialogHeader>
                    <DialogTitle>Creacion de paciente</DialogTitle>
                    <DialogDescription>
                        Ingresa los datos del paciente
                    </DialogDescription>
                </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
