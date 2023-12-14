import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Image } from "react-native";

function FindingDriverScreen(props) {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 3000);
    }, []);

    return (
        <View className="flex-1 bg-[#f9f9f9] justify-center items-center">
            <Image source={require("../assets/images/car.gif")} className="h-80 w-80" />
        </View>
    );
}

export default FindingDriverScreen;
