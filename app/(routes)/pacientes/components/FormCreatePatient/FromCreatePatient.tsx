"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import { profile } from "console"
import { FromCreatePatientProps } from "./FormCreatePatient.types"
import { useState } from "react"

const formSchema = z.object({
    name: z.string(),
    identification: z.string().min(6),
    phone: z.string().min(6),
    profileImage: z.string(),
})

export function FromCreatePatient(props: FromCreatePatientProps) {

    const { setOpenModalCreate } = props
    const [photoUploadd, setPhotoUploaded] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            identification: "",
            phone: "",
            profileImage: "",
        },
    })

    const { isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                    <FormField
                        control={form.control}
                        name="identification"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Identificacion</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefono</FormLabel>
                                <FormControl>
                                    <Input placeholder="+58 123 12345678" {...field} type="number" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Foto</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Registrar</Button>
            </form>
        </Form>
    )
}
