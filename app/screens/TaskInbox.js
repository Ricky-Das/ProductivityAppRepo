import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function TaskInbox(props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style = {styles.TopContainer}>
                <AppText text={"Task Inbox"} intendedFontSize={48}/>
                <AppButton text={"Add"} intendedFontSize={30}></AppButton>
            </View>
        </SafeAreaView>
    );
}

export default TaskInbox;

const styles = StyleSheet.create({
    TopContainer : {
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    AddButtonContainer : {
        backgroundColor: 'black'
    }
})