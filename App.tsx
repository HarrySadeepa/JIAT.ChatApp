import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import SplashScreen from './src/screens/SplashScreen';
import { ThemeProvider } from './src/theme/ThemeProvider';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ContactScreen from './src/screens/ContactScreen';
import AvatarScreen from './src/screens/AvatarScreen';
import "../../global.css";

const Stack = createNativeStackNavigator();

export type RootStack = {
  SplashScreen: undefined;
  SignUpScreen: undefined;
  ContactScreen: undefined;
  AvatarScreen: undefined;
  SignInScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name='ContactScreen' component={ContactScreen} options={{ headerShown: false }} />
          <Stack.Screen name='AvatarScreen' component={AvatarScreen} options={{ headerShown: false }} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name='SettingsScreen' component={SettingsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
