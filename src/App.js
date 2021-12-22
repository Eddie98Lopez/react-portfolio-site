import React from 'react'
import {AppWrapper} from './components/styled-components'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'

import './App.css'


/*<Helmet><title>Illustrator | Graphic Desiger | Eddie Lopez | Fresno CA</title>*/

function App() {


  return (
    <AppWrapper className="App">
      <div className="left">Navigation</div>
      <div className="right">
        <Switch>
          <Route path='/' component={Home}/>
          

        </Switch>
      </div>
    </AppWrapper>
  );
}

export default App;
