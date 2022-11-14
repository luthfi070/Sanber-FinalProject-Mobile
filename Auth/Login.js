import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginAuth() {
    console.log(username);
    if (username && password == "sanber") {
      navigation.navigate("Home");
    } else {
      Alert.alert("Salah");
    }
  }

  return (
    <>
      <StatusBar style="light" translucent={false} />
      <View>
        <Image
          source={require("../assets/login.png")}
          style={{ width: 408, height: 161, marginTop: 100 }}
        />
        <Text> Username </Text>
        <TextInput
          placeholder="Masukan Username"
          onChangeText={setUsername}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Text> Password </Text>
        <TextInput
          placeholder="Masukan Password"
          onChangeText={setPassword}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Button
          title="Login"
          onPress={loginAuth}
          style={{
            margin: 12,
          }}
        />
        <Text>*username n pass = sanber</Text>
      </View>
    </>
  );
}
