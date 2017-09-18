import React from 'react';
import { View, Platform, PickerIOS, Text } from 'react-native';
import PickerAndroid from 'react-native-picker-android';
import styles from './styles/LanguagePickerStyles';

let Picker = Platform.OS === 'ios' ? PickerIOS : PickerAndroid;
let PickerItem = Picker.Item;

const LANGUAGES = [
    { name: 'Chinese(Mandarin)', key: 'cn' },
    { name: 'Dutch', key: 'du' },
    { name: 'English', key: 'en' },
    { name: 'French', key: 'fr'},
    { name: 'German', key: 'gr' }
];

const LanguagePicker = ({
    language,
    selectedLanguage
}) => 
    <View>
        <Picker
            selectedValue={'en'}
            onValueChange={(key) => console.log(key)}>
            {LANGUAGES.map((langLabel, index) => (
                <PickerItem
                    key={index}
                    value={langLabel.key}
                    label={langLabel.name}
                />
            ))}
        </Picker>
    </View>

export default LanguagePicker;
