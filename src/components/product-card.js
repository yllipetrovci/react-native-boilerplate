import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCard = ({ item, onPress }) => {
    const { title, price, img } = item;
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.imageVw}><Text>IMG</Text></View>
            <Text style={styles.titleTxt}>{title}</Text>
            <Text style={styles.priceTxt}>{price}</Text>
        </TouchableOpacity>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width:150,
        height:200,
        margin:10
    },
    imageVw: {
        borderWidth:1,
        borderColor:'red',
        height:'60%'
    },
    titleTxt: {

    }
});