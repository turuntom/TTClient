import React from 'react';
import './App.css';
import Pohjapiirros from './Pohjapiirros'

//TODO API haun suunnittelu, joko suoraan inforuutu komponenttiin
// tai sitten Contextiin ja varsinainen fetchaus omaan komponenttiin tms.


function App() {
  return (
    <Pohjapiirros lampotila="Lämpötila: 23C"></Pohjapiirros>
  );
}

export default App;


