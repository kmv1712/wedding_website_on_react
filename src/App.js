import React, { Component } from 'react'
import "./App.css";
import CarouselBox from "./Components/CarouselBox";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import dummyText from "./DummyText";
import CelebrateTimer from "./Components/CelebrateTimer";
import WeddingEvents from "./Components/WeddingEvents";
import Section from "./Components/Section";
import Invitation from "./Components/Invitation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Invitation/>
        <CarouselBox
          title="CarouselBox"
          id="carouselbox"
        />
        <CelebrateTimer
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="CelebrateTimer"
        />
        <WeddingEvents
          // title="Section 3"
          // subtitle={dummyText}
          // dark={true}
          // id="section3"
        />
        <Footer
          title="Footer"
          subtitle={''}
          dark={false}
          id="footer"
        />
      </div>
    );
  }
}

export default App;
