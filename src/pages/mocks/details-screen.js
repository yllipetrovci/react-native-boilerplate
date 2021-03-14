import * as React from 'react';
import { View, Text, } from 'react-native';
import MessageButton from '../../components/message-button';

const DetailsScreen = () => {
    const onPress = () => {
        console.log('PARENT: ON PRESS');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <MessageButton onPress={onPress} />
        </View>
    );
}

export default DetailsScreen;