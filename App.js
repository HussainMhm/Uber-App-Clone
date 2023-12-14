import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./store";

export default function App() {
    return (
        <Provider store={store}>
            <View className="flex-1 justify-center items-center">
                <Text className="text-3xl text-black">Uber App</Text>
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}
