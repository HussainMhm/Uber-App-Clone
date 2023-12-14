import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";
import { selectTravelTimeInformation } from "./slices/navSlice";
import FindingDriverScreen from "./screens/FindingDriverScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <KeyboardAvoidingView
                        className="flex-1"
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
                    >
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="Map" component={MapScreen} />
                            <Stack.Screen name="Eats" component={EatsScreen} />
                            <Stack.Screen name="FindingDriver" component={FindingDriverScreen} />
                        </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}
