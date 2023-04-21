import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const data = [
  { id: 1, title: 'Imagen 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Imagen 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Imagen 3', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Imagen 4', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Imagen 5', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Imagen 6', image: 'https://via.placeholder.com/150' },  
];

const Grid = () => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.gridRow}>
        <View style={styles.gridItem}>
          <Image source={{ uri: data[0].image }} style={styles.image} />
          <Text style={styles.title}>{data[0].title}</Text>
        </View>
        <View style={styles.gridItem}>
          <Image source={{ uri: data[1].image }} style={styles.image} />
          <Text style={styles.title}>{data[1].title}</Text>
        </View>
        <View style={styles.gridItem}>
          <Image source={{ uri: data[2].image }} style={styles.image} />
          <Text style={styles.title}>{data[2].title}</Text>
        </View>
      </View>
      <View style={styles.gridRow}>
        <View style={styles.gridItem}>
          <Image source={{ uri: data[3].image }} style={styles.image} />
          <Text style={styles.title}>{data[3].title}</Text>
        </View>
        <View style={styles.gridItem}>
          <Image source={{ uri: data[4].image }} style={styles.image} />
          <Text style={styles.title}>{data[4].title}</Text>
        </View>
        <View style={styles.gridItem}>
          <Image source={{ uri: data[5].image }} style={styles.image} />
          <Text style={styles.title}>{data[5].title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Grid;
