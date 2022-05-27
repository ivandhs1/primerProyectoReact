import React from 'react'
import { useState , useEffect, useRef} from 'react';

export const RickAndMorty = () => {

    const contenedorCardRyM = useRef(null);
    const inputRyM = useRef(null);

    const URL = "https://rickandmortyapi.com/api/character/?name=";

    const [state, setState]= useState("");

    function iniciar(event) {

        if(event.key == 'Enter'){
            setState(inputRyM.current.value)
        }
    }

    useEffect(() => {

        if(state.length>0){
            limpiarContenedor();
            Connection(state);
        }else{
            limpiarContenedor()
        }

    }, [state])

    function limpiarContenedor(){
        console.log(contenedorCardRyM);
        console.log("borrando")
        while(contenedorCardRyM.current.firstChild){
            contenedorCardRyM.current.removeChild(contenedorCardRyM.current.firstChild);
        }
    }

    function Connection(state){
        fetch(URL+`${state}`)
        .then(response => response.json())
        .then(data => foreach(data.results))
    }

    function foreach(data){
        data.forEach(character => {
            createCards(character.name, character.image, character.gender);
        });
    }

    function createCards(name, image, gender){
        console.log("aqui toy 3")
        const cardF = document.createElement("div")
        const imageC= document.createElement("img")
        const nameC= document.createElement("p");
        const genderC= document.createElement("p")
        styleCards(name, image, gender, cardF, imageC,nameC, genderC)
    }

    function styleCards(name,image, gender, cardF, imageC, nameC, genderC){
        cardF.classList.add("card-rickAndMorty");
    
        imageC.setAttribute("alt",name);
        imageC.setAttribute("src",image);
        imageC.classList.add("imagenCardRyM")
    
        nameC.classList.add("h6RyMc");
        nameC.textContent=name;

        genderC.classList.add("h6RyM");
        genderC.textContent=gender
    
        cardF.appendChild(nameC);
        cardF.appendChild(imageC);
        cardF.appendChild(genderC);
        
        contenedorCardRyM.current.appendChild(cardF);

    }

  return (
    <div className="contenedorPadreRyM">
        <div className="contenedorH6yInput">
            <h6 className="h6RyM">What character do you want to show?</h6>
            <input ref={inputRyM} id="input" type="text" className="inputRyM" onKeyUp={iniciar} />
        </div>
        <div ref={contenedorCardRyM} className="contenedorCardRyM">

 

        </div>
    </div>
  )
}
