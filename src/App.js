import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import { Context } from './components/Context';
// components
import Header from './components/Header';
import Movies from './components/Movies';
import Preloader from './components/Styled/Loaders/Preloader';
import ErrorLoad from './components/Styled/Loaders/ErrorLoad';
// lazy components
const Movie = lazy(() => import('./components/Movie'));
const SomePage = lazy(() => import('./components/SomePage'));
const PayPage = lazy(() => import('./components/PayPage'));
const Page404 = lazy(() => import('./components/Styled/Page404'));

//************************************ */
function App() {
  const {
    loading: {
      error,
      loading
    }
  } = useContext(Context);

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Suspense fallback={<Preloader/>}>
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
        </Suspense>
      </Router>
      {loading && <Preloader/>}
      {error && <ErrorLoad/>}
    </>
  );
}
export default App;