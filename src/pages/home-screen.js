import React from 'react';
import { View, Text } from 'react-native';
import MenuHeader from '../components/menu-header';
import ListProducts from '../components/list-product';

const HomeScreen = () => {
    return (
        <View>
            <MenuHeader />
            <ListProducts title='Weekly Products'/>
            <ListProducts title='Most Viewed'/>
        </View>
    );
};

export default HomeScreen;