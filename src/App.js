import React,{useState,useEffect} from 'react'
import {Switch,Route, useLocation} from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Illustration from './components/Illustration'
import Photography from './components/Photography'
import Design from './components/Design'
import About from './components/About'
import './App.css'
import Contact from './components/Contact'
import {Helmet} from 'react-helmet'
import keywords from './keywords.js'

function App() {

  const [page,setPage]= useState(true)

  const homeLocation = useLocation().pathname
  const location = useLocation()

  useEffect(()=>{

    homeLocation === '/'? setPage(true): setPage(false)

  },[location,homeLocation])


  //console.log(page)

  //console.dir(Switch)

  return (
    <div className="App">

      
        {page === true && <Header/>}

        <Navigation/>

        

        <Switch>

          <Route exact path='/'>
            <Helmet><title>Illustrator | Graphic Desiger | Eddie Lopez | Fresno CA</title>
            <meta name='description' content='Eddie Lopez. Local freelance designer, illustrator, and photographer in the Fresno area.'/>
            <meta name='keywords' content={keywords}/></Helmet>
            
          
            <Home/>
          </Route>

          <Route exact path='/illustration'>
            <Helmet><title>Illustration | Eddie Lopez | Portfolio</title></Helmet>
            
            <Illustration/>
          </Route>

          <Route exact path='/photography'>
          <Helmet><title>Photography | Eddie Lopez | Portfolio</title></Helmet>
            <Photography/>
          </Route>

          <Route exact path='/design'>
          <Helmet><title>Design | Eddie Lopez | Portfolio</title></Helmet>
            <Design/>
          </Route>

          <Route exact path='/about'>
            <Helmet><title>About Me | Eddie Lopez | Fresno CA</title></Helmet>
            <About/>
          </Route>

          <Route exact path='/contact'>
          <Helmet><title>Contact | Eddie Lopez | Fresno CA</title></Helmet>
            <Contact/>
          </Route>

          <Route path = '*'>
            <h1>Sorry looks like this page couldnt be found or doesn't exist.</h1>
            <p>try navigating back to home.</p>
          </Route>


        </Switch>
      
      
    </div>
  );
}

export default App;
