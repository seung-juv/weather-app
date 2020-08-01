import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Proptypes from "prop-types";

const DailyWeather = ({ dt, weather, temp }) => {
  const date = new Date(dt * 1000);
  const { main } = weather[0];
  const nowDay = day => {
    const weekTemp = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekTemp[day];
  };
  const getIcon = name => {
    if (Platform.OS == "ios") {
      switch (name) {
        case "Thunderstorm":
          return "ios-thunderstorm";
          break;
        case "Drizzle":
          return "ios-rainy";
          break;
        case "Rain":
          return "ios-rainy";
          break;
        case "Snow":
          return "ios-snow";
          break;
        case "Mist":
          return "ios-cloudy";
          break;
        case "Smoke":
          return "ios-cloudy";
          break;
        case "Haze":
          return "ios-cloudy";
          break;
        case "Dust":
          return "ios-cloudy";
          break;
        case "Fog":
          return "ios-cloudy";
          break;
        case "Sand":
          return "ios-cloudy";
          break;
        case "Ash":
          return "ios-cloudy";
          break;
        case "Squall":
          return "ios-cloudy";
          break;
        case "Tornado":
          return "ios-cloudy";
          break;
        case "Clear":
          return "ios-sunny";
          break;
        case "Clouds":
          return "ios-cloudy";
          break;
        default:
          return null;
          break;
      }
    } else {
      switch (name) {
        case "Thunderstorm":
          return "md-thunderstorm";
          break;
        case "Drizzle":
          return "md-rainy";
          break;
        case "Rain":
          return "md-rainy";
          break;
        case "Snow":
          return "md-snow";
          break;
        case "Mist":
          return "md-cloudy";
          break;
        case "Smoke":
          return "md-cloudy";
          break;
        case "Haze":
          return "md-cloudy";
          break;
        case "Dust":
          return "md-cloudy";
          break;
        case "Fog":
          return "md-cloudy";
          break;
        case "Sand":
          return "md-cloudy";
          break;
        case "Ash":
          return "md-cloudy";
          break;
        case "Squall":
          return "md-cloudy";
          break;
        case "Tornado":
          return "md-cloudy";
          break;
        case "Clear":
          return "md-sunny";
          break;
        case "Clouds":
          return "md-cloudy";
          break;
        default:
          return null;
          break;
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.day}>
        {nowDay(date.getDay())}
      </Text>
      <View style={styles.icon}>
        <Ionicons name={getIcon(main)} size={24} color="#fff" />
      </View>
      <View style={styles.tempContainer}>
        <Text style={styles.maxTemp}>
          {Math.floor(temp.max)}
        </Text>
        <Text style={styles.minTemp}>
          {Math.floor(temp.min)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 1
  },
  day: {
    color: "#fff",
    fontSize: 16,
    flex: 1
  },
  icon: {
    flex: 1,
    alignItems: "center"
  },
  tempContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  maxTemp: {
    color: "#fff",
    fontSize: 16,
    marginRight: 15
  },
  minTemp: {
    color: "#acacac",
    fontSize: 16
  }
});

DailyWeather.Proptypes = {
  main: Proptypes.arrayOf([
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
  ]).isRequired
};

export default DailyWeather;
