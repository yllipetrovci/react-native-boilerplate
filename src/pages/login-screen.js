import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
    return (
        <View>
            <Text>Sign In</Text>
            <TextInput />
            <TextInput />
            <TouchableOpacity>
                <Text>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>
                    Don't have an account? Register now
                </Text>
            </TouchableOpacity>

        </View>
    );
};

export default LoginScreen;