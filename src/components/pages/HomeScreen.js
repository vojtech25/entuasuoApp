import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import AddProject from '../AddProject';
import AddCard from '../common/AddCard';
import Header from '../common/Header';

// import AddProject from '../AddProject'
// import Collections from '../common/Collections'

const HomeScreen = () => {

    const [addingProject, setAddingProject] = useState(false)
    const [collections, setCollections] = useState([])
    const collectionsArr = ['secondo', 1, 'ultimo']
    const closeModal = () => {
        setAddingProject(false)
    }

    const createNewProject = () => {
        setAddingProject(true)
    }

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

    return (
        <ScrollView>
            <View style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Header />
                <View style={{ flex: 1, marginTop: '25%', flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: 20 }}>
                    {

                        collectionsArr.map((prgt, index) => {
                            return (

                                <View style={{ marginRight: 20, marginBottom: 20, height: 150, width: 150, backgroundColor: 'pink' }}>
                                    <AddCard />
                                    <Text>{prgt}</Text>
                                </View>
                            )
                        })
                    }

                    <View style={{ margin: 0 }}>
                        <AddCard />
                        <Text>Primo</Text>
                    </View>
                </View>
                {/* <AddProject /> */}
            </View></ScrollView>

    )
}

export default HomeScreen
