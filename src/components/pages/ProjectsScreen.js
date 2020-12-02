import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import Collection from '../Collection'

const ProjectsScreen = ({ navigation, route }) => {

    const [addingProject, setAddingProject] = useState(false)
    const [collections, setCollections] = useState([])
    const collectionsArr = ['secondo', 1, 'ultimo']

    const addProject = (name, image) => {
        const newProject = {
            name,
            image
        }
        setCollections([
            newProject,
            ...collections
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
                screenTitle={'Maria Continuity'}
                collectionsArr={collectionsArr}
                createNewProject={showToast}
                collectionType={'Project'}
                destination={goTo} />
        </View>
    )
}

export default ProjectsScreen
