import React from 'react'
import { Link } from "react-router-dom";

export const LinksUI = ({styleli,references,style, text}) => {
  return (
    <>
        <li className={styleli} ><Link to={references} className={style}>{text}</Link></li>
    </>
  )
}
