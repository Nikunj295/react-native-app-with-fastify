import React, { useCallback } from "react";
import { Dimensions, Pressable, View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import styles from "../../styles";

const { width } = Dimensions.get("window");

export default function CustomSlider({ data }) {
	const navigation = useNavigation();
	if (!data || !data?.length) return null;

	const settings = {
		sliderWidth: width,
		sliderHeight: width,
		itemWidth: width - 80,
		data: data,
		hasParallaxImages: true,
	};

	/* Moving this function as individual file and importing not working as Carousel is in class component and navigation use hooks */
	const CarouselItem = useCallback(({ item, index }, parallaxProps) => {
		return (
			<Pressable
				key={item.id}
				onPress={() => {
					navigation.navigate("DetailPage", {
						itemId: item.id,
						otherParam: item.title,
					});
				}}>
				<SafeAreaView style={styles.item}>
					<ParallaxImage
						source={{ uri: item.source }} /* the source of the image */
						containerStyle={styles.imageContainer}
						style={styles.image}
						{...parallaxProps} /* pass in the necessary props */
					/>
					<Text style={styles.title} numberOfLines={2}>
						{item.title} + {item.id}
					</Text>
				</SafeAreaView>
			</Pressable>
		);
	}, []);

	return (
		<View style={styles.container}>
			<Carousel {...settings} renderItem={CarouselItem} />
		</View>
	);
}
