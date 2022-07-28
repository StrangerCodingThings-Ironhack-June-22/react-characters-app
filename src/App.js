import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

function App() {

  const [characters, setCharacters] = useState(null);

  useEffect( () => {
    fetchCharacters();
  }, []);


  const fetchCharacters = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + '/characters')
      .then((response) => {
        const allCharacters = response.data;
        const fistTen = allCharacters.slice(0, 10)
        setCharacters(fistTen);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  const deleteCharacter = (id) => {
    axios
      .delete(process.env.REACT_APP_API_BASE_URL + '/characters/' + id)
      .then((response) => {
        fetchCharacters();
      })
      .catch((e) => {
        console.log(e);
      });
  }


  return (
    <div className="App">

      <header>
        <h1>React Charates App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/characters' element={ <CharacterList characters={characters} callbackToDelete={deleteCharacter} />}></Route>
        <Route path='/characters/:characterId' element={ <CharacterDetails />} />
        <Route path='/about' element={ <About />}></Route>
      </Routes>


    </div>
  );
}

export default App;
