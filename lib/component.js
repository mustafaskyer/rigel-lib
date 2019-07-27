import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Component(props){
    return(
        <View style={styles.container}>
            <Text>{'Component'}</Text>
        </View>
    )
}

export default Component