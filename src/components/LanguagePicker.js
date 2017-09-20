import React from 'react';
import { View, Platform, PickerIOS, Text } from 'react-native';
import PickerAndroid from 'react-native-picker-android';
import styles from './styles/LanguagePickerStyles';

let PickerList = Platform.OS === 'ios' ? PickerIOS : PickerAndroid;
let PickerItem = PickerList.Item;

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
    <View style={{ marginBottom: 50, height: 250 }}>
        <PickerList
            selectedValue={'en'}
            onValueChange={(key) => console.log(key)}
            itemStyle={styles.itemPicker}
        >
            {
                LANGUAGES.map((langLabel, index) => (
                    <PickerItem
                        key={index}
                        value={langLabel.key}
                        label={langLabel.name}
                    />
                ))
            }
        </PickerList>
    </View>

export default LanguagePicker;
