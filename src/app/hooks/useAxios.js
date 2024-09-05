import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiPort = process.env.NEXT_PUBLIC_API_PORT;

const axiosInstance = axios.create({
	baseURL: `http://${apiBaseUrl}:${apiPort}/api/dai`,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

const useAxios = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const makeRequest = async (method, url, body = null) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axiosInstance({
				method,
				url,
				data: body,
				headers: {
					...axiosInstance.defaults.headers,
					Authorization: `Bearer ${Cookies.get("token")}`,
				},
			});
			return response.data;
		} catch (err) {
			setError(err.response ? err.response.data : "An error occurred");
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return { makeRequest, loading, error };
};

export default useAxios;
