import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../theme/color";
import style from "../../theme/style";

const CurrentWallet = () => {
  const now = new Date();
  const month = now.getMonth() + 1; // January is 0, so add 1 to get the actual month number
  const day = now.getDate();
  const year = now.getFullYear();
  return (
    <View
      style={{
        backgroundColor: Colors.secondary,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Text style={style.txt1}>Current Wallet</Text>
      <Text style={[style.subtxt, { marginTop: 10 }]}>
        {`${day}-${month}-${year}`}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={style.subtitle}>$15,050.13</Text>
        <Text style={[style.txt, { color: "#FF6D3F" }]}>$112.20 (+3,1%)</Text>
      </View>
    </View>
  );
};

export default CurrentWallet;
