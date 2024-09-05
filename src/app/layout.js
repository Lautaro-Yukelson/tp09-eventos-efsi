"use client";

import Navbar from "./components/Navbar/Navbar";
import UserProvider from "./context/UserContext";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<UserProvider>
					<Navbar />
					{children}
				</UserProvider>
			</body>
		</html>
	);
}
