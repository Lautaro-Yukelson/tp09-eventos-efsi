"use client";
import "./page.css";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

const DetallesEvento = () => {
  const router = useRouter();
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { makeRequest, loading, error } = useAxios();

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!id) {
        console.log("ID no disponible, esperando...");
        return; 
      }

      try {
        console.log(`Fetching event details from: /event/${id}`);
        const data = await makeRequest("GET", `/event/${id}`);
        console.log("Respuesta de la API:", data);

        if (data.response) {
          setEvent(data.response);
        } else {
          console.error("No se encontró el evento con este ID");
        }
      } catch (err) {
        console.error("Error fetching event details:", err);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="event-details">
      {event ? (
        <div className="event-card">
          <h1 className="event-title">{event[0].name}</h1>
          <p className="event-description">{event[0].description}</p>
          <p><strong>Categoría:</strong> {event[0].event_category.name}</p>
          <p><strong>Fecha:</strong> {new Date(event[0].start_date).toLocaleDateString()}</p>
          <p><strong>Duración:</strong> {event[0].duration_in_minutes} minutos</p>
          <p><strong>Precio:</strong> ${event[0].price}</p>
          <button className="back-button" onClick={() => router.back()}>Volver</button>
        </div>
      ) : (
        <p>No se encontraron detalles del evento.</p>
      )}
    </div>
  );
};

export default DetallesEvento;
