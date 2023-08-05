import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../theme/color";

const UserToUserChatItem = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={index}
      onPress={() =>
        navigation.navigate("Chat", {
          userName: item?.userName,
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
        {item?.isOnline && item?.isOnline == true && (
          <View
            style={{
              height: 14,
              width: 14,
              borderRadius: 7,
              backgroundColor: "green",
              borderColor: Colors.border,
              borderWidth: 2,
              position: "absolute",
              top: 14,
              right: 2,
              zIndex: 1000,
            }}
          />
        )}

        <Image
          source={item?.userImg}
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
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 18,
            lineHeight: 20,
            marginBottom: 4,
          }}
        >
          {item?.userName}
        </Text>
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

export default UserToUserChatItem;
