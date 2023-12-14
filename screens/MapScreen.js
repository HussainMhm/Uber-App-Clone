import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                className="bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg"
                onPress={() => navigation.navigate("Home")}
            >
                <Icon name="menu" />
            </TouchableOpacity>

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
