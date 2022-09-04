import { Dimensions, StyleSheet, Platform } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
		paddingBottom: 30,
	},
	title: {
		fontSize: 18,
		paddingLeft: 40,
		paddingRight: 40,
		marginTop: 5,
	},
	item: {
		width: "100%",
		height: screenWidth, //height will be 20 units less than screen width.
	},
	imageContainer: {
		flex: 1,
		borderRadius: 5,
		marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
	},
	image: {
		...StyleSheet.absoluteFillObject,
		resizeMode: "contain",
	},
});

export default styles;
