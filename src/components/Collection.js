import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, Button, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';

import AddCard from './common/AddCard';
import Header from './common/Header';

import styles from './styles/CollectionStyle'

const Collection = ({ collectionsArr, screenTitle, createNewProject, collectionType, destination }) => {

    const navigation = useNavigation()
    const route = useRoute()

    // const router = route ? route : 'nothing yet'
    // console.log('Route Params', route.params)

    return (
        <View style={styles.container}>
            <Header center={screenTitle} />
            <ScrollView style={{ marginTop: '35%' }}>
                <View style={styles.projectArea}>
                    {
                        collectionsArr.map((prgt, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => destination(prgt)} style={styles.projectCard}>
                                    <AddCard image={prgt.image ? prgt.image : null} />
                                    <Text>{prgt.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <TouchableOpacity onPress={createNewProject} style={{ margin: 20 }}>
                        <AddCard />
                        <Text>Add {collectionType}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Collection
