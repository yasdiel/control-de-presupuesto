import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

export default function Header({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos}){
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                setIsValidPresupuesto={setIsValidPresupuesto}

                setPresupuesto={setPresupuesto}
                setGastos={setGastos}
                gastos={gastos}
                 presupuesto={presupuesto}></ControlPresupuesto>
            ): (
                <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}></NuevoPresupuesto>
            )}
        </header>
    )
}