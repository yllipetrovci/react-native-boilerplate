import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListProducts = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
                <Text>View all</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={[1, 2, 3, 4]}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth:1,
                        }}>
                            <Text onPress={() => onPress(item.id)}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        </View>
    );
};

export default ListProducts;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    },
    header: {
        borderWidth: 1,
        borderColor: 'red'
    },
    headerTitle: {
        color: 'green'
    }
});