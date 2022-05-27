import React from 'react'
import emailjs from '@emailjs/browser'

export const ContactUI = () => {
  return (
    <div>

        <div className="contact">
            <div className="cajaContactH2">
                <h2>Contact Us</h2>
            </div>
            <form >
                <div className="cajaInput">
                    <label className="inputContact" >Nombre:</label>
                    <input type="text" className="inputContact" name="nombre"/>
                    <label className="inputContact" >Correo:</label>
                    <input type="text" className="inputContact" name="correo"/>
                    <label className="inputContact" >Mensaje:</label>
                    <textarea type="textarea" className="inputContactArea" name="mensaje"/>
                </div>
            </form>

            <button className="btn-EnviarContact">ENVIAR</button>
        </div>

    </div>
  )
}
