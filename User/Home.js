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

export default function Home({ navigation }) {
  const [movie, setListMovie] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=e9e67b07531da1ba81ea8c928ef84b80&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    }).then((response) => {
      // console.log(response);
      setListMovie(response.data.results);
    });
  }, []);

  function image(idMovie) {
    console.log(idMovie);
    navigation.navigate("DetailMovie", {
      id: idMovie,
    });
  }

  function aboutMeNavigate() {
    navigation.navigate("AboutMe");
  }

  console.log(movie);

  return (
    <>
      <View style={{ backgroundColor: "navy", height: 200 }}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            alignSelf: "center",
            marginTop: 75,
          }}
        >
          Film Saat ini
        </Text>
        <Button title="About Me" onPress={aboutMeNavigate} />
      </View>
      <FlatList
        data={movie}
        numColumns={2}
        style={{ margin: 5, flex: 1 }}
        keyExtractor={(item, index) => item.id}
        renderItem={(item) => {
          // console.log(item.item.id);
          return (
            <View style={{ flex: 1, marginHorizontal: 20, marginBottom: 20 }}>
              <TouchableHighlight onPress={() => image(item.item.id)}>
                <Image
                  source={{
                    uri:
                      "https://image.tmdb.org/t/p/w500/" +
                      item.item.poster_path,
                  }}
                  style={{
                    height: 200,
                    width: "100%",
                  }}
                />
              </TouchableHighlight>
            </View>
          );
        }}
      />
    </>
  );
}
