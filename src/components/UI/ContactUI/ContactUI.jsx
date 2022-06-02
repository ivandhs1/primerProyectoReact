import React from 'react'
import emailjs from '@emailjs/browser'

export const ContactUI = () => {

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_351izji','template_331pfqp', event.target, 'yxX0zL03525FgmUHm')
        .then(response => console.log(response)).catch(error => console.log(error));
    }

  return (
    <div>

        <div className="contact">
            <div className="cajaContactH2">
                <h2>Contact Us</h2>
            </div>
            <form onSubmit={sendEmail}>
                <div className="cajaInput">
                    <label className="inputContact" >Nombre:</label>
                    <input type="text" className="inputContact" name="nombre"/>
                    <label className="inputContact" >Correo:</label>
                    <input type="text" className="inputContact" name="correo"/>
                    <label className="inputContact" >Mensaje:</label>
                    <textarea type="textarea" className="inputContactArea" name="mensaje"/>
                </div>
                <button className="btn-EnviarContact" >ENVIAR</button>
            </form>


        </div>

    </div>
  )
}
