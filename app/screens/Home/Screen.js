import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import HomeHeader from "../../layouts/HomeHeader";
import style from "../../theme/style";

export default function HomeScreen() {
  return (
    <SafeAreaView style={style.area}>
      <View style={style.main}>
        <HomeHeader />

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
}
