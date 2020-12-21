import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { View } from 'react-native';
import Collection from '../Collection'
import { addCharacter } from '../../redux/actions/characterActions'
import { useDispatch, useSelector } from 'react-redux';

const CharactersScreen = ({ navigation, route }) => {

    const comeFrom = route.name
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.characters)
    const projectId = route.params.project.projectId
    const filterdCharacters = characters.filter(char => char.projectId === projectId)


    useEffect(() => {

        let characterInfo
        const prog = route.params ? route.params.projectInfo : null
        prog ? (characterInfo = prog, dispatch(addCharacter(characterInfo))) : null

    }, [route.params])

    const createCharacter = () => {
        navigation.navigate('createProject', { comeFrom, projectId })
    }

    const goTo = (character) => {
        navigation.push('sheet', { character })
    }

    return (
        <View style={{ flex: 1 }}>
            <Collection
                collectionsArr={filterdCharacters}
                screenTitle={route.params.project.name}
                createNewProject={createCharacter}
                destination={goTo}
                collectionType={'Character'}
            />
        </View>
    )
}

export default CharactersScreen
