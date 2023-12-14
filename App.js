import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-3xl text-black">Uber App</Text>
            <StatusBar style="auto" />
        </View>
    );
}
