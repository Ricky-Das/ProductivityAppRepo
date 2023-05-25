import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import AdjustFontSize from '../scripts/AdjustFontSize';

const AppText = ({intendedFontSize, intendedColor, text, font, textDecorationLine, style}) => {
    return (
        <View>
            <Text style={[style, {fontFamily:font}, {fontSize: AdjustFontSize(intendedFontSize)}, {color: intendedColor}, {textDecorationLine: textDecorationLine}]}>{text}</Text>
        </View>
    );
};

export default AppText;