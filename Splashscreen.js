import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
  TouchableHighlight,
} from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  });

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Image
        source={require("./assets/login.png")}
        style={{ width: 408, height: 161, marginTop: 100 }}
      />
      <Text>Final Project @Sanber Code</Text>
      <Text>Luthfi Fitra Musyaffa</Text>
    </View>
  );
}
