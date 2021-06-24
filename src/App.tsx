import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import Home from './containers/home/Home';
import SuperHeroCard from './components/superhero-card/SuperHeroCard'
import NotFound from './containers/not-found/NotFound'
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/superhero/card/:id">
            <SuperHeroCard />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </Router>
      </Provider>
    </>
  );
}

export default App;
