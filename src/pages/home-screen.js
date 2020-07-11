import React from 'react';
import { View, Text } from 'react-native';
import MenuHeader from '../components/menu-header';
import ListProducts from '../components/list-product';

const HomeScreen = () => {
    const weeklyProductsData = [
        { price: 49.99, title: 'Women Shoes', img: '' },
        { price: 14.99, title: 'Peony Bouqet', img: '' },
        { price: 23.99, title: 'Blank Books', img: '' },
        { price: 3.99, title: 'Tennis Ball', img: '' },
        { price: 1.99, title: 'Pencils', img: '' },
        { price: 99.99, title: 'Converse', img: '' },
    ];

    const mostViewdData = [
        { price: 3.99, title: 'Tennis Ball', img: '' },
        { price: 1.99, title: 'Pencils', img: '' },
        { price: 99.99, title: 'Converse', img: '' },
    ]

    return (
        <View>
            <MenuHeader />
            <ListProducts title='Weekly Products' data={weeklyProductsData} />
            <ListProducts title='Most Viewed' data={mostViewdData} />
        </View>
    );
};

export default HomeScreen;