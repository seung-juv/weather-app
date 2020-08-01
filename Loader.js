import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.weatherWrapper}>
        <ActivityIndicator color="#262626" size="large" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Getting the fucking weather</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDF6AA"
  },

  weatherWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  textWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#333",
    fontSize: 24
  }
});
