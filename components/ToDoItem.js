import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function TodoItem({ item, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <Pressable onPress={() => onDelete(item.id)}>
        <Text style={styles.delete}>❌</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
  },
  delete: {
    fontSize: 20,
    color: "red",
  },
});
