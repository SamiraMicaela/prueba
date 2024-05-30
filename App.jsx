import React, { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieSelect = (id) => {
    setSelectedMovieId(id);
  };

  return (
    <>
      <div>
        <MovieList onSelectMovie={handleMovieSelect} />
        {selectedMovieId && <MovieDetails movieId={selectedMovieId} />}
      </div>
    </>
  );
};

export default App;
