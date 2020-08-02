import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HourlyWeather = ({ dt, weather, temp, pop }) => {
  const date = new Date(dt * 1000);
  const hour = date
    .toLocaleString("en-US", {
      hour: "numeric",
      hour12: true
    })
    .split(" ");
  const { main } = weather[0];
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
      <View style={styles.timeContainer}>
        <View style={styles.hour}>
          <Text style={styles.time}>
            {hour[0]}
          </Text>
          <Text style={styles.unit}>
            {hour[1]}
          </Text>
        </View>
        {main == "Rain" &&
          <Text style={styles.chance}>
            {Math.round(Math.ceil(pop * 100) / 10) * 10}%
          </Text>}
      </View>
      <View style={styles.icon}>
        <Ionicons name={getIcon(main)} size={24} color="#fff" />
      </View>
      <Text style={styles.temp}>
        {Math.floor(temp)}º
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: "center"
  },
  timeContainer: {
    minHeight: 40,
    alignItems: "center"
  },
  hour: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  time: {
    color: "#fff",
    fontSize: 16
  },
  unit: {
    color: "#fff",
    fontSize: 12
  },
  chance: {
    color: "#7bc0ff"
  },
  icon: {
    marginBottom: 10
  },
  temp: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  }
});

export default HourlyWeather;
