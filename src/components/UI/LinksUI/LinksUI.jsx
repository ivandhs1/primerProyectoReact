import React from 'react'
import { Link } from "react-router-dom";

export const LinksUI = ({references, text}) => {
  return (
    <>
        <li ><Link to={references}>{text}</Link></li>
    </>
  )
}
