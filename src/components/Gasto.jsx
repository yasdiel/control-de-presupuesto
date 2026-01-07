import { formatearFecha } from "../helpers"
import {LeadingActions,SwipeableList,SwipeableListItem,SwipeAction,TrailingActions} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import '../index.css'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
}

export default function Gasto({gasto, setGastoEditar,eliminarGasto}) {

    const { categoria, nombre, cantidad, id, fecha } = gasto

    const leadingActions = (
        <LeadingActions>
            <SwipeAction onClick={()=> setGastoEditar(gasto)}>Editar</SwipeAction>
        </LeadingActions>
    )

    const trailingActions = (
        <TrailingActions>
            <SwipeAction destructive={true} onClick={()=>eliminarGasto(id)}>Eliminar</SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem leadingActions={leadingActions}
            trailingActions={trailingActions}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img className="icono-gasto" src={diccionarioIconos[categoria]} alt="Icono Gasto" />
                        <div className="descripcion-gasto">
                            <p id="categoria" className="categoria">{categoria}</p>
                            <p id="nombre-gasto" className="nombre-gasto">{nombre}</p>
                            <p id="fecha-gasto" className="fecha-gasto">Agregado el: <span>{formatearFecha(fecha)}</span></p>
                        </div>
                    </div>
                    <p id="cantidad-gasto" className="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}