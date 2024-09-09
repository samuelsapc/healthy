import { CardSummary } from "@/components/Cardsummary/CardSummary"
import { Activity, Bandage, BookOpenCheck, SquareUser, UserRound, Waypoints } from "lucide-react"
import { UltimoPaciente } from "@/components/UltimoPaciente"
import { CrecimientoPacientes } from "@/components/CrecimientoPacientes"

export const dataCardsSummary = [
    {
        icon: SquareUser,
        total: "125",
        average: 15,
        title: "Pacientes",
        tooltipText: "Ver todos los pacientes creados"
    },
    {
        icon: Activity,
        total: "30",
        average: 80,
        title: "Pacientes atendidos",
        tooltipText: "Ver pacientes atentidos"
    },
    {
        icon: Bandage,
        total: "60",
        average: 30,
        title: "Tratamientos",
        tooltipText: "Ver todos los tratamientos"
    }
]
export default function Home() {
    return (
        <div>

            <h2 className="text-2xl mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
                {dataCardsSummary.map(({ icon, total, average, title, tooltipText }) => (
                    <CardSummary
                        key={title}
                        icon={icon}
                        total={total}
                        average={average}
                        title={title}
                        tooltipText={tooltipText} />
                ))}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
                <UltimoPaciente />
                <CrecimientoPacientes />
            </div>
            {/* <div className="flex-col xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
                <p>Total de pacientes</p>
                <p>Lista de tratamientos</p>
            </div> */}
        </div>
    )
}
