"use client"

import "./Card.css";
import { useRouter } from "next/navigation"; 

export default function Card({ event }) {

    const router = useRouter();

    const handleMoreDetails = (id) => {
        router.push(`/detalle/${id}`); 
    };

    return (
        <li className="card">
            <div className="card__content flow">
                <div className="card__content--container flow">
                    <h2 className="card__title">{event.name}</h2>
                    <p className="card__description">{event.description}</p>
                </div>
                <div className="card__details">
                    <p><strong>Categoría:</strong> {event.category_name}</p>
                    <p><strong>Fecha:</strong> {new Date(event.start_date).toLocaleDateString()}</p>
                    <p><strong>Duración:</strong> {event.duration_in_minutes} minutos</p>
                    <p><strong>Precio:</strong> ${event.price}</p>
                    <p><strong>Capacidad máxima:</strong> {event.max_assistance}</p>
                </div>
                <button
                    className="card__button"
                    onClick={() => handleMoreDetails(event.id)}
                >
                    Más detalles
                </button>
            </div>
        </li>
    );
}
