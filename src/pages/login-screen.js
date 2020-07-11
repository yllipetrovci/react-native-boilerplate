import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [form, setForm] = useState({});

    const onChange = (name, text) => {
        setForm({ [name]: text, ...form });
    };

    return (
        <View>
            <Text>Sign In</Text>
            <TextInput placeholder='Username/E-mail' onChangeText={text => onChange('username', text)} />
            <TextInput placeholder='Password' onChangeText={text => onChange('password', text)} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})