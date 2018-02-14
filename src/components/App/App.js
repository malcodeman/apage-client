import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Video from '../Video/Video';
import Form from '../Form/Form';
import StorySection from '../StorySection/StorySection';
import AppsSection from '../AppsSection/AppsSection';
import ExpertsSection from '../ExpertsSection/ExpertsSection';
import ImageCard1 from '../ImageCard1/ImageCard1';
import ImageCard2 from '../ImageCard2/ImageCard2';
import ImageCard3 from '../ImageCard3/ImageCard3';
import AboutSection from '../AboutSection/AboutSection';
import Footer from '../Footer/Footer';
import HeroImage from '../HeroImage/HeroImage';
import ViewportHeight from '../ViewportHeight/ViewportHeight';
import Scroll from '../Scroll/Scroll';

const App = () => {
  return (
    <React.Fragment>
      <HeroImage/>
      <Header/>
      <ViewportHeight>
        <Video/>
        <Form placeholder="Enter email adress to stay informed" value="Launching at summer 2018"/>
        <Scroll/>
      </ViewportHeight>      
      <StorySection/>
      <AppsSection/>
      <ExpertsSection/>
      <ImageCard1/>
      <ImageCard2/>    
      <ImageCard3/>
      <AboutSection/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;