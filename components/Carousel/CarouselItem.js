import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import styles from "../../styles";
import { useNavigation } from "@react-navigation/native";

function CarouselItem({ item, index, navigation }, parallaxProps) {
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
}

export default CarouselItem;
