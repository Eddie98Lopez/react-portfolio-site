import React from 'react'
import {AppWrapper} from './components/styled-components'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'

import './App.css'


/*<Helmet><title>Illustrator | Graphic Desiger | Eddie Lopez | Fresno CA</title>*/

function App() {


  return (
    <ThemeProvider theme={theme}>
    <AppWrapper className="App">
      <div className="left">Navigation</div>
      <div className="right">
        <Switch>
          <Route path='/' component={Home}/>
          

        </Switch>
      </div>
    </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
