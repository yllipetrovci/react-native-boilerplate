import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuHeader from '../components/menu-header';
import ListProducts from '../components/list-products';

const HomeScreen = () => {
    const menuHeaderData = [
        { id: 1, icon: '', name: 'Real Estate', bgColor: '#FFB37B' },
        { id: 2, icon: '', name: 'Jobs', bgColor: '#E18EFF' },
        { id: 3, icon: '', name: 'Technology', bgColor: '#5ADFFF' },
        { id: 4, icon: '', name: 'More', bgColor: '#FF9AC5' },
    ];

    const weeklyProductsData = [
        { id: 1, price: 49.99, title: 'Women Shoes', img: '' },
        { id: 2, price: 14.99, title: 'Peony Bouqet', img: '' },
        { id: 3, price: 23.99, title: 'Blank Books', img: '' },
        { id: 4, price: 3.99, title: 'Tennis Ball', img: '' },
        { id: 5, price: 1.99, title: 'Pencils', img: '' },
        { id: 6, price: 99.99, title: 'Converse', img: '' },
    ];

    const mostViewdData = [
        { id: 1, price: 3.99, title: 'Tennis Ball', img: '' },
        { id: 2, price: 1.99, title: 'Pencils', img: '' },
        { id: 3, price: 99.99, title: 'Converse', img: '' },
    ]

    return (
        <View style={styles.container}>
            <MenuHeader title='Categories' data={menuHeaderData} />
            <ListProducts title='Weekly Products' data={weeklyProductsData} />
            <ListProducts title='Most Viewed' data={mostViewdData} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    }
})