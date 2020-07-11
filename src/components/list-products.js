import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductCard from './product-card';

const ListProducts = ({ title, data }) => {

    const onPress = (id) => {
        console.log({ id });
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerVw}>
                <Text style={styles.headerTitleTxt}>{title}</Text>
                <Text>View all</Text>
            </View>
            <View style={styles.listProductsVw}>
                <FlatList
                    horizontal={true}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ProductCard item={item} onPress={() => { onPress(item.id) }} />
                    )}
                    keyExtractor={(item) => item.title.toString()}
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
    headerVw: {
        borderWidth: 1,
        borderColor: 'red'
    },
    headerTitleTxt: {
        color: 'green'
    },
    listProductsVw: {
        borderWidth:1,
    }
});