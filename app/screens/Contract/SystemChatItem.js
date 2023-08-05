import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import icon from "../../assets/image/Coin.png";
import { Colors } from "../../theme/color";

const SystemChatItem = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={index}
      onPress={() =>
        navigation.navigate("Chat", {
          chatMode: item.chatMode,
          packageName: item.packageName,
        })
      }
      style={[
        {
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          borderBottomColor: Colors.border,
          borderBottomWidth: 1,
        },
      ]}
    >
      <View
        style={{
          paddingVertical: 15,
          marginRight: 22,
        }}
      >
        <Image
          source={item?.chatMode ? icon : icon}
          resizeMode="contain"
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 18,
              lineHeight: 20,
              marginBottom: 4,
            }}
          >
            {item?.chatMode === "admin"
              ? "CryptoChat Admin"
              : item?.packageName}
          </Text>
          <AntDesign name="checkcircle" color={Colors.primary} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <Text style={{ fontSize: 14, color: Colors.disable }}>
            {item?.lastMessage.slice(0, 20) + "..."}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.disable,
            }}
          >
            {item?.lastSeen}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SystemChatItem;
