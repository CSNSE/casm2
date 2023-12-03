import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Nav, ConsentForm,Survey,Ty, Models, Home} from "./ui-components";
import {Routes, Route} from 'react-router-dom'

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><Nav/><ConsentForm/></div>} />
<Route exact path='/' element={<div><Nav/><Home/></div>} />
<Route exact path='/survey' element= {<Survey/>} />
<Route exact path='/ty' element= {<Ty/>} />
<Route exact path='/model' element= {<Models/>} />
<Route exact path='/home' element= {<Home/>} 

/>


</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);
