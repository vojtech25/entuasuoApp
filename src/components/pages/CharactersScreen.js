import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import Collection from '../Collection'
import { addCharacter } from '../../redux/actions/characterActions'
import { useDispatch, useSelector } from 'react-redux';

const CharactersScreen = ({ navigation, route }) => {
    console.log('CharactTitle', route)
    const comeFrom = route.name
    const characters = useSelector(state => state.characters.characters)
    const project_uuid = 'comingSoon'//route.params.project.projectId
    const dispatch = useDispatch()

    useEffect(() => {
        let characterInfo
        const prog = route.params ? route.params.projectInfo : null

        prog ? (characterInfo = prog, dispatch(addCharacter(characterInfo))) : null

    }, [route.params])

    const createCharacter = () => {
        navigation.navigate('createProject', { comeFrom, project_uuid })
        // closeModal()
    }

    const goTo = (character) => {
        navigation.push('sheet', { character: character })
    }

    const showToast = () => {
        // ToastAndroid.show("Viieerry Good Maria !", ToastAndroid.LONG);
        console.log('ZZeebi!!!!')
    };

    return (
        <View style={{ flex: 1 }}>
            <Collection
                collectionsArr={characters}
                screenTitle={route.params.project.name}
                createNewProject={createCharacter}
                destination={goTo}
                collectionType={'Character'}
            />
        </View>
    )
}

export default CharactersScreen
