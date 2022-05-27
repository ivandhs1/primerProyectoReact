import React from 'react'
import { LinksUI } from '../../UI/LinksUI/LinksUI'

export const Ejercicios = () => {
  return (
    <div className='cajaEjercicios'>
      <h2 className='h2Ejercicios' >Ejercicios de JavaScript implementados a React</h2>
      <br />
      <div className='cajaLinkEjercicio'>
        <LinksUI  styleli="linkEjercicio" references="/Carrito" style="linkEjercicios" text="Carrito"></LinksUI>
        <LinksUI styleli="linkEjercicio" references="/ContadorUseEffect" style="linkEjercicios" text="ContadorUseEffect"></LinksUI>
        <LinksUI styleli="linkEjercicio" references="/RickAndMorty" style="linkEjercicios" text="RickAndMorty"></LinksUI>
      </div>
    </div>
  )
}
