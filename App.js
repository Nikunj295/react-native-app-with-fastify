//The NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import DetailScreen from "./screen/DetailScreen";
import RootScreen from "./screen/RootScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				screenOptions={({ route }) => ({
					headerShown: Boolean(route.params?.itemId?.toString()),
					title: route.params?.itemId?.toString() ?? "Detail Page",
				})}>
				<Stack.Screen name="RootScreen" component={RootScreen} />
				<Stack.Screen name="DetailPage" component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
