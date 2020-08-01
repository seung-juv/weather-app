import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#262626" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});
