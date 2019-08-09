import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={newText => setTitle(newText)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={newText => setContent(newText)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'green',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default CreateScreen;
