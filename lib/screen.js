import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
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


/**
 * @param {any} state 
 * @returns 
 */
const mapProps = state => {
    return {

    }
}
export default connect(mapProps)(Screen)