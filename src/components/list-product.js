import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductCard from './product-card';

const ListProducts = ({ title, data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
                <Text>View all</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ProductCard item={item} onPress={() => { onPress(item) }} />
                    )}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        </View>
    );
};

export default ListProducts;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    },
    header: {
        borderWidth: 1,
        borderColor: 'red'
    },
    headerTitle: {
        color: 'green'
    },
    listProducts: {

    }
});