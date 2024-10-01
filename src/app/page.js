"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAxios from "./hooks/useAxios";
import Card from "./components/Card/Card";
import "./page.css";

export default function Home() {
  const [events, setEvents] = useState([]);
  const { makeRequest, loading, error } = useAxios();
  const router = useRouter(); 

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
            <Card 
            key={event.id} 
            event={event} 
            />
          ))
          
        ) : (
          <p>No hay eventos disponibles.</p>
        )}
      </ul>
    </main>
  );
}
