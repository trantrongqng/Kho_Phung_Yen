// KhoScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const KhoScreen = () => {
  const khoData = [
    { id: '1', name: 'Mặt hàng 1', status: 'Tồn kho: 100' },
    { id: '2', name: 'Mặt hàng 2', status: 'Tồn kho: 500' },
    { id: '3', name: 'Mặt hàng 3', status: 'Tồn kho: 200' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản Lý Kho</Text>
      <FlatList
        data={khoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
});

export default KhoScreen;
