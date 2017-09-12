import React from 'react';
import { View, Picker } from 'react-native';
import styles from './styles/LanguagePickerStyles';

const LanguagePicker = ({
    language,
    selectedLanguage
}) => 
    <View style={styles.container}>
        <Picker
            itemStyle={styles.itemPicker}
            selectedValue={language.language}
            onValueChange={(itemValue, itemIndex) => selectedLanguage(itemValue)}
        >
            <Picker.Item label="Arabic" value="ar" />
            <Picker.Item label="Canotonese" value="can" />
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Greek" value="gr" />
            <Picker.Item label="Italian" value="it" />
            <Picker.Item label="Mandarin" value="man" />
            <Picker.Item label="Turkish" value="tur" />
            <Picker.Item label="Vietnamese" value="vie" />
        </Picker>
    </View>

export default LanguagePicker;