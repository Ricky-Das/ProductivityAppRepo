import React from 'react';

import { TouchableOpacity } from 'react-native';
import AppText from './AppText';


const AppButton = ({ onPress, text, intendedTextColor, font, style, intendedFontSize}) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <AppText font={font} intendedFontSize={intendedFontSize} intendedColor={intendedTextColor} text={text}/>
    </TouchableOpacity>
  );



export default AppButton;

