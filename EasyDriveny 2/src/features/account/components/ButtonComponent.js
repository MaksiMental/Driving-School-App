import React from "react";
import { Text } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonNew = ({ text }) => {
  return (
    <BlurView intensity={42} style={{ overflow: "hidden", borderRadius: 8 }}>
      <LinearGradient style={{ alignItems: "center", borderRadius: 6 }}>
        <Text
          style={{
            fontsize: 16,
            lineheight: 24,
            fontweight: 700,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 12,
            paddingTop: 12,
            alignItems: "center",
          }}
        >
          {text}
        </Text>
      </LinearGradient>
    </BlurView>
  );
};
