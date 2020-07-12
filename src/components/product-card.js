import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductCard = ({ item, onPress }) => {
    const { title, price, img } = item;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image resizeMode='cover' style={styles.imageVw} source={img} />
            </View>
            <View style={{ height: '30%', flexDirection: 'column', marginTop: 10, marginHorizontal: 5, marginBottom: 5 }}>
                <Text style={styles.titleTxt}>{title}</Text>
                <Text style={styles.priceTxt}>$ {price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#CAD8E8',
        borderRadius: 10,
        width: 130,
        height: 170,
        margin: 10,
        backgroundColor: '#fff'
    },
    imageVw: {
        borderBottomWidth: 1,
        borderColor: '#F7F7F7',
        height: '70%',
        transform: [{ scale: 0.95 }]
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