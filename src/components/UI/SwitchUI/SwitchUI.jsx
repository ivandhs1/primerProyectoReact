import React from 'react'

export const SwitchUI = ({id, event}) => {
  return (
    <div className="Switch">
        <div id={id} onClick={event} className="cajaSwitch">

        </div>
    </div>
  )
}
