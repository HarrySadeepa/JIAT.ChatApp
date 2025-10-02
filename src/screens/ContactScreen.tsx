import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, StatusBar, Text, TextInput, View } from "react-native";
import CountryPicker, { Country, CountryCode } from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStack } from "../../App";

type ContactProps = NativeStackNavigationProp<RootStack, "ContactScreen">;

export default function ContactScreen() {
    const navigation = useNavigation<ContactProps>();

    const [countryCode, setCountryCode] = useState<CountryCode>("LK"); // Default country code
    const [country, setCountry] = useState<Country | null>(null);
    const [show, setShow] = useState<boolean>(false);
    return (
        <SafeAreaView className="flex-1 bg-red-100 items-center">
            <StatusBar hidden={true} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "android" ? 100 : 100}
            >
                <View className="p-5 items-center">
                    <View>
                        <Image source={require("../../assets/logo.png")} className="h-40 w-36" />
                    </View>
                    <View>
                        <Text className="text-slate-600 font-bold">We use your contacts to help you find friends who are already on the app.</Text>
                    </View>
                    <View className="mt-5 w-full">
                        <View className="border-b-2 border-b-green-600 justify-center items-center flex-row h-14 my-3">
                            <CountryPicker
                            countryCode={countryCode}
                            withFilter
                            withFlag
                            withCountryNameButton
                            withCallingCode
                            visible={show}
                            onClose={() => { setShow(false); }}
                            onSelect={(c)=>{
                                setCountryCode(c.cca2);
                                setCountry(c);
                                setShow(false);
                            }}
                        />
                        </View>
                        <Pressable className="bg-red-100 w-full justify-center items-center h-16 border-b-4 border-b-green-600" onPress={() => { setShow(true) }}>
                            <Text className="font-bold text-lg">Select Country <AntDesign name="caret-down" size={18} color="black" style={{ marginTop: 5 }} /> </Text>
                        </Pressable>

                        <View className="mt-2 flex flex-row justify-center">
                            <TextInput inputMode="tel" className="h-12 font-bold text-lg border-y-4 border-y-gray-600 x-[18%]" placeholder="+94" editable={false} value={country?`+${country.callingCode}`:`+94`} />
                            <TextInput inputMode="tel" className="h-12 font-bold text-lg border-y-4 border-y-gray-600 x-[80%] ml-2" placeholder="77 XXX XXXX" />
                        </View>
                    </View>
                </View>
                <View className="absolute bg-red-100 bottom-4">
                    <Pressable className="justify-center items-center bg-green-600 w-full h-14 rounded-full"
                        onPress={() => {
                            navigation.replace("AvatarScreen");
                        }}>
                        <Text className="text-2xl font-bold text-slate-50">Next</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}