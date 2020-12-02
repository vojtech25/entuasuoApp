import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import Collection from '../Collection'

const CharactersScreen = ({ navigation, route }) => {

    const [addingCharacter, setAddingCharacter] = useState(false)
    const [characters, setCharacters] = useState([])
    const collectionsArr = ['secondo', 1, 'ultimo']

    const addCharacter = (name, image) => {
        const newCharacter = {
            name,
            image
        }
        setCharacters([
            newCharacter,
            ...characters
        ])
        closeModal()
    }

    const goTo = () => {

        navigation.push('Character')
    }

    const showToast = () => {
        // ToastAndroid.show("Viieerry Good Maria !", ToastAndroid.LONG);
        console.log('ZZeebi!!!!')
    };

    return (
        <View style={{ flex: 1 }}>
            <Collection
                collectionsArr={characters}
                collectionType={'Character'}
                screenTitle={'Maria Continuity'}
                createNewProject={showToast}
                destination={goTo} />
        </View>
    )
}

export default CharactersScreen
