import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { View } from "react-native";
import styles from "../../styles";
import CarouselItem from "./CarouselItem";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function CustomSlider({ data }) {
	const navigation = useNavigation();
	if (!data || !data?.length) return null;
	const settings = {
		sliderWidth: width,
		sliderHeight: width,
		itemWidth: width - 80,
		data: data,
		renderItem: (props) => <CarouselItem navigation={navigation} {...props} />,
		hasParallaxImages: true,
	};
	return (
		<View style={styles.container}>
			<Carousel {...settings} />
		</View>
	);
}
