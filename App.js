import React, { useState } from "react";
import Loader from "./Loader";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const getLocation = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status) {
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        setIsLoading(false);
      } else {
        Alert.alert("We need location permission");
      }
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  getLocation();
  return isLoading ? <Loader /> : null;
};
