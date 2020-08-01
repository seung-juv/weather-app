import React from "react";
import Loader from "./Loader";
import * as Location from "expo-location";

export default () => {
  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  getLocation();
  return <Loader />;
};
