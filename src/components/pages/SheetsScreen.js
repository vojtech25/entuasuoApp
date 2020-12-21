import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { View } from 'react-native';
import Collection from '../Collection'
import { addSheet } from '../../redux/actions/sheetActions'
import { useDispatch, useSelector } from 'react-redux';

const SheetsScreen = ({ navigation, route }) => {

    const comeFrom = route.name
    const dispatch = useDispatch()
    const sheets = useSelector(state => state.sheets.sheets)
    const characterId = route.params.character.characterId
    const filterdSheets = sheets.filter(sheet => sheet.characterId === characterId)


    useEffect(() => {

        let sheetInfo
        const prog = route.params ? route.params.projectInfo : null
        prog ? (sheetInfo = prog, dispatch(addSheet(sheetInfo))) : null

    }, [route.params])

    const createSheet = () => {
        navigation.navigate('createProject', { comeFrom, characterId })
    }

    const goTo = () => {
        navigation.push('singleScene')
    }

    return (
        <View style={{ flex: 1 }}>
            <Collection
                collectionsArr={filterdSheets}
                screenTitle={route.params.character.name}
                createNewProject={createSheet}
                destination={goTo}
                collectionType={'Sheet'}
            />
        </View>
    )
}

export default SheetsScreen
