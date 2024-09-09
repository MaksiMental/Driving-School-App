import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { OnboardingSwiper } from "../components/onboardingswiper";
import { PressableScale } from "../components/hoverbutton";
import { AuthButton, Spacer } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <>
      <OnboardingSwiper />
      <View styles={styles.container}>
        <View styles={styles.container2}>
          <View styles={styles.container3}>
            <View styles={styles.container4}>
              <View styles={styles.container5}>
                <View styles={styles.container6}>
                  <PressableScale
                    animate={useMemo(
                      () => (interaction) => {
                        "worklet";

                        return {
                          opacity: interaction.pressed ? 0.95 : 1,
                        };
                      },
                      []
                    )}
                    onPress={() => navigation.navigate("Login")}
                  />
                  <AuthButton
                    icon=""
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                  >
                    Login
                  </AuthButton>
                  <Spacer />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  container3: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  container4: {
    marginBottom: 80,
  },
  container5: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container6: {
    flexBasis: "40%",
  },
});
