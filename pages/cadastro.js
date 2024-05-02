import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = async () => {
        try {
            if (email.trim() === '' || password.trim() === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            await AsyncStorage.setItem('userData', JSON.stringify({ email, password }));
            setEmail('');
            setPassword('');
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
            alert('Erro ao salvar os dados. Por favor, tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
