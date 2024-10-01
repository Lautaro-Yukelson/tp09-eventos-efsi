"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import useAxios from "../../hooks/useAxios";
import Link from "next/link";
import Input from "@/app/components/Input/Input";
import "./page.css";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { makeRequest, loading, error } = useAxios();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await makeRequest("post", "/user/login", {
				username,
				password,
			});
			if (response?.success) {
				Cookies.set("token", response.token, { expires: 1 });
				console.log("Login:", response.token);
				window.location.href = "/";
			}
		} catch (err) {
			console.error("Fetch API Error:", err);
		}
	};

	return (
		<main className="form-container">
			<div className="login-container">
				<h2>Iniciar sesión</h2>
				<form onSubmit={handleSubmit}>
					<Input
						type="text"
						name="username"
						id="username"
						placeholder="Nombre de usuario"
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
						¿No tienes una cuenta? 
						<Link href="/register">
							<b>Registrate</b>
						</Link>
					</p>
					<button type="submit" disabled={loading}>
						{loading ? "Cargando..." : "Entrar"}
					</button>
					{error && (
						<p className="error-message">{error.message || "An error occurred"}</p>
					)}
				</form>
			</div>
		</main>
	);
}
