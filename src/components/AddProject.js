import React, { useState } from 'react'
import { Text, View, Button, TextInput, ImageView, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import ImagePicker from '../utils/pickImage'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid';

import styles from './styles/AddProjectStyle'

const AddProject = ({ closeModal, addProject, navigation, route }) => {

    const comeFrom = route.params.comeFrom
    const [loading, setLoading] = useState(false)
    const [projectInfo, setProjectInfo] = (
        comeFrom === 'project' ?
            useState({
                [`${comeFrom}Id`]: uuid(),
                name: '',
                image: null
            })
            : comeFrom === 'character' ?
                useState({
                    [`${comeFrom}Id`]: uuid(),
                    projectId: route.params.projectId,
                    name: '',
                    image: null
                })
                : useState({
                    [`${comeFrom}Id`]: uuid(),
                    characterId: route.params.characterId,
                    name: '',
                    image: null
                })
    )

    const changeProjectName = (name) => {
        setProjectInfo(prevState => {
            return {
                ...prevState,
                name
            }
        })
    }

    const selectImage = () => {
        ImagePicker()
            .then(img => {
                setProjectInfo(prevState => {
                    return {
                        ...prevState,
                        image: img.path
                    }
                })
            })
    }

    const saveProject = () => {
        ToastAndroid.show(`${comeFrom} ${`created successfully`}`, ToastAndroid.LONG)
        navigation.navigate(comeFrom, { projectInfo })
    }

    return (
        // <View style={styles.modalBackGround}>
        <View style={{ backgroundColor: 'orange', position: 'relative', padding: 10, height: 800, width: '100%' }}>
            <TextInput type='text' value={projectInfo.name} onChangeText={changeProjectName} placeholder='Project Name' style={{ height: 50, borderBottomWidth: 2, borderColor: 'red' }} />
            <TextInput type='text' placeholder='Password' style={{ height: 100, borderBottomWidth: 2, borderColor: 'red' }} />
            <TextInput type='text' placeholder='Password' style={{ height: 100, backgroundColor: 'white' }} />
            <View style={styles.imageInput}>
                <TouchableOpacity onPress={selectImage} style={styles.image}>
                    {
                        projectInfo.image &&
                        <Image source={{ uri: projectInfo.image }} style={{ flex: 1 }} />
                    }
                    {
                        loading &&
                        <Text>We Are Loading...................</Text>
                    }
                </TouchableOpacity>
            </View>
            <Button title='Save' onPress={saveProject} style={{ width: 200, height: 50 }} />
        </View>
        // </View>
    )
}

export default AddProject
