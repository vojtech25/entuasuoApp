import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../redux/store'

import Collection from '../Collection'
import { addProject } from '../../redux/actions/projectActions'
import Trait from '../Trait';


const ProjectsScreen = ({ navigation, route }) => {

    console.log('InThe Benigin', route)
    const comeFrom = route.name
    const projects = useSelector(state => state.projects.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        let projectInfo
        const prog = route.params ? route.params.projectInfo : null

        prog ? (projectInfo = prog, dispatch(addProject(projectInfo)), console.log('params Changed', projectInfo)) : console.log('Boh?!')

    }, [route.params])


    const createProject = () => {
        navigation.navigate('createProject', { comeFrom })
        // closeModal()
    }


    const goTo = (project) => {
        navigation.navigate('character', { project: project })
    }

    const showToast = () => {
        // ToastAndroid.show("Viieerry Good Maria !", ToastAndroid.LONG);
        console.log('ZZeebi!!!!')
    };

    console.log('store dai', store.getState())
    console.log('Prooggg', projects)
    return (
        <View style={{ flex: 1 }}>
            <Collection
                collectionsArr={projects}
                screenTitle={'Maria Continuity'}
                createNewProject={createProject}
                destination={goTo}
                collectionType={'Project'}
            />
            {/* <AddProject /> */}
        </View>
    )
}

export default ProjectsScreen
