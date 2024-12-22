import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { Link, RelativePathString, router } from "expo-router";

const GenericList = ({
  data,
  dataType,
}: {
  data: Array<any>;
  dataType: string;
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Tabitem item={item} key={item.id} dataType={dataType} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const Tabitem = ({ item, dataType }: { item: any; dataType: string }) => {
  const onPress = (id: number) => {
    let path;
    if (dataType === "categories") {
      path = `/bhajans/${id}` as RelativePathString;
    } else {
      path = `/bhajans/${item.categoryId}/${id}` as RelativePathString;
    }
    router.push(path);
  };
  return (
    <Pressable onPress={() => onPress(item.id)}>
      <Text style={styles.item}>{item.title}</Text>
    </Pressable>
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

export default GenericList;
