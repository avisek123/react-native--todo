import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}) {
    [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    };
    const handleText = () => {
        submitHandler(text);
        setText('')
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button color='coral' onPress={handleText} title='add todo' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});