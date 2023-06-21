
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Characters from './Characters/Characters';
import Episodes from './Episode/Episode';
import Location from './Location/Location';
import MyList from './MyList/MyList';
import MenuBar from './MenuBar/MenuBar';
import { useState } from 'react';


function App() {
  const [openHeader, setOpenHeader] = useState(true)
  const [openMain, setOpenMain] = useState(true)
  const [openCharacters, setOpenCharacters] = useState(true)
  const [openEpisodes, setOpenEpisodes] = useState(true)
  const [openLocation, setOpenLocation] = useState(true)
  const [openMyList, setOpenMyList] = useState(true)
  const [openMenuBar, setOpenMenuBar] = useState(false)

  const OpenMenu = () => {
    setOpenMenuBar(true)

  }
  const CloseMenu = () => {
    setOpenMenuBar(false)

  }


  return (
    <div className="App">
      {
        openHeader && (
          <Header OpenMenu={OpenMenu} />

        )

      }
      {
        openMenuBar && (
          <MenuBar CloseMenu={CloseMenu} />

        )
      }
      {
        openMain && (
          <Main />

        )
      }
      {
        openCharacters && (
          <Characters />

        )
      }

      {
        openEpisodes && (
          <Episodes />

        )
      }
      {
        openLocation && (
          <Location />

        )
      }

      {
        openMyList && (
          <MyList />

        )
      }







    </div>
  );
}

export default App;
