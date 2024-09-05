import { useContext } from "react";
import Link from "next/link";
import { UserContext } from "@/app/context/UserContext";
import "./Navbar.css";

export default function Navbar() {
	const { user, logout } = useContext(UserContext);

	const handleLogout = () => {
		logout();
		window.location.href = "/login";
	};

	return (
		<nav className={`navbar ${user ? "logged" : ""}`}>
			<Link href="/">
				<h1>EFSI</h1>
			</Link>
			<div className="user-controls">
				{user ? (
					<>
						<p>
							{user.first_name} {user.last_name}
						</p>
						<button onClick={handleLogout}>Cerrar sesión</button>
					</>
				) : (
					<></>
				)}
			</div>
		</nav>
	);
}
