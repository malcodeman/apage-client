import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import Inspiration from "./Inspiration";
import SignUp from "./SignUp";
import Footer from "./Footer";

function Home(props) {
  return (
    <>
      <Header />
      <Hero />
      <Inspiration />
      <SignUp />
      <Footer />
    </>
  );
}

export default Home;
