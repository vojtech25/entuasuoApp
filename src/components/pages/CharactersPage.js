import React, { useState } from 'react'

import AddProject from '../AddProject'
import Collections from '../common/Collections'

const CharactersPage = () => {

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
                collectionType={'Character'}
                goTo={`/character/`} />
            {
                addingCharacter &&
                <AddProject closeModal={closeModal} addProject={addCharacter} />
            }
        </div>
    )
}

export default CharactersPage
