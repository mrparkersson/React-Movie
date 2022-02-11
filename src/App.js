import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Filter';
import Movie from './Movie';
import { motion } from 'framer-motion';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(35);

  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const movieData = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=9fe06d35271fe962991d81d0eea21867&language=en-US&page=1'
    );
    const response = await movieData.json();
    setPopular(response.results);
    setFiltered(response.results);
  };

  return (
    <div className='App'>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className='popular-movies'>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
}

export default App;
