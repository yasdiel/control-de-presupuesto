import { useEffect, useState } from "react"

export default function Filtros({filtro,setFiltro}){
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div id="campo-filtro" className="campo">
                    <label htmlFor="search">Filtrar Gastos</label>
                    <select value={filtro} onChange={e => setFiltro(e.target.value) }id="search">
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}