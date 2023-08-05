import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import image from "../../assets/image/Analytics.png";
import { Colors } from "../../theme/color";
import style from "../../theme/style";
import SystemChatItem from "./SystemChatItem";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const contacts = [
  {
    id: "1",
    chatMode: "admin",
    userName: "John Doe",
    userImg: image,
    isOnline: false,
    lastSeen: "3 Days ago",
    lastMessage: "How is it going. bro , i am very hungry give me some money",
    messageInQueue: 3,
    sentDate: "12/7",
  },
  {
    id: "1",
    userName: "John Doe",
    chatMode: "package",
    packageName: "Package 1",
    userImg: image,
    isOnline: false,
    lastSeen: "3 Days ago",
    lastMessage: "How is it going. bro , i am very hungry give me some money",
    messageInQueue: 3,
    sentDate: "12/7",
  },
];

export default function ContractScreen() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleSearch = (text) => {};

  return (
    <SafeAreaView style={[style.area]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { paddingBottom: 60 }]}>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingBottom: 10,
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  fontFamily: "Poppins-Regular",
                  color: Colors.active,
                }}
              >
                Contacts
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("Notification")}
                size={25}
              >
                <View>
                  <Ionicons
                    color={Colors.disable}
                    size={25}
                    name="notifications"
                  />
                  {1 > 0 && (
                    <View
                      style={{
                        height: 14,
                        width: 14,
                        borderRadius: 14,
                        backgroundColor: Colors.primary,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: -4,
                        right: -6,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: Colors.active,
                        }}
                      >
                        {5}
                      </Text>
                    </View>
                  )}
                </View>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.secondary,
              height: 48,
              paddingHorizontal: 12,
              marginHorizontal: 2,
              borderRadius: 20,
            }}
          >
            <Ionicons
              name="ios-search-outline"
              size={24}
              color={Colors.disable}
            />

            <TextInput
              style={{
                width: "100%",
                height: "100%",
                marginHorizontal: 12,
              }}
              value={search}
              onChangeText={handleSearch}
              placeholder="Search contact..."
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={contacts}
              renderItem={({ item, index }) => (
                <SystemChatItem item={item} index={index} />
              )}
              keyExtractor={(item, i) => i}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
