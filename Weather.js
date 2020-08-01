import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Proptypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Weather = ({ main: { temp }, weather, name }) => {
  const condition = weather[0].main;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.condition}>
        {condition}
      </Text>
      <Text style={styles.temp}>
        {Math.round(temp)}º
      </Text>
    </View>
  );
};

Weather.Proptypes = {
  temp: Proptypes.number.isRequired,
  weather: Proptypes.arrayOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ]).isRequired,
  name: Proptypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929"
  },
  name: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 24
  },
  condition: {
    color: "#fff",
    fontWeight: "300"
  },
  temp: {
    color: "#fff",
    fontWeight: "200",
    fontSize: 95
  }
});

export default Weather;
