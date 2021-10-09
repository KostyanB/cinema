// import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context } from './components/Functions/Context';
import { GlobalStyle } from './components/Styled/GlobalStyle';
// components
import Header from './components/Header';
// import Promo from './components/Promo';
import Movies from './components/Movies';
import Movie from './components/Movie';
import SomePage from './components/SomePage';
import Page404 from './components/Page404';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';
// hooks
import { useGetMoviesDb } from './components/Hooks/useGetMoviesDb';
import { useAsync } from './components/Hooks/useAsync';
import { useSelectedMovie } from './components/Hooks/useSelectedMovie';
import { useBackgroundImg } from './components/Hooks/useBackgroundImg';

function App() {
  const getMovies = useGetMoviesDb();
  const selectedMovie = useSelectedMovie();
  const backgroundImg = useBackgroundImg();

  const asyncTask = async () => {
    getMovies.getMoviesDb();
  };

  const { loading, error, execute } = useAsync({
    asyncFn: asyncTask,
  });

  useEffect(() => execute(), []);

  return (
    <Context.Provider value={{
      getMovies,
      selectedMovie,
      backgroundImg,
    }}>
      <GlobalStyle/>
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Movies}/>
          <Route path="/main" component={SomePage}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/movie/:movie" component={Movie}/>
          <Route path="/cinemas" component={SomePage}/>
          <Route path="/events" component={SomePage}/>
          <Route path="/support" component={SomePage}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
      {loading && <Preloader/>}
      {error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
    </Context.Provider>
  );
}

export default App;