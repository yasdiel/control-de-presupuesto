import Header from "./components/Header"
import 'normalize.css'
import { useState, useEffect, use } from "react"
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { generarId } from './helpers'
import ListadoGastos from "./components/ListadoGastos"
import Filtros from "./components/Filtros"

function App() {

  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState(localStorage.getItem('gastos')? JSON.parse(localStorage.getItem('gastos')):[])

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')

  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)

      setTimeout(()=> {
        setAnimarModal(true)
      },500)
      
    }
  },[gastoEditar])

  useEffect(()=>{
    Number(localStorage.setItem('presupuesto', presupuesto ?? 0))
  },[presupuesto])

  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(gastos)?? [])
  },[gastos])

  useEffect(()=>{
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)

      setGastosFiltrados(gastosFiltrados)
    }
  },[filtro])

  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS>0){
      setIsValidPresupuesto(true)
    }
  },[])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(()=> {
      setAnimarModal(true)
    },500)
  }

  const guardarGasto = (gasto) => {
    if(gasto.id){
      //Actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      //Nuevo
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    

  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
      setGastos={setGastos}
      gastos={gastos}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}>
      </Header>

      { isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro}></Filtros>
            <ListadoGastos 
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
            eliminarGasto={eliminarGasto}
            setGastoEditar={setGastoEditar} gastos={gastos}></ListadoGastos>
          </main>
          <div className="nuevo-gasto">
            <img id="icono" onClick={handleNuevoGasto} src={IconoNuevoGasto} alt="icono nuevo gasto" />
        </div>
        </>
        )}

      { modal && <Modal setGastoEditar={setGastoEditar} gastoEditar={gastoEditar} guardarGasto={guardarGasto} setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal}></Modal>}
      
    </div>
  )
}

export default App
