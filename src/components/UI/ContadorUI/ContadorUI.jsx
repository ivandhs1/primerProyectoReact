import React from 'react'
import {useState} from 'react'
import { BotonUI } from '../ButtonUI/BotonUI';

export const ContadorUI = () => {

    const [counter, setCounter ] = useState(0);

    const handleAdd = () => {
        setCounter(counter+1);
    }

    const handleSubstract = () => {
        setCounter(counter-1)
    }

    const handleReset = () => {
        setCounter(0)
    }

  return (
    <div className="container">

        <div className="cajaContador">
            <h2 className="number" id="number">{counter}</h2>
            <hr />
            <div className="cajaBotones">
                <BotonUI
                    style="btn btnPositivo"
                    event={handleAdd}>
                </BotonUI>
                <BotonUI
                    style="btn btnReset"
                    event={handleReset}
                    textButton="Reset">
                </BotonUI>
                <BotonUI
                    style="btn btnNegativo"
                    event={handleSubstract}
                    textButton="Restar">
                </BotonUI>
            </div>
        </div>

    </div>
  )
}
