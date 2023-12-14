import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const EatsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-white justify-center items-center">
            <Text className="text-3xl mb-10">Coming Soon!</Text>
            <Button title="Back" onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

export default EatsScreen;
