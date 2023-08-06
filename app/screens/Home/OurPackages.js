import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../theme/color";
import style from "../../theme/style";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const OurPackages = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <Text style={style.subtitle}>Our Packages</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("PackageDetail")}
            >
              <ImageBackground
                source={require("../../assets/image/Card.png")}
                resizeMode="stretch"
                style={{
                  width: width / 1.8,
                  height: height / 4,
                  padding: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../../assets/image/Coin.png")}
                    resizeMode="stretch"
                    style={{ width: width / 7.5, height: height / 17 }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={style.subtxt}>Bitcoin</Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        style.subtxt,
                        {
                          paddingVertical: 5,
                          paddingHorizontal: 10,
                          marginHorizontal: 5,
                          borderRadius: 20,
                          backgroundColor: "#FF6838",
                          color: Colors.secondary,
                        },
                      ]}
                    >
                      -0.79%
                    </Text>
                  </View>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={[style.logintitle, { fontSize: 22 }]}>
                    $36,641.20
                  </Text>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={style.subtxt}>BTC</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("PackageDetail")}
            >
              <ImageBackground
                source={require("../../assets/image/Card1.png")}
                resizeMode="stretch"
                style={{
                  width: width / 1.8,
                  height: height / 4,
                  padding: 20,
                }}
              >
                <View>
                  <Image
                    source={require("../../assets/image/Coin1.png")}
                    resizeMode="stretch"
                    style={{ width: width / 7.5, height: height / 17 }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={style.subtxt}>Ethereum</Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        style.subtxt,
                        {
                          paddingVertical: 5,
                          paddingHorizontal: 10,
                          marginHorizontal: 5,
                          borderRadius: 20,
                          backgroundColor: "#58BD7D",
                          color: Colors.secondary,
                        },
                      ]}
                    >
                      +1.32%
                    </Text>
                  </View>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={[style.logintitle, { fontSize: 22 }]}>
                    $28,312.20
                  </Text>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={style.subtxt}>ETH</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default OurPackages;
