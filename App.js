import React, { useState } from "react";
import Loader from "./Loader";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "1d9b1f306da5bf7299871338be75b327";

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  };
  const getLocation = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status) {
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        setIsLoading(false);
        getWeather(latitude, longitude);
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
