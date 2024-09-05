import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const UserContext = createContext();

const UserProvider = (props) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = Cookies.get("token");
		if (token) {
			console.log(token);
			setUser(jwtDecode(token));
		}
	}, []);

	const logout = () => {
		Cookies.remove("token");
	};

	return (
		<UserContext.Provider
			value={{
				user,
				logout,
			}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
