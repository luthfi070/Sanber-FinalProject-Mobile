import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";
import { Link } from "@react-navigation/native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const colors = {
  primary: "#517DA2",
  secondary: "#4EA4EA",
  caption: "#A8AAAB",
};

export default function AboutMe({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar
            style="light"
            translucent={false}
            backgroundColor={colors.primary}
          />
          <Image style={styles.logo} source={require("../assets/login.png")} />
          <Text style={styles.title}>Luthfi Fitra Musyaffa</Text>
          <Card>
            <Card.Cover
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C5603AQHKzTbHwatolg/profile-displayphoto-shrink_400_400/0/1619162498784?e=1672272000&v=beta&t=J5Q1Dil4GOqMGv4eUEeNIey_HzKUFqjNx1p4zdsNvQo",
              }}
            />
          </Card>
          <Card style={styles.card}>
            <Card.Title title="Informasi" />
            <Text style={styles.cardContent}>Luthfi Fitra Musyaffa</Text>
            <Text style={styles.cardContent}>Skill</Text>
            <Text
              style={{
                marginTop: 20,
                marginLeft: 15,
                marginBottom: 15,
                fontSize: 15,
              }}
            >
              Javacript, ReactJS, Express, NodeJS, Database
            </Text>
          </Card>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "https://sponge-berry-1f9.notion.site/Luthfi-Portfolio-96bb989840e741b5948dfc43e956836a"
              )
            }
          >
            <Text style={styles.textButton}>Portofolio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginTop: 10,
    marginLeft: 15,
    width: "50%",
    height: 70,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    color: "Black",
    paddingHorizontal: 20,
  },
  cardContent: {
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 25,
  },
  title: {
    marginTop: 15,
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 25,
  },
  card: {
    marginTop: 15,
  },
  button: {
    borderRadius: 15,
    height: 40,
    width: 300,
    backgroundColor: "#003366",
    marginTop: 15,
    marginLeft: 25,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
  },
});
