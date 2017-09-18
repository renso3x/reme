import React from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    Text,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Button } from '../components/common';
import styles from './Styles/MainStyles';
import aboutStyles from './Styles/AboutStyles';
import { Fonts, Icons } from '../metrics';

function About({ navigation }) {

    const goBack = () => navigation.goBack(null);

	return (

        <View style={{ flex: 1 }}>

            <ImageBackground 
                source={Icons.background}
                style={aboutStyles.header}
            >

                <View style={styles.headContainer}>

                    <Image 
                        source={Icons.appMd}
                        style={styles.iconLogo}
                    />

                    <Button
                        onPress={goBack}
                        style={styles.backIconBtn}
                    >

                        <Image 
                            source={Icons.back}
                            style={styles.aboutIcon}
                        />
                        <Text style={aboutStyles.backTxt}>BACK</Text>
                    
                    </Button>
                
                </View>
                
            </ImageBackground>

            <ScrollView contentContainerStyle={styles.aboutContainer}>
            
            	<Text style={styles.aboutTxt}>
            
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            
            	</Text>
            
            </ScrollView>
        
        </View>
    
    );
}

export default About;