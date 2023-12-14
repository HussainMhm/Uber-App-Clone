import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
    return (
        <View>
            <View className="h-1/2">
                <Map />
            </View>

            <View className="h-1/2">
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} />
                    <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
                </Stack.Navigator>
            </View>
        </View>
    );
};

export default MapScreen;
