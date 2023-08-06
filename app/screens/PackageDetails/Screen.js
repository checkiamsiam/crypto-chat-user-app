import { AppBar } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../theme/color";
import style from "../../theme/style";
import ScreenHeader from "../../layouts/ScreenHeader";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function PackageDetailScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.area}>
      <View style={style.main}>
        <ScreenHeader title="Package Detail" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View style={{ marginVertical: 20 }}>
            <View style={{}}>
              <ImageBackground
                source={require("../../assets/image/Card3.png")}
                resizeMode="stretch"
                style={{
                  height: height / 4.5,
                  paddingHorizontal: 20,
                  width: width - 40,
                  paddingVertical: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={require("../../assets/image/Coin1.png")}
                      resizeMode="stretch"
                      style={{ width: width / 7.5, height: height / 17 }}
                    />
                    <View style={{ marginHorizontal: 10 }}>
                      <Text style={style.txt}>Ethereum Price</Text>
                    </View>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#58BD7D",
                        borderRadius: 20,
                        paddingVertical: 4,
                        paddingHorizontal: 7,
                      }}
                    >
                      <Icon
                        name="caret-up-outline"
                        color={Colors.secondary}
                        size={15}
                      />
                      <Text style={[style.subtxt, { color: Colors.secondary }]}>
                        {" "}
                        +20%
                      </Text>
                    </View>
                    <Text
                      style={[
                        style.subtxt,
                        { color: "#58BD7D", textAlign: "center", marginTop: 5 },
                      ]}
                    >
                      +0.9%
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={[style.title]}>$28,312.16</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Text style={style.subtxt}>High:</Text>
                  <Text style={[style.subtxt, { color: "#58BD7D" }]}>
                    {" "}
                    $40,437
                  </Text>
                  <View style={{ padding: 10 }} />
                  <Text style={style.subtxt}>Low:</Text>
                  <Text style={[style.subtxt, { color: "#E8503A" }]}>
                    {" "}
                    $12,367
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 30, marginBottom: 20 }}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("BuyBitcoin")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
