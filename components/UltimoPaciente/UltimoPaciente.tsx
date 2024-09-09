import { Building } from "lucide-react";
import { CustomIcon } from "../CustomIcon";
import { TablaPacientes } from "../TablaPacientes";

export function UltimoPaciente() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
        <div className="flex gap-x-2 items-center">
            <CustomIcon icon={Building}/>
            <p className="text-xl">Pacientes atendidos</p>
        </div>
        <div>
            <TablaPacientes/>
        </div>
    </div>
  )
}
