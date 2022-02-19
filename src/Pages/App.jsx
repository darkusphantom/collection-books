import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import { Home } from './Home';
import { Library } from './Library';
import { ErrorNotFound } from './ErrorNotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/library" component={Library} />
        <Route component={ErrorNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
