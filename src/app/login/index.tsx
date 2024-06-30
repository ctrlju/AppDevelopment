import React from "react";
import { SafeAreaView, Text, Pressable, View, TextInput } from "react-native";
import { router } from "expo-router";

import GoBack from "@/src/assets/images/back-arrow.svg";
import PasswordLock from "@/src/assets/images/password-lock.svg";
import GoogleLogin from "@/src/assets/images/google.svg";
import AppleLogin from "@/src/assets/images/apple.svg";
import FacebookLogin from "@/src/assets/images/facebook.svg";

import styles from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <View>
          <View>
            <Pressable
              onPress={() => router.back()}
              style={styles.backArrowContainer}
            >
              <GoBack width={23} />
            </Pressable>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Let's sign you in.</Text>
            <Text style={styles.subtitle}>Welcome back</Text>
            <Text style={styles.subtitle}>You've been missed!</Text>
          </View>
          <View style={styles.textInputContainer}>
            <PasswordLock width={15} style={styles.passwordIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email, phone or username"
              placeholderTextColor="#737b89"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#737b89"
              secureTextEntry
            />
          </View>
          <View style={styles.loginMethodsContainer}>
            <View style={styles.loginMethodsDivider} />
            <Text style={styles.loginMethodsText}>OR</Text>
            <View style={styles.loginMethodsDivider} />
          </View>
          <View style={styles.loginIconsContainer}>
            <GoogleLogin width={23} height={23} />
            <FacebookLogin width={23} height={23} />
            <AppleLogin width={23} height={23} />
          </View>
        </View>
        <View style={styles.signInOrRegisterContainer}>
          <Text style={styles.noAccountText}>
            Don't have an account?{" "}
            <Text style={styles.registerText}>Register</Text>
          </Text>
          <Pressable style={styles.signInButtonContainer}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
