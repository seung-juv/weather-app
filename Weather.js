import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Meta from "./components/Meta";
import HourlyWeather from "./components/HourlyWeather";
import DailyWeather from "./components/DailyWeather";
import Proptypes from "prop-types";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { Video } from "expo-av";

const Weather = ({ name, current, current: { weather, temp }, hourly, daily }) => {
  const condition = weather[0].main;
  const nowDate = new Date();
  const nowDay = day => {
    const weekTemp = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekTemp[day];
  };

  return (
    <View style={styles.container}>
      <Video
        source={
          condition == "Drizzle" || condition == "Rain"
            ? require(`./assets/weather/rainy.mp4`)
            : condition == "Snow"
              ? require(`./assets/weather/snow.mp4`)
              : condition == "Mist" ||
                condition == "Smoke" ||
                condition == "Haze" ||
                condition == "Dust" ||
                condition == "Fog" ||
                condition == "Sand"
                ? require(`./assets/weather/dust.mp4`)
                : condition == "Ash" || condition == "Squall" || condition == "Tornado"
                  ? require(`./assets/weather/cloudy.mp4`)
                  : condition == "Clear" && require(`./assets/weather/sunny.mp4`)
        }
        style={styles.backgroundVideo}
        shouldPlay
        resizeMode={"cover"}
        isMuted={true}
        isLooping={true}
      />
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
        <ScrollView style={styles.hourlyContainer} horizontal={true}>
          {hourly.slice(0, 24).map(hourly => <HourlyWeather key={hourly.dt} {...hourly} />)}
        </ScrollView>
        <View style={styles.dailyContainer}>
          {daily.slice(1, 8).map(daily => <DailyWeather key={daily.dt} {...daily} />)}
        </View>
        <Meta {...current} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
    opacity: 0.5
  },
  container: {
    flex: 1,
    backgroundColor: "#292929",
    ...ifIphoneX(
      {
        paddingTop: 125,
        paddingBottom: 35
      },
      {
        paddingTop: 75,
        paddingBottom: 15
      }
    )
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  name: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 7
  },
  condition: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 7
  },
  temp: {
    color: "#fff",
    fontWeight: "200",
    fontSize: 120,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 7
  },
  todayContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "flex-start",
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: "flex-end"
  },
  hourlyContainer: {
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 15
  },
  dailyContainer: {
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 7
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
