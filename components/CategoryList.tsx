import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const CategoryList = ({ categoryId }: { categoryId: 1 | 2 | 3 }) => {
  const data: {
    1: { id: number; title: string }[];
    2: { id: number; title: string }[];
    3: { id: number; title: string }[];
  } = {
    1: [
      {
        id: 1,
        title: "Shree Krishna Bhajan 1",
      },
      {
        id: 2,
        title: "Shree Krishna Bhajan 2",
      },
      {
        id: 3,
        title: "Shree Krishna Bhajan 3",
      },
      {
        id: 4,
        title: "Shree Krishna Bhajan 4",
      },
    ],
    2: [
      {
        id: 1,
        title: "Shree Ram Bhajan 1",
      },
      {
        id: 2,
        title: "Shree Ram Bhajan 2",
      },
    ],
    3: [
      {
        id: 1,
        title: "Shree Krishna Bhajan 1",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data[categoryId]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingEnd: 20,
    // backgroundColor: "#f9f9f9",
    width: "100%",
  },
  item: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    fontSize: 16,
    textAlign: "left",
    borderWidth: 1,
    // borderColor: "#ffe5d7",
    boxShadow: "1 1 1px rgb(65, 57, 52)",
    borderColor: "#fe5c02",
    backgroundColor: "#ffffff",
    borderRadius: 40,
  },
});

export default CategoryList;
