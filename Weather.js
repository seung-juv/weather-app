import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Proptypes from "prop-types";

const Weather = ({ main: { temp } }) => {
  console.log(temp);
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>
        {Math.round(temp)}
      </Text>
    </View>
  );
};

Weather.Proptypes = {
  temp: Proptypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {}
});

export default Weather;
