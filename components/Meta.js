import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({
  sunrise,
  sunset,
  feels_like,
  wind_speed,
  wind_deg,
  dew_point,
  pressure,
  humidity,
  clouds,
  uvi,
  visibility
}) => {
  const getWindDeg = deg => {
    const temp = Math.floor(deg / 22.5 + 0.5);
    const degTemp = [
      "n",
      "nne",
      "ne",
      "ene",
      "e",
      "ese",
      "se",
      "sse",
      "s",
      "ssw",
      "sw",
      "wsw",
      "w",
      "wnw",
      "nw",
      "nnw"
    ];
    return degTemp[temp % 16];
  };
  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);
  return (
    <View style={styles.metaWrapper}>
      <View style={styles.metaContainer}>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>SUNRISE</Text>
          <Text style={styles.metaContent}>
            {sunriseTime.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true
            })}
          </Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>SUNSET</Text>
          <Text style={styles.metaContent}>
            {sunsetTime.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true
            })}
          </Text>
        </View>
      </View>
      <View style={styles.metaContainer}>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>CLOUDS</Text>
          <Text style={styles.metaContent}>
            {clouds}%
          </Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>HUMIDITY</Text>
          <Text style={styles.metaContent}>
            {humidity}%
          </Text>
        </View>
      </View>
      <View style={styles.metaContainer}>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>DEW POINT</Text>
          <Text style={styles.metaContent}>
            {Math.round(dew_point)}º
          </Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>PRESSURE</Text>
          <Text style={styles.metaContent}>
            {pressure} atm
          </Text>
        </View>
      </View>
      <View style={styles.metaContainer}>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>WIND</Text>
          <Text style={styles.metaContent}>
            {getWindDeg(wind_deg)} {wind_speed} m/s
          </Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.metaTitle}>FEELS LIKE</Text>
          <Text style={styles.metaContent}>
            {Math.round(feels_like)}º
          </Text>
        </View>
      </View>
      <View style={styles.metaContainer}>
        <View style={styles.lastMeta}>
          <Text style={styles.metaTitle}>VISIBLITY</Text>
          <Text style={styles.metaContent}>
            {visibility / 1000} km
          </Text>
        </View>
        <View style={styles.lastMeta}>
          <Text style={styles.metaTitle}>UV INDEX</Text>
          <Text style={styles.metaContent}>
            {Math.floor(uvi)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metaContainer: {
    flexDirection: "row",
    paddingHorizontal: 15
  },
  meta: {
    flex: 1,
    paddingVertical: 7,
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
    borderStyle: "solid",
    borderBottomWidth: 1
  },
  lastMeta: {
    flex: 1,
    paddingVertical: 7
  },
  metaTitle: {
    color: "#fff",
    fontWeight: "200",
    fontSize: 12
  },
  metaContent: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 22,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 0
    }
  }
});
