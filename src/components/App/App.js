import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Video from '../Video/Video';
import Form from '../Form/Form';
import StorySection from '../StorySection/StorySection';
import AppsSection from '../AppsSection/AppsSection';
import ExpertsSection from '../ExpertsSection/ExpertsSection';
import ImageCard1 from '../ImageCard1/ImageCard1';


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Video/>
      <Form/>
      <StorySection/>
      <AppsSection/>
      <ExpertsSection/>
      <ImageCard1/>
    </React.Fragment>
  );
}

export default App;