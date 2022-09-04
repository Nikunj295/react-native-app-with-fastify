import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { getMangaById } from "../api/manga";

const DetailScreen = ({ route }) => {
	const { itemId, otherParam } = route.params;

	const [apiResponse, setApiRespone] = useState([]);
	useEffect(() => {
		const getData = async () => {
			let { data = [] } = await getMangaById(itemId);
			setApiRespone(data);
		};
		getData();
	}, []);

	return (
		<Text>
			DetailScreen {itemId}:{otherParam}
		</Text>
	);
};

export default DetailScreen;
