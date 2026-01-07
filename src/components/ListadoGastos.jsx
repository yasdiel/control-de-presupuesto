import Gasto from "./Gasto"

export default function ListadoGastos({gastos, setGastoEditar,eliminarGasto, filtro, gastosFiltrados}){
    return (
        <div className="listado-gastos contenedor">
            

            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos aun'}</h2>
                        {gastosFiltrados.map((gasto)=>{
                return <Gasto 
                eliminarGasto={eliminarGasto} 
                setGastoEditar={setGastoEditar} 
                key={gasto.id} 
                gasto={gasto}></Gasto>
            }   )}
                    </>
                    
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
                        {gastos.map((gasto)=>{
                return <Gasto 
                eliminarGasto={eliminarGasto} 
                setGastoEditar={setGastoEditar} 
                key={gasto.id} 
                gasto={gasto}></Gasto>
            })}
                    </>

                )
            }

            
        </div>
    )
}