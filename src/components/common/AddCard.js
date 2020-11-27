import React from 'react'
import AddNewIcon from '../../entuasoAsset/icons/AddNew'
import { StyleSheet, View, Button, TextInput, ImageView } from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './styles/AddCardStyle'

const AddCard = ({ image, title }) => {

    return (
        <View style={styles.container}>
            {/* <View style={styles.image}>
                {
                    image &&
                    <ImageView alt='backgorundImage' src={image} style={{ height: '100%', width: '100%' }} />
                } */}
            {
                !image &&
                <Icon
                    name='add'
                    size={100} />
            }
            {/* </View> */}
        </View>
    )
}

export default AddCard
