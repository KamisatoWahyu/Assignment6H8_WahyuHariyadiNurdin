import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import axios from 'axios';

function App() {
  const [movieData, setMovieData] = useState([]);

  const searchKeyword = useSelector((state) => (state.keyword));

  console.log(process.env.REACT_APP_API_KEY)
  useEffect(() => {
    const fetchMovie = async (search) => {
      try {
        const res = await axios.get('https://www.omdbapi.com', {
          params : {
            's':`${search}`,
            'apikey':process.env.REACT_APP_API_KEY
          }
        });
          setMovieData(res.data.Search);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }
    fetchMovie(searchKeyword || 'Movie');
  }, [searchKeyword]);

  return (
    <>
      <Header />
      <br />
      <Search />
      <Movie 
        movieData = {movieData}
      />
    </>
  )    
}

export default App;
