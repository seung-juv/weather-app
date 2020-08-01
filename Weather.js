import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Proptypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import Meta from "./Meta";

const Weather = ({ name, current, current: { weather, temp } }) => {
  const condition = weather[0].main;
  const nowDate = new Date();
  const nowDay = day => {
    const weekTemp = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
    return weekTemp[day];
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
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
      <ScrollView>
        <View style={styles.todayContainer}>
          <Text style={styles.day}>
            {nowDay(nowDate.getDay())}
          </Text>
          <Text style={styles.today}>TODAY</Text>
        </View>
        <Meta {...current} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    paddingTop: 75
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35
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
  },
  todayContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "flex-start",
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 7,
    alignItems: "flex-end"
  },
  day: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
    marginRight: 7
  },
  today: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 12
  }
});

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

export default Weather;
