import React from 'react'
import { StyleSheet, View, Button, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './styles/AddCardStyle'

const AddCard = ({ image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                {
                    image &&
                    <Image source={{ uri: image }} style={{ flex: 1 }} />
                }
                {
                    !image &&
                    <Icon
                        name='add'
                        size={100} />
                }
            </View>
        </View>
    )
}

export default AddCard
