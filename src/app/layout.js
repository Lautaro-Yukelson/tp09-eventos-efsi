"use client";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UserProvider from "./context/UserContext";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<UserProvider>
					<Navbar />
					{children}
					<Footer />
				</UserProvider>
			</body>
		</html>
	);
}
