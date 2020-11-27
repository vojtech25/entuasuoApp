import React, { useState } from 'react'

import AddProject from '../AddProject'
import Collections from '../common/Collections'

const ScenesPage = () => {

    const [addingCharacter, setAddingCharacter] = useState(false)
    const [characters, setCharacters] = useState([])

    const closeModal = () => {
        setAddingCharacter(false)
    }

    const createNewCharacter = () => {
        setAddingCharacter(true)
    }

    const addCharacter = (name, image) => {
        const newCharacter = {
            name,
            image
        }
        setCharacters([
            newCharacter,
            ...characters
        ])
        closeModal()
    }

    return (
        <div>
            <Collections
                collectionsArr={characters}
                createNewProject={createNewCharacter}
                collectionType={'Sheet'}
                goTo={`/scene/`} />
            {
                addingCharacter &&
                <AddProject closeModal={closeModal} addProject={addCharacter} />
            }
        </div>
    )
}

export default ScenesPage
