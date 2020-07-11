import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuButton = ({ item, onPress }) => {
    const { title, price, img } = item;
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
         <Text>Menu button</Text>
        </TouchableOpacity>
    );
};

export default MenuButton;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
    },
});