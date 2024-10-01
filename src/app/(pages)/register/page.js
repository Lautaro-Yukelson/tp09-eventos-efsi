"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import useAxios from "../../hooks/useAxios";
import Link from "next/link";
import Input from "@/app/components/Input/Input";
import "./page.css";

export default function Register() {
	const [first_name, setfirst_name] = useState("");
	const [last_name, setlast_name] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { makeRequest, loading, error } = useAxios();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await makeRequest("post", "/user/register", {
				first_name,
				last_name,
				username,
				password,
			});
			if (response?.success) {
				window.location.href = "/login";
			}
		} catch (err) {
			console.error("Error en la API:", err);
		}
	};

	return (
		<main className="form-container">
			<div className="login-container">
				<h2>Registrarse</h2>
				<form onSubmit={handleSubmit}>
					<Input
						type="text"
						name="first_name"
						id="first_name"
						placeholder="Nombre"
						value={first_name}
						onChange={(e) => setfirst_name(e.target.value)}
					/>
					<Input
						type="text"
						name="last_name"
						id="last_name"
						placeholder="Apellido"
						value={last_name}
						onChange={(e) => setlast_name(e.target.value)}
					/>
					<Input
						type="text"
						name="username"
						id="username"
						placeholder="Direccion de correo"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						type="password"
						name="password"
						id="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<p>
						¿Ya tienes una cuenta? 
						<Link href="/login">
							<b>Inicia sesión</b>
						</Link>
					</p>
					<button type="submit" disabled={loading}>
						{loading ? "Cargando..." : "Registrarse"}
					</button>
					{error && (
						<p className="error-message">{error.message || "Ocurrió un error"}</p>
					)}
				</form>
			</div>
		</main>
	);
}
