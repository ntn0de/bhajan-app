import { View, Text, FlatList, StyleSheet } from "react-native";
import { getCategories } from "@/data/categories";
import { router } from "expo-router";

const Badges = () => {
  const badgeData = getCategories({ featured: true });
  return (
    <View style={styles.badges}>
      <FlatList
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate={0.99}
        data={badgeData}
        renderItem={({ item }) => (
          <Text
            style={styles.badgeItem}
            onPress={() => router.push(`/bhajans/${item.id}`)}
          >
            {item.title}
          </Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  badges: {
    // paddingLeft: 10,
  },

  badgeItem: {
    marginRight: 10,
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ffe5d7",
    backgroundColor: "#ffffff",
    borderRadius: 40,
  },
});

export default Badges;
