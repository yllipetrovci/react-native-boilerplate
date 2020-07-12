import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuButton = ({ item, onPress }) => {
    const { icon, name, bgColor } = item;

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <View style={[styles.imageVw, { backgroundColor: bgColor }]} />
                <Text style={styles.nameTxt}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MenuButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: 102,
    },
    imageVw: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    nameTxt:{
        marginVertical:5
    }
});