import React, { useState } from 'react'

import AddProject from '../AddProject'
import Collections from '../common/Collections'

const ProjectsPage = () => {

    const [addingProject, setAddingProject] = useState(false)
    const [collections, setCollections] = useState([])

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
        <div>
            <Collections
                pageTitle={'Maria Continuity'}
                collectionsArr={collections}
                createNewProject={createNewProject}
                collectionType={'Project'}
                goTo={`/project/`} />
            {
                addingProject &&
                <AddProject closeModal={closeModal} addProject={addProject} />
            }
        </div>
    )
}

export default ProjectsPage
