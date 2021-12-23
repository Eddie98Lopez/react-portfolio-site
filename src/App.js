import React from 'react'
import {AppWrapper} from './components/styled-components'
import Navigation from './components/Navigation'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'

import './App.css'
import Gallery from './components/Gallery'


/*<Helmet><title>Illustrator | Graphic Desiger | Eddie Lopez | Fresno CA</title>*/

function App() {


  return (
    <ThemeProvider theme={theme}>
    <AppWrapper className="App">
      <Navigation/>
      <div className="right">
        <Switch>
        <Route path='/:gallery' component={Gallery}/>
          <Route exact path='/' component={Home}/>
          

        </Switch>
      </div>
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
