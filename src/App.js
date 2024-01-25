import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Nav, ConsentForm,Survey,Ty, Contact, Title,SurveyModelEyeCollection, ModelVidCollection, TodoCreateForm, MContactCollection} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
import EditF from './EditF'
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><Nav/><Title/></div>} />
<Route exact path='/consent' element= {<div><Nav/><ConsentForm/></div>} />
<Route exact path='/survey' element= {<div><Nav/><Survey/></div>} />
<Route exact path='/ty' element= {<Ty/>} />
<Route exact path='/model' element= {<div><Nav/><SurveyModelEyeCollection isPaginated itemsPerPage={1}/><ModelVidCollection isPaginated itemsPerPage={1}/><Ty/></div>} />
<Route exact path='/edit/:cid' element= {<EditF/>} />
<Route exact path='/video' element= {<div><Nav/><TodoCreateForm/></div>} />
<Route exact path='/contactm' element= {<div><Nav/><MContactCollection/></div>} />
<Route exact path='/contact' element= {<div><Nav/><Contact/></div>} />
<Route exact path='/home' element= {<div><Nav/><Title/></div>} 
/>
</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);
