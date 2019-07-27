import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Component(props){
    return(
        <View style={styles.container}>
            <Text>{'Component'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Component