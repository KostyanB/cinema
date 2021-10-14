import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Context } from './components/Functions/Context';
import { GlobalStyle } from './components/Styled/GlobalStyle';
// components
import Header from './components/Header';
import Movies from './components/Movies';
import Movie from './components/Movie';
import SomePage from './components/SomePage';
import PayPage from './components/PayPage';
import Page404 from './components/Page404';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';
// hooks
import { useGetMoviesDb } from './components/Hooks/useGetMoviesDb';
import { useGetSessionsDb } from './components/Hooks/useGetSessionsDb';
// import { useAsync } from './components/Hooks/useAsync';
import { useBackgroundImg } from './components/Hooks/useBackgroundImg';
import { useCalendar } from './components/Hooks/useCalendar';
import { useSelectors } from './components/Hooks/useSelectors';
import { useReserved } from './components/Hooks/useReserved';
// import {  useFetch } from './components/Hooks/useFetch';

function App() {
  const getMovies = useGetMoviesDb();
  const getSessions = useGetSessionsDb();
  const backgroundImg = useBackgroundImg();
  const calendar = useCalendar();
  const selectors = useSelectors();
  const reserved = useReserved();
  // const moviesData = useFetch();

  // moviesData.responce && getMovies.handleMoviesDb(moviesData.responce);
  // useEffect(() => {
  // }, []);
  // console.log(' moviesData.responce: ',  moviesData.responce);

  // const asyncTask = async () => {
  //   getMovies.getMoviesDb();
  // };

  // const { loading, error, execute } = useAsync({
  //   asyncFn: asyncTask,
  // });

  // useEffect(() => execute(), []);

  return (
    <Context.Provider value={{
      getMovies,
      getSessions,
      backgroundImg,
      calendar,
      selectors,
      reserved,
    }}>
      <GlobalStyle/>
      <Router>
      <Header/>
      {getMovies.moviesDb &&
        <Switch>
          <Route exact path="/" component={Movies}/>
          <Route path="/main" component={SomePage}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/movie/:movie" component={Movie}/>
          <Route path="/cinemas" component={SomePage}/>
          <Route path="/events" component={SomePage}/>
          <Route path="/support" component={SomePage}/>
          <Route path="/paypage" component={PayPage}/>
          <Route component={Page404}/>
        </Switch>
      }
      </Router>
      {getMovies.loading && <Preloader/>}
      {getMovies.error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
    </Context.Provider>
  );
}

export default App;