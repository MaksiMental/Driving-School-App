import React from "react";
import { OnboardingSwiper } from "../components/onboardingswiper";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  Spacer,
} from "../components/account.styles";
import { StyleSheet, View } from "react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <OnboardingSwiper />
      <View style={styles.container}>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer />
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </AccountContainer>
      </View>
    </AccountBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 300,
  },
});
