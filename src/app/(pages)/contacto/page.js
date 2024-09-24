"use client";
import "./page.css";

export default function Contacto () {
  
  return (
    <>
        <main className="main-form">
            <div className="header-form">
                <h1>Contacto</h1>
                <p>¿Tienes preguntas sobre nuestros eventos? ¡Contáctanos!</p>
            </div>
            
            <form action="#" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </main>
    </>
    
  );
};

