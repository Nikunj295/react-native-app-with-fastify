import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, SafeAreaView, StatusBar, Image, View } from "react-native";
import CustomImage from "../../components/Image/CustomImage";

const staticData = [
	{
		name: "lorem lorem12121211212",
		image:
			"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
	},
	{
		name: "lorem lorem",
		image:
			"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
	},
	{
		name: "lorem lorem",
		image:
			"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
	},
	{
		name: "lorem lorem",
		image:
			"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
	},
	{
		name: "lorem lorem",
		image:
			"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
	},
];

const Slider = ({ data = staticData, header }) => {
	return (
		<SafeAreaView style={styles.sliderContainer}>
			{header && (
				<View style={styles.header}>
					<Text>{header}</Text>
				</View>
			)}
			<ScrollView horizontal={true}>
				{data.map((item, index) => {
					return <CustomImage key={item.name + index} src={item.image} text={item.name} style={styles.imgContainer} imageStyles={styles.logo} />;
				})}
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
	logo: {
		resizeMode: "center",
		flex: 1,
		aspectRatio: 0.8, // Your aspect ratio
		padding: 0,
		borderRadius: 10,
	},
	imgContainer: {
		flexDirection: "row",
	},
});

export default Slider;
