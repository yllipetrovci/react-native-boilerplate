import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MenuButton from './menu-button';

const MenuHeader = ({ title, data }) => {

    const onPress = (id) => {
        console.log({ id });
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerVw}>
                <Text style={styles.headerTitleTxt}>{title}</Text>
            </View>
            <View style={styles.listProductsVw}>
                <FlatList
                    horizontal={true}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <MenuButton item={item} onPress={() => { onPress(item.id) }} />
                    )}
                    keyExtractor={(item) => item.name.toString()}
                />
            </View>
        </View>
    );
};

export default MenuHeader;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    },
    headerVw: {
        borderWidth: 1,
        borderColor: 'red',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginHorizontal:10
    },
    headerTitleTxt: {
        color: 'green'
    },
    listProductsVw: {
        borderWidth:1,
        height:100,
        flexDirection:'row',
        marginHorizontal:10
        // flexDirection:'column',
        // justifyContent:'center',
    }
});