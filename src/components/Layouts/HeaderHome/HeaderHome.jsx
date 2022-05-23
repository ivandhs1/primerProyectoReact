import React from 'react';
import { LogoUI } from '../../UI/LogoUI/LogoUI';
import { LinksUI } from '../../UI/LinksUI/LinksUI';
import { TitleUI } from '../../UI/TitleUI/TitleUI';
import { SwitchUI } from '../../UI/SwitchUI/SwitchUI';
import { useState } from 'react';

export const HeaderHome = () => {

  const [theme, setTheme ] = useState(false);

  const modeDark = () => {

    if(theme==false){
      const btnSwitch = document.getElementById("btn");

      document.body.classList.add("darkMode");
      btnSwitch.classList.add("darkMode");
      setTheme(true);
    }else{
      const btnSwitch = document.getElementById("btn");

      document.body.classList.remove("darkMode");
      btnSwitch.classList.remove("darkMode");
      setTheme(false);
    }

  }

  return (
    <div className='headerHome'>
        <LogoUI></LogoUI>
        <TitleUI></TitleUI>
        <div className='cajaMenu'>
            <nav>
                <ul className='ul'>
                    <LinksUI styleli='li' references="/" text="Home"/>
                    <LinksUI styleli='li' references="/Contact" text="Contact"/>
                    <LinksUI styleli='li' references="/Ejercicios" text="Ejercicios"/>
                    <LinksUI styleli='li' references="/Contador" text="Contador"/>
                </ul>
            </nav>
            <SwitchUI id="btn" event={modeDark}></SwitchUI>
        </div>
    </div>
  )
}
