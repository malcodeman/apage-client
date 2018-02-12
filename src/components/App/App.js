import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Video from '../Video/Video';
import Form from '../Form/Form';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Video/>
      <Form/>        
    </React.Fragment>
  );
}

export default App;