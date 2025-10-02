import { Image, KeyboardAvoidingView, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeProvider';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStack } from '../../App';
import { useNavigation } from '@react-navigation/native';

type SignUpProps = NativeStackNavigationProp<RootStack, "SignUpScreen">;

export default function SignUpScreen() {

  const navigation = useNavigation<SignUpProps>();

  const [firstName, setFirstName] = useState("");
  const { applied } = useTheme();
  const logo =
    applied === "dark"
      ? require("../../assets/logo.png")
      : require("../../assets/logo.png");
  return (

    <AlertNotificationRoot>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className='flex-1 justify-center items-center'>
        <SafeAreaView className='justify-center items-center p-5'>
          <StatusBar hidden={true}></StatusBar>
          <Image source={logo} className="h-40 w-36" />
          <View className='w-full justify-start items-start'>
            <Text className='font-bold text-slate-500 dark:text-slate-100'>Create your account and start the conversation TODAY</Text>
          </View>
          <View className='w-full my-3'>
            <FloatingLabelInput
              value={firstName}
              onChangeText={setFirstName}
              label={"Enter your First name"}
              labelStyles={{ color: 'red' }}
            />
          </View>
          <View className='w-full my-3'>
            <FloatingLabelInput label={"Enter your Last name"} />
          </View>
        </SafeAreaView>
        <View className='mt-1 w-full p-5'>
          <Pressable className='bg-sky-600 h-14 justify-center items-center rounded-xl' onPress={() => { navigation.replace("ContactScreen") }}>
            <Text className='text-slate-100 dark:text-slate-10O font-bold text-2xl'>Next</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </AlertNotificationRoot>
  );
}