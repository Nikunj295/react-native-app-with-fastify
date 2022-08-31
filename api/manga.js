import axios from "axios";
import { axiosInstance, base_url } from ".";

export const getManga = async (limit = 10, offset = 1) => {
	try {
		if (!axiosInstance) {
			return;
		}
		const response = await axios.get(`${base_url}manga?limit=${limit}&includes[]=cover_art`);
		return response.data;
	} catch (error) {
		console.log("error", error);
	}
};

export const getMangaById = async (id) => {
	try {
		if (!axiosInstance) {
			return;
		}
		const response = await axios.get(`${base_url}manga/${id}/aggregate&includes[]=cover_art`);
		return response.data;
	} catch (error) {
		console.log("error", error);
	}
};
