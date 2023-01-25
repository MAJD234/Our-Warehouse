import { StatusBar, SafeAreaView, StyleSheet, Platform } from "react-native";
import { WelcomeScreen } from "./app/screens";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    abdo: require("./app/assets/fonts/bold-font.ttf"),
    kaff: require("./app/assets/fonts/i-font.otf"),
  });
  if (!fontsLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
