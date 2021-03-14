
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <Text>Home!</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
