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

export default function DetailMovie({ route }) {
  const { id } = route.params;
  const [movieDetail, setMovieDetail] = useState([]);
  const [companyDetail, setCompany] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=e9e67b07531da1ba81ea8c928ef84b80&language=en-US`,
    }).then((response) => {
      // console.log(response);
      setMovieDetail(response.data);
      setCompany(response.data.production_companies[0]);
    });
  }, []);

  console.log(companyDetail.logo_path);
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
          {movieDetail.title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center", // ignore this - we'll come back to it
          justifyContent: "center", // ignore this - we'll come back to it
          flexDirection: "row",
          marginTop: -100,
          marginLeft: -40,
        }}
      >
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path,
          }}
          style={{
            height: "55%",
            width: "45%",
          }}
        />
        <View style={{ marginLeft: 15 }}>
          {movieDetail.status == "Released" ? (
            <Button title="On Theater" />
          ) : (
            <Button title="Coming Soon" color="yellow">
              Coming Soon
            </Button>
          )}
          <Text style={{ marginTop: 10 }}>Relase Date :</Text>
          <Text style={{ marginTop: 2 }}>{movieDetail.release_date}</Text>
          <Text style={{ marginTop: 10 }}>{movieDetail.runtime} minutes</Text>
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500/" + companyDetail.logo_path,
            }}
            style={{
              height: "5%",
            }}
          />
        </View>
      </View>
      <Text style={{ marginTop: -100, marginLeft: 18 }}>
        {movieDetail.overview}
      </Text>
    </>
  );
}
