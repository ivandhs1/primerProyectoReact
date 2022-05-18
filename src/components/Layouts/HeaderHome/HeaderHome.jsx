import React from 'react';
import { LogoUI } from '../../UI/LogoUI/LogoUI';
import { LinksUI } from '../../UI/LinksUI/LinksUI';
import { TitleUI } from '../../UI/TitleUI/TitleUI';

export const HeaderHome = () => {
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
                </ul>
            </nav>
        </div>
    </div>
  )
}
