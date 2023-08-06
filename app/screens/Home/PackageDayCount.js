import React, { useState } from "react";
import { Text, View } from "react-native";
import { List } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../theme/color";
import style from "../../theme/style";

const PackageDayCount = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <List.Section>
          <List.Accordion
            expanded={expanded}
            theme={{ colors: { primary: Colors.primary } }}
            title="Package Day Count"
            titleStyle={{ fontSize: 18, fontFamily: "Poppins-Bold" }}
            style={{ borderRadius: 10 }}
            onPress={handlePress}
          >
            <List.Item
              style={{ paddingHorizontal: 20 }}
              title="BTC Package"
              titleStyle={style.txt}
              left={() => (
                <AntDesign
                  name="clockcircle"
                  size={18}
                  color={Colors.primary}
                />
              )}
              right={() => <Text style={style.txt}>10 day left</Text>}
            />
            <List.Item
              style={{ paddingHorizontal: 20 }}
              title="ETH Package"
              titleStyle={style.txt}
              left={() => (
                <AntDesign
                  name="clockcircle"
                  size={18}
                  color={Colors.primary}
                />
              )}
              right={() => <Text style={style.txt}>10 day left</Text>}
            />
          </List.Accordion>
        </List.Section>
      </View>
    </View>
  );
};

export default PackageDayCount;
