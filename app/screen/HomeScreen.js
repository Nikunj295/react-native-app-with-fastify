import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Slider from "../components/Slider/Slider";

const HomeScreen = () => {
	return (
		<ScrollView>
			<Slider header={"Top Manga"} />
			<Slider header={"Recent Manga"} />
			<Slider header={"Favorite Manga"} />
			<Slider header={"Explore Random Manga"} />
		</ScrollView>
	);
};

export default HomeScreen;
