import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArtistTable from '../src/components/ArtistTable';
import SpotifyPlayer from './components/SpotifyPlayer';
import PlayerModal from './components/PlayerModal';

function App() {

  return (
    <div className="App">
      <ArtistTable />
    </div>
  );
}

export default App;
