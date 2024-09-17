"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

export default function DetallesEvento() {
  const router = useRouter();
  const { id } = router.query;
  const { makeRequest, loading, error } = useAxios();

  useEffect(() => {
    if (id) {
      const fetchEventDetails = async () => {
        try {
          const data = await makeRequest("GET", `/event/${id}`);
          setEvent(data.response);
        } catch (err) {
          console.error("Error fetching event details:", err);
        }
      };
      fetchEventDetails();
    }
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {event ? (
        <>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
          <p><strong>Categoría:</strong> {event.category_name}</p>
          <p><strong>Fecha:</strong> {new Date(event.start_date).toLocaleDateString()}</p>
          <p><strong>Duración:</strong> {event.duration_in_minutes} minutos</p>
          <p><strong>Precio:</strong> ${event.price}</p>
        </>
      ) : (
        <p>No se encontraron detalles del evento.</p>
      )}
    </div>
  );
}