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
                <Text style={styles.viewAllTxt}>View all</Text>
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
    container: {},
    headerVw: {
        borderTopWidth: 1,
        borderTopColor: '#EDEDED',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
        paddingTop:30
    },
    headerTitleTxt: {
        color: '#2E2F34',
        fontWeight: 'bold',
        fontSize: 23
    },
    viewAllTxt: {
        fontSize: 16,
        color: '#6E6C91'
    },
    listProductsVw: {
        backgroundColor: '#F7F7F7'
    }
});