"use client";
import "./page.css";
import Input from "@/app/components/Input/Input";

export default function Contacto () {
  
  return (
    <>
        <main className="main-form">
            <div className="header-form">
                <h1>Contacto</h1>
                <p>¿Tienes preguntas sobre nuestros eventos? ¡Contáctanos!</p>
            </div>
            
            <form action="#" method="post">
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Nombre"
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </main>
    </>
    
  );
};

