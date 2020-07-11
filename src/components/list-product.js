import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListProducts = () => {
    return (
        <View style={styles.container}>
            <Text>List Products</Text>
        </View>
    );
};

export default ListProducts;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    }
});