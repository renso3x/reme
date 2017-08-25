import React from 'react';
import { View, Picker } from 'react-native';
import styles from './styles/LanguagePickerStyles';

export default class LanguagePicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            language: 'ar'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker
                    itemStyle={styles.itemPicker}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
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
        );
    }
}