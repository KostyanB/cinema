import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import { ContextProvider } from './components/Context';
// components
import Header from './components/Header';
import Movies from './components/Movies';
import Movie from './components/Movie';
import SomePage from './components/SomePage';
import PayPage from './components/PayPage';
import Page404 from './components/Styled/Page404';
import { ErrorLoad, Preloader } from './components/Styled/Preloader';
// hooks
import { useGetMoviesDb } from './components/Hooks/useGetMoviesDb';

function App() {
  const { moviesDb, error, loading } = useGetMoviesDb();

  return (
    <ContextProvider>
      <GlobalStyle/>
      {moviesDb &&
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
          <Route path="/paypage" component={PayPage}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
      }
      {loading && <Preloader/>}
      {error && <ErrorLoad>Sorry, nework error. We will fix it soon...</ErrorLoad>}
    </ContextProvider>
  );
}
export default App;