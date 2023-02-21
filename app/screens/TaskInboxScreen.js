import React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';

export default function TaskInboxScreen(props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <Text>Task Inbox</Text>
            <TextInput placeholder="Enter The Task Name"></TextInput>
        </SafeAreaView>
    );
}