import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCard = ({ item, onPress }) => {
    const { title, price, img } = item;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.imageVw}><Text>IMG</Text></View>
            <Text style={styles.titleTxt}>{title}</Text>
            <Text style={styles.priceTxt}>$ {price}</Text>
        </TouchableOpacity>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#CAD8E8',
        borderRadius: 10,
        width: 150,
        height: 200,
        margin: 10,
        backgroundColor: '#fff'
    },
    imageVw: {
        borderBottomWidth: 1,
        borderColor: '#F7F7F7',
        height: '60%'
    },
    titleTxt: {
        fontSize: 13,
        color: '#515C6F'
    },
    priceTxt: {
        fontSize: 12,
        color: '#6E6B90',
        fontWeight: 'bold'
    }
});