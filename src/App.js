import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';

// import profile from './assets/profile.jpeg';

import Header from './components/Header';

 function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    });

  }, [])

  function handleAddProject() {
    projects.push(`Novo Projeto:  ${Date.now()}`)

    setProjects([...projects, `Novo Projeto:  ${Date.now()}`]);
  }

  return  (
    <>
      <Header title="Projects"/>
        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
  
}
export default App;
