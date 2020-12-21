import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import Collection from '../Collection'
import { addSheet } from '../../redux/actions/sheetActions'
import { useDispatch, useSelector } from 'react-redux';

const SheetsScreen = ({ navigation, route }) => {
    const comeFrom = route.name
    const sheets = useSelector(state => state.sheets.sheets)
    const character_uuid = 'comingSoon'
    const dispatch = useDispatch()

    useEffect(() => {
        let sheetInfo
        const prog = route.params ? route.params.projectInfo : null

        prog ? (sheetInfo = prog, dispatch(addSheet(sheetInfo))) : null

    }, [route.params])

    const createSheet = () => {
        navigation.navigate('createProject', { comeFrom })
        // closeModal()
    }

    const goTo = () => {
        navigation.push('singleScene')
    }

    const showToast = () => {
        // ToastAndroid.show("Viieerry Good Maria !", ToastAndroid.LONG);
        console.log('ZZeebi!!!!')
    };

    return (
        <View style={{ flex: 1 }}>
            <Collection
                collectionsArr={sheets}
                screenTitle={route.params.character.name}
                createNewProject={createSheet}
                destination={goTo}
                collectionType={'Sheet'}
            />
        </View>
    )
}

export default SheetsScreen
