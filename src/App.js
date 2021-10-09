// import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context } from './components/Functions/Context';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import env from './env.json';
// components
import Header from './components/Header';
// import Promo from './components/Promo';
import Main from './components/Main';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Cinemas from './components/Cinemas';
import Events from './components/Events';
import Support from './components/Support';
import Page404 from './components/Page404';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';
// hooks
import { useGetMoviesDb } from './components/Hooks/useGetMoviesDb';
import { useAsync } from './components/Hooks/useAsync';
import { useSelectedMovie } from './components/Hooks/useSelectedMovie';


function App() {
  // const getDb = useFetch();
  const { moviesDbUrl } = env.backend;
  const getMovies = useGetMoviesDb();
  const asyncTask = async () => {
    // fetch(moviesDbUrl);
    // const json = await fetch(env.backend.moviesDbUrl);
    // const res = await json.json();
    // console.log('res: ', res);
    getMovies.getMoviesDb();
  }
  const { loading, result, error, execute } = useAsync({
    asyncFn: asyncTask,
  });
  const selectedMovie = useSelectedMovie();



  useEffect(() => {
    console.log('effect');
    execute();
    // result && console.log('result  ', result);
    // const { handleMoviesDb } = getMovies;
    // const db = execute();
    // handleMoviesDb(db);

  }, []);

  return (
    <Context.Provider value={{
      getMovies,
      selectedMovie,
    }}>
      <GlobalStyle/>

      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Movies}/>
          {/* <Route exact path="/" component={Promo}/> */}
          <Route path="/main" component={Main}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/movie/:movie" component={Movie}/>
          <Route path="/cinemas" component={Cinemas}/>
          <Route path="/events" component={Events}/>
          <Route path="/support" component={Support}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
      {loading && <Preloader/>}
      {error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
    </Context.Provider>
  );
}

export default App;