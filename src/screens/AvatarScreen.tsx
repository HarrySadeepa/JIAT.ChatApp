import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStack } from '../../App';
import * as ImagePicker from 'expo-image-picker';
import { red } from 'react-native-reanimated/lib/typescript/Colors';


export default function AvatarScreen() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const avatars = [
        require('../../assets/avatars/avatar_1.png'),
        require('../../assets/avatars/avatar_2.png'),
        require('../../assets/avatars/avatar_3.png'),
    ];

    return (
        <SafeAreaView className='flex-1 bg-white-100'>
            <StatusBar hidden={true} />
            <View className='flex-1 items-center bg-red-100'>
                <View>
                    <Image
                        source={require('../../assets/logo.png')}
                        className='h-40 w-36'
                    />
                </View>
                <View className='items-center'>
                    <Text className='font-bold text-lg text-state-700'>
                        Choose a profile image
                    </Text>
                    <View className='items-center mt-2 h-72'>
                        <Pressable className='h-[120] w-[120] rounded-full bg-gray-100 justify-center items-center border-2 border-gray-400 border-dashed'
                            onPress={pickImage}>
                            {image ? (
                                <Image source={{ uri: image }} className='h-[120] w-[120] rounded-full' />
                            ) : (
                                <View className='items-center'>
                                    <Text className='font-bold text-2xl text-state-500'>+</Text>
                                    <Text className='font-bold text-lg text-state-500'>Add Image</Text>
                                </View>
                            )}
                        </Pressable>
                        <Text className="text-lg my-2 text-slate-700 font-bold">Or select an avatar</Text>
                        <FlatList data={avatars} horizontal
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => setImage(Image.resolveAssetSource(item).uri)}>
                                    <Image source={item} className='h-20 w-20 rounded-full mx-2 border-2 border-gray-200' />
                                </TouchableOpacity>
                            )}
                            contentContainerStyle={{ paddingHorizontal: 10 }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View className='mt-2 w-full px-5'>
                    <Pressable className='h-14 bg-green-500 items-center justify-center rounded-full'>
                        <Text className='font-bold text-lg text-slate-50'>Create Account</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}