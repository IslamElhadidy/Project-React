import React from 'react'
import About from './components/About/About'
import Accordion from './components/Accordion/Accordion'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Overview from './components/Overview/Overview'
import Programs from './components/Programs/Programs'
import Register from './components/Register/Register'
import Speakers from './components/Speakers/Speakers'
import Sponsors from './components/Sponsors/Sponsors'
import Venue from './components/Venue/Venue'
import Video from './components/Video/Video'

function HomePage() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Overview />
        <Video />
        <Speakers />
        <Programs />
        <Register />
        <Accordion />
        <Venue />
        <Sponsors />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage