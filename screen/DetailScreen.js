import React from "react";
import { Text } from "react-native";

const DetailScreen = ({ route }) => {
	const { itemId, otherParam } = route.params;
	return (
		<Text>
			DetailScreen {itemId}:{otherParam}
		</Text>
	);
};

export default DetailScreen;
