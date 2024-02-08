import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Nav, ConsentForm,Contact,About, Hprofile, Profile, Survey,Ty,Pic, Title,SurveyModelEyeCollection, ModelVidCollection, TodoCreateForm} from "./ui-components";
//import {Routes, Route} from 'react-router-dom'
import EditF from './EditF'

// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Title />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
