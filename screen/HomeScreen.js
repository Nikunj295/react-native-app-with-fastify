import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { getManga } from "../api/manga";
import CustomSlider from "../components/Carousel/CustomSlider";
import { coverFromMangaObject } from "../helper/Image";

const HomeScreen = () => {
	const [apiResponse, setApiRespone] = useState([]);
	useEffect(() => {
		const getData = async () => {
			let { data = [] } = await getManga();
			data = data.map((item) => {
				return {
					title: item?.attributes?.title?.en,
					description: "Location: Red Sea",
					source: coverFromMangaObject({ manga: item }),
					id: item?.id,
				};
			});
			setApiRespone(data);
		};
		getData();
	}, []);

	return (
		<ScrollView>
			<CustomSlider data={apiResponse} />
		</ScrollView>
	);
};

export default HomeScreen;
