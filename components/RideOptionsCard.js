import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    },
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

    return (
        <SafeAreaView className="bg-white flex-grow">
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    className="absolute top-3 left-5 p-3 rounded-full z-50"
                >
                    <Icon name="chevron-left" type="font-awesome" />
                </TouchableOpacity>
                <Text className="text-center text-xl py-5">Select a Ride</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className={
                            "flex-row items-center justify-between px-10 " +
                            (selected?.id === item.id && "bg-gray-200")
                        }
                        onPress={() => setSelected(item)}
                    >
                        <Image
                            style={{
                                width: 90,
                                height: 90,
                                resizeMode: "contain",
                            }}
                            source={{ uri: item.image }}
                        />
                        <View>
                            <Text className="text-xl font-semibold">{item.title}</Text>
                            <Text>Travel time...</Text>
                        </View>
                        <Text className="text-xl">$99</Text>
                    </TouchableOpacity>
                )}
            />

            <View>
                <TouchableOpacity
                    disabled={!selected}
                    className={"bg-black py-3 my-3 mx-5 " + (!selected && "bg-gray-300")}
                >
                    <Text className="text-center text-white text-lg">Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard;
