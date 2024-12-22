import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useCallback } from "react";
import { router, RelativePathString } from "expo-router";

interface GenericItem {
  id: number;
  title: string;
  categoryId?: number;
}

interface GenericListProps {
  data: Array<GenericItem>;
  dataType: string;
}

const GenericList: React.FC<GenericListProps> = ({ data, dataType }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Tabitem item={item} dataType={dataType} />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const Tabitem: React.FC<{ item: GenericItem; dataType: string }> = ({
  item,
  dataType,
}) => {
  const onPress = useCallback(
    (id: number) => {
      const path = `/bhajans/${
        dataType === "categories" ? id : `${item.categoryId}/${id}`
      }` as RelativePathString;
      router.push(path);
    },
    [dataType, item.categoryId]
  );

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
    width: "100%",
  },
  item: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    fontSize: 16,
    textAlign: "left",
    borderWidth: 1,
    borderColor: "#fe5c02",
    backgroundColor: "#ffffff",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default GenericList;
