import { 
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
 } from "lucide-react";


 export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Building2,
        label: "Pacientes",
        href: "/pacientes"
    },
    {
        icon: Calendar,
        label: "Tratamientos",
        href: "/tratamientos"
    }
 ]

 export const dataToolSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Preguntas",
        href: "/preguntas"
    },
    {
        icon: BarChart4,
        label: "Terminos y condiciones",
        href: "/terms"
    },
 ]

 export const dataSupportSidebart = [
    {
        icon: Settings,
        label: "Configuraciones",
        href: "/configuraciones"
    },
    {
        icon: ShieldCheck,
        label: "Seguridad",
        href: "/seguridad"
    },
 ]