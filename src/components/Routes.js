import ProjectsScreen from "./pages/ProjectsScreen"
import CharactersScreen from "./pages/CharactersScreen"
import AddProject from "./AddProject"

const routes = [
    {
        name: 'Home',
        component: ProjectsScreen
    },
    {
        name: 'Character',
        component: CharactersScreen
    },
    {
        name: 'Project',
        component: AddProject
    }
]

export default routes