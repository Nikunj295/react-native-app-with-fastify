import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomImage = ({ style = {}, imageStyles = {}, text, src }) => {
	const navigation = useNavigation();
	return (
		src && (
			<View style={defaultStyles.wrapper}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("DetailPage", {
							itemId: parseInt(86 + Math.random() * 100),
							otherParam: "anything you want here",
						});
					}}>
					<View style={style}>
						<Image source={{ uri: src }} style={imageStyles}></Image>
					</View>
					{text && <Text style={defaultStyles.title}>{text}</Text>}
				</TouchableOpacity>
			</View>
		)
	);
};

const defaultStyles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 10,
		maxWidth: "35%",
		width: "100%",
		height: "100%",
	},
	title: {
		flexWrap: "wrap",
		flexShrink: 1,
	},
});

export default CustomImage;
