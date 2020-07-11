import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuHeader = () => {
    return (
        <View style={styles.container}>
            <Text>Menu Header</Text>
        </View>
    );
};

export default MenuHeader;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    }
});