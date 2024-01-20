import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import Main from '../components/Layout/Main';
import About from './About';
import Services from './Services';
import Features from './Features';
import ScrollButton from '../components/Layout/ScrollButton';
import Pricing from './Pricing';
import Projects from './Projects';
import GetInTouch from './GetInTouch';
import Aos from 'aos'


function Home() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <Layout>
      <div className='bg-cover bg-fixed '
        style={{
          backgroundImage: 'url(headerbg.jpg)',
        }}
        // data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-delay="50"
        >

        <div className=''>
          <Main />
        </div>

        <div id='about'>
          <About />
        </div>

        <div id='projects'>
          {/* <HeroScroll /> */}
          <Projects />
        </div>

        <div className="overflow-y-scroll">
          <ScrollButton />
        </div>

        <div id='services'>
          <Services />
        </div>

        <div id='features'>
          <Features />
        </div>

        <div id='pricing'>
          {/* <MeteorPreview /> */}
          <Pricing />
        </div>

        <div id='contact'>
          <GetInTouch />
        </div>
      </div>

    </Layout>
  )
}

export default Home
