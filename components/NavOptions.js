import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "Map",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "Eats",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
                    onPress={() => navigation.navigate(item.screen)}
                    disabled={!origin}
                >
                    <View style={{ opacity: origin ? 1 : 0.2 }}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                        <Icon
                            name="arrowright"
                            type="antdesign"
                            color="white"
                            style={{
                                padding: 8,
                                backgroundColor: "black",
                                borderRadius: 100,
                                width: 40,
                                marginTop: 12,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
