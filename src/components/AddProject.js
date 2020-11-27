import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ImageView } from 'react-native';
// import AddNewIcon from '../entuasoAsset/icons/AddNew'
// import Header from './common/Header'
import styles from './styles/AddProjectStyle'
const AddProject = ({ closeModal, addProject }) => {

    const [projectName, setProjectName] = useState('')
    const [image, setimage] = useState(null)
    const [loading, setLoading] = useState(false)
    let imageRef

    const changeProjectName = (e) => {
        setProjectName(e.target.value)
    }
    const handleImageChange = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setimage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(e.target.files[0])
    }

    const saveProject = () => {
        addProject(projectName, image)
    }

    return (
        // <View style={styles.modalBackGround}>
        <View style={{ backgroundColor: 'orange', position: 'relative', padding: 10, height: 800, width: 800 }}>
            {/* <Header left={'cancel'} leftAction={closeModal} center={'Add New Project'} right={'save'} rightAction={saveProject} /> */}
            {/* <View style={{ display: 'flex', justifyContent: 'space-between' }}> */}

            <TextInput type='text' id='name' value={projectName} onChange={changeProjectName} placeholder='Project Name' style={{
                height: 50,
                borderBottomWidth: 2,
                borderColor: 'red'
            }} />
            {/* </View> */}
            {/* <View style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}> */}
            {/* <View style={{ marginLeft: 50, display: 'flex', flexDirection: 'column' }}> */}
            <TextInput type='text' id='password' placeholder='Password' style={{
                height: 100,
                borderBottomWidth: 2,
                borderColor: 'red'
            }} />
            <TextInput type='text' placeholder='Password' style={{ height: 100, backgroundColor: 'white' }} />
            {/* </View> */}
            {/* </View> */}
            {/* <View style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}> */}
            <TextInput
                type='file'
                ref={ref => imageRef = ref}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageChange} placeholder='' style={{
                    height: 100,
                    borderBottomWidth: 2,
                    borderColor: 'red'
                }} />
            <View onClick={() => imageRef.click()} style={styles.imageInput}>
                <View style={styles.image}>
                    {
                        image &&
                        <ImageView alt='backgorundImage' src={image} />
                    }
                    {
                        loading &&
                        <Text>We Are Loading...................</Text>
                    }
                    {/* {
                                !image && !loading &&
                                <AddNewIcon />
                            } */}
                </View>
            </View>
            {/* </View> */}

        </View>
        // </View>
    )
}

export default AddProject
