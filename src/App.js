import './App.css';

import { 
  HashRouter, 
  Route, 
  Routes 
} from 'react-router-dom';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { ProjectPage } from './pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:projectId' element={<ProjectPage />} />
        </Routes>
      
      </HashRouter>
    </div>
  );
}

export default App;
