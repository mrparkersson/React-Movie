import { motion } from 'framer-motion';
const Movie = ({ movie }) => {
  return (
    <motion.div layout className='movies-container'>
      <h2>{movie.title}</h2>
      <img
        src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
        alt='tmdb images'
      />
    </motion.div>
  );
};

export default Movie;
