import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";

import NavOptions from "../components/NavOptions";
import { setDestination, setOrigin } from "../slices/navSlice";

// secret key
const GOOGLE_MAPS_APIKEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="p-3">
                {/* Uber Logo */}
                <Image
                    style={{
                        marginLeft: 10,
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{ uri: "https://links.papareact.com/gzs" }}
                />

                {/* Ride Start Place */}
                <GooglePlacesAutocomplete
                    placeholder="Where From?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            })
                        );

                        // Reset destination to null
                        dispatch(setDestination(null));
                    }}
                    debounce={400}
                    minLength={2}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
                />

                {/* App Navigation Options */}
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
