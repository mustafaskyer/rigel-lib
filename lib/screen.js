import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function Screen(props){
    const [state, setState] = useState(null)
    useEffect(() => {
        /**  */
    })
    return(
        <View style={styles.container}>
            <Text>{'Screen'}</Text>
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


/**
 * @param {any} state 
 * @returns 
 */
const mapProps = state => {
    return {

    }
}
export default connect(mapProps)(Screen)