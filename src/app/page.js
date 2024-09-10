"use client";

import { useEffect, useState } from "react";
import useAxios from "./hooks/useAxios";
import "./page.css"

export default function Home() {
	const [events, setEvents] = useState([]);
	const { makeRequest, loading, error } = useAxios();

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const data = await makeRequest("GET", "/event");
				console.log("Fetched data:", data);
				setEvents(data.response);
			} catch (err) {
				console.error("Error fetching events:", err);
			}
		};
		fetchEvents();
	}, []);

	return (
		<main>
			<h1>Lista de Eventos</h1>
			{loading && <p>Cargando eventos...</p>}
			{error && <p>Error: {error}</p>}
			<ul className="event-list">
			{Array.isArray(events) && events.length > 0 ? (
				events.map((event) => (
				<li key={event.id} className="card">
					<div className="card__content flow">
					<div className="card__content--container flow">
						<h2 className="card__title">{event.name}</h2>
						<p className="card__description">{event.description}</p>
					</div>
					<div className="card__details">
						<p>
						<strong>Categoría:</strong> {event.category_name}
						</p>
						<p>
						<strong>Fecha:</strong>{" "}
						{new Date(event.start_date).toLocaleDateString()}
						</p>
						<p>
						<strong>Duración:</strong> {event.duration_in_minutes} minutos
						</p>
						<p>
						<strong>Precio:</strong> ${event.price}
						</p>
						<p>
						<strong>Capacidad máxima:</strong> {event.max_assistance}
						</p>
					</div>
					<button className="card__button">Más detalles</button>
					</div>
				</li>
				))
			) : (
				<p>No hay eventos disponibles.</p>
			)}
			</ul>
		</main>
	);
}
