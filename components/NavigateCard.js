import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

import NavFavorites from "./NavFavorites";

const GOOGLE_MAPS_APIKEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white flex-1">
            <Text className="text-center py-5 text-xl ">Good Morning, Hussain</Text>

            <View className="border-t border-gray-200 flex-shrink">
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        styles={toInputBoxStyles}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en",
                        }}
                        minLength={2}
                        enablePoweredByContainer={false}
                        returnKeyType={"search"}
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                })
                            );

                            navigation.navigate("RideOptionsCard");
                        }}
                    />
                </View>

                <NavFavorites />
            </View>

            <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
                <TouchableOpacity
                    className="flex-row bg-black justify-between w-24 px-4 py-3 rounded-full"
                    onPress={() => navigation.navigate("RideOptionsCard")}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text className="text-white text-center">Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-row justify-between w-24 px-4 py-3 rounded-full">
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                    <Text className="text-black text-center">Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
        borderRadius: 20,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
