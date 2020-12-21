import ProjectsScreen from "./pages/ProjectsScreen"
import CharactersScreen from "./pages/CharactersScreen"
import AddProject from "./AddProject"
import SheetsScreen from "./pages/SheetsScreen"

const routes = [
    {
        name: 'project',
        component: ProjectsScreen
    },
    {
        name: 'character',
        component: CharactersScreen
    },
    {
        name: 'sheet',
        component: SheetsScreen
    },
    {
        name: 'createProject',
        component: AddProject
    }
]

export default routes