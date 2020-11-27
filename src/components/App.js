import { Route, Switch } from 'react-router-dom';
import Collections from './common/Collections'
import CharactersPage from './pages/CharactersPage';
import ProjectsPage from './pages/HomeScreen';
import ScenesPage from './pages/ScenesPage';
import SingleCharacterScene from './pages/SingleCharacterScene';

function App() {

  return (
    <Switch>
      <Route exact path={'/'}>
        <ProjectsPage />
      </Route>
      <Route exact path={'/character/:characterId'}>
        <ScenesPage />
      </Route>
      <Route exact path={'/scene/:sceneId'}>
        <SingleCharacterScene />
      </Route>
      <Route exact path={'/project/:projectId'}>
        <CharactersPage />
      </Route>
    </Switch>

  );
}

export default App;
