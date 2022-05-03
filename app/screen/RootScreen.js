import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile";

const Tab = createBottomTabNavigator();

export default function RootScreen() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={ProfileScreen} />
		</Tab.Navigator>
	);
}
