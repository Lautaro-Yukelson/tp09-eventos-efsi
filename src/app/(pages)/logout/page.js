"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import "./page.css";

export default function Logout() {
	useEffect(() => {
		Cookies.remove("token");
		window.location.href = "/login";
	}, []);
	return <p>Cerrando sesión...</p>;
}
