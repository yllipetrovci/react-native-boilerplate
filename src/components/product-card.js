import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = () => {
    return (
        <View style={styles.container}>
            <Text>Product Card</Text>
        </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    }
});