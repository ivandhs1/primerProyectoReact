import React from 'react'
import {useState, useEffect} from 'react'
import {BotonUI} from '../../UI/ButtonUI/BotonUI'
import Anonimous from '../../images/anonimous.jpg'

export const ContadorUseEffectUI = () => {

    const [counter, setCounter ] = useState(0);

    function handleAdd(){
        setCounter(counter+10);
    }

    function handleSubstract(){
        setCounter(counter-10);
    }

    function handleReset(){
        setCounter(0);
    }

    useEffect(() => {
        if(counter>=100 || counter<=-100 ){
            document.getElementById("cajaImg").classList.add("cajaImgPer");
        }else{
            document.getElementById("cajaImg").classList.remove("cajaImgPer");
        }
    }, [counter])
    

  return (
    <div>
        <div className="cajaContador2">
            <h2 className="number2" id="number">{counter}</h2>
            <div className="cajaImgContador">
                <img id="cajaImg" src={Anonimous} alt="anonimous" className="imgContador" />
            </div>
            <hr />
            <div className="cajaBotones2">
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
