import React from "react";
import { View } from "react-native";
import VideoComponent from "../components/videoComponent";
import Swiper from "react-native-swiper";

export const OnboardingSwiper = ({ children }) => {
  return (
    <View>
      <Swiper
        dot={
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#454545",
              borderRadius: 6,
              marginLeft: 8,
              marginRight: 8,
              bottom: 20,
            }}
          />
        }
        activeDot={
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#ffffff",
              borderRadius: 6,
              marginLeft: 8,
              marginRight: 8,
              bottom: 20,
            }}
          />
        }
        loop={false}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}>
          <VideoComponent source={require("../../../../assets/ferrari.mp4")} />
        </View>
        <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0)" }}>
          <VideoComponent source={require("../../../../assets/lambo.mp4")} />
        </View>
      </Swiper>
      {children}
    </View>
  );
};
