import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white">
            <View className="p-5">
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{ uri: "https://links.papareact.com/gzs" }}
                />
            </View>

            <NavOptions />
        </SafeAreaView>
    );
};

export default HomeScreen;
