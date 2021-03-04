import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


import Home from './pages/Home/Home'
import SearchPage from './pages/SearchPage/SearchPage'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
