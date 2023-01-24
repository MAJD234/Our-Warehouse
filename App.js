import {
  StatusBar,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import { WelcomeScreen } from "./app/screens";
export default function App() {
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
