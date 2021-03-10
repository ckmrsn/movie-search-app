import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Card from '../components/Card';
import '../styles/Favorite.css';

const Favorite = () => {
  const { favorite, favoriteHandler } = useContext(MovieContext);

  return (
    <>
      {favorite?.length ? (
        <div className='favorites'>
          {favorite.map((movie) => (
            <Card
              key={movie.imdbID}
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              addFavorite={(e) => favoriteHandler(movie, e)}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className='favorite_warning'> There is no favorite movie.</div>
      )}
    </>
  );
};

export default Favorite;
