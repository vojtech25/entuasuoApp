import React, { useEffect } from 'react'
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Collection from '../Collection'
import { addProject } from '../../redux/actions/projectActions'
import Trait from '../Trait';


const ProjectsScreen = ({ navigation, route }) => {

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
    }

    const goTo = (project) => {
        navigation.navigate('character', { project })
    }

    return (
        <View style={{ flex: 1 }}>
            <Collection
                collectionsArr={projects}
                screenTitle={'Maria Continuity'}
                createNewProject={createProject}
                destination={goTo}
                collectionType={'Project'}
            />
        </View>
    )
}

export default ProjectsScreen
