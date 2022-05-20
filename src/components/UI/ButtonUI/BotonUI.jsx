import React from 'react'

export const BotonUI = ({style, event, textButton="Sumar"}) => {
  return (
    <button onClick={event} className={style}>{textButton}</button>
  )
}
