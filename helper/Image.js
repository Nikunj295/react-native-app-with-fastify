import { MANGA_COVER_URL } from "../api/const";

export const coverFromMangaObject = ({ manga, key = "cover_art" }) => {
	try {
		return MANGA_COVER_URL + manga.id + "/" + manga.relationships.find((i) => i.type === key).attributes.fileName;
	} catch (err) {
		return "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
	}
};
