import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, SafeAreaView, View } from "react-native";
import { getManga } from "../../api/manga";
import CustomImage from "../../components/Image/CustomImage";
import { coverFromMangaObject } from "../../helper/Image";

const Slider = ({ header }) => {
	const [apiResponse, setApiRespone] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const { data = [] } = await getManga();
			setApiRespone(data);
		};
		getData();
	}, []);

	return (
		<SafeAreaView style={styles.sliderContainer}>
			{header && (
				<View style={styles.header}>
					<Text>{header}</Text>
				</View>
			)}
			<ScrollView horizontal={true}>
				{apiResponse.length ? (
					apiResponse?.map((item, index) => {
						return (
							<CustomImage
								key={item.name + index}
								src={coverFromMangaObject({ manga: item })}
								text={item?.attributes?.title?.en}
								style={styles.imgContainer}
								imageStyles={styles.logo}
							/>
						);
					})
				) : (
					<Text>"loading..."</Text>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sliderContainer: {
		marginVertical: 8,
	},
	header: {
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	imgContainer: {
		flexDirection: "row",
		backgroundColor: "red",
	},
	logo: {
		resizeMode: "center",
		flex: 1,
		aspectRatio: 0.8, // Your aspect ratio
		padding: 0,
		borderRadius: 10,
	},
});

export default Slider;
