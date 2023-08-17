import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Section = () => {
  const handleButtonPress = (type) => {
    // Handle button press based on type (e.g., navigate to specific screen)
    console.log("Button Pressed: ", type);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#008000" }]}
        onPress={() => handleButtonPress("forex")}
      >
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons
            name="currency-usd"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Forex</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#800080" }]}
        onPress={() => handleButtonPress("owl")}
      >
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons
            name="owl"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Owl</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FFA500" }]}
        onPress={() => handleButtonPress("coin")}
      >
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons
            name="bitcoin"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Coin</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#DAA520" }]}
        onPress={() => handleButtonPress("gold")}
      >
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons
            name="gold"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Gold</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  button: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    elevation: 2,
  },
  buttonContent: {
    alignItems: "center",
  },
  icon: {
    marginBottom: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default Section;
