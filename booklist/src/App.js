import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar'
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import SongContextProvider from './contexts/SongContext';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookForm/>
        <BookList/>
      </BookContextProvider>
      <SongContextProvider>
        <SongForm/>
        <SongList/>
      </SongContextProvider>
    </div>
  );
}

export default App;
