import { Link, useParams } from 'react-router-dom';

import Header from './Header';
import AddCard from './AddCard';

import styles from './styles/Collections.module.scss'

function App({ collectionsArr, pageTitle, createNewProject, collectionType, goTo }) {

    const title = useParams().projectId
    console.log('What is Loc', title)
    return (
        <div>
            <Header center={pageTitle ? pageTitle : title} />
            {
                <div className={styles.projectArea}>
                    {
                        collectionsArr &&
                        collectionsArr.map((prgt, index) => {
                            return (
                                <Link
                                    to={{
                                        pathname: `${prgt.name}`,
                                        project: { ...prgt }
                                    }}
                                    key={index}>

                                    <AddCard image={prgt.image} title={prgt.name} />
                                </Link>
                            )
                        })
                    }
                    {
                        !collectionsArr &&
                        <p>No Collection to Display</p>
                    }
                    <div onClick={createNewProject}>
                        <AddCard title={`Add ${collectionType}`} />
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
