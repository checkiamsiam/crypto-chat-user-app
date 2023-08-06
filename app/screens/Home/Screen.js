import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import HomeHeader from "../../layouts/HomeHeader";
import style from "../../theme/style";
import CurrentWallet from "./CurrentWallet";
import OurPackages from "./OurPackages";
import PackageDayCount from "./PackageDayCount";
import StatusButtonsSection from "./StatusButtons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={style.area}>
      <View style={[style.main, { paddingBottom: 60 }]}>
        <HomeHeader />

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <CurrentWallet />
          <OurPackages />
          <PackageDayCount />
          <StatusButtonsSection />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
