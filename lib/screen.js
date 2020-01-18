import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import styles from './styles';


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

const actions = {

}

export default connect(mapProps, actions)(Screen)
