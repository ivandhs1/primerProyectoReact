import React from 'react';
import { LogoUI } from '../../UI/LogoUI/LogoUI';
import { LinksUI } from '../../UI/LinksUI/LinksUI';
import { TitleUI } from '../../UI/TitleUI/TitleUI';
import { SwitchUI } from '../../UI/SwitchUI/SwitchUI';

export const HeaderHome = () => {

  const modeDark = () => {
    const btnSwitch = document.getElementById("btn");

    document.body.classList.toggle("darkMode");
    btnSwitch.classList.toggle("darkMode");
  }

  return (
    <div className='headerHome'>
        <LogoUI></LogoUI>
        <TitleUI></TitleUI>
        <div className='cajaMenu'>
            <nav>
                <ul className='ul'>
                    <LinksUI references="/" text="Home"/>
                    <LinksUI references="/Contact" text="Contact"/>
                    <LinksUI references="/About" text="About"/>
                    <LinksUI references="/Contador" text="Contador"/>
                </ul>
            </nav>
            <SwitchUI id="btn" event={modeDark}></SwitchUI>
        </div>
    </div>
  )
}
