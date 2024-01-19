import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
// import Navbar from './Navbar'
import AnimatedButton from './AnimatedButton';
import Aos from 'aos'

function Main() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='w-[100%] '>
      <div className='lg:pb-0 pb-10 overflow-hidden relative '>


        <div className=" w-full lg:h-screen h-[100%] overflow-hidden bg-cover bg-fixed bg-opacity-25"
        >
          {/* <div className='lg:w-full w-full fixed text-[#fff4d6] text-center z-10 '> */}
          {/* <Navbar /> */}
          {/* </div> */}

          <section class="text-[#fff4d6] body-font lg:my-32 my-24 ">
            <div class=" w-[90%] mx-auto xl:px-20 md:flex-row flex flex-col items-center">


              {/* <div className="mockup-code w-full bg-opacity-50 items-start mr-auto">
                <pre data-prefix="$"><code>Hello World</code></pre>
              </div> */}
              <div class="lg:flex-grow flex md:w-1/3 mb-16 md:mb-0 items-center text-center">

                <div className='w-1/2 flex-grow space-y-5'>
                  <h2 className='w-full lg:text-xl text-lg font-bold lg:text-left text-center lg:mx-0 py-2 md:mb-5 tracking-widest text-[#908a76]' id='signupHeading'>
                    <span
                      data-aos="zoom-out-right"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                      id='naman'
                    >
                      Hey!<span className='lg:text-2xl text-xl text-[#fff4d6] lg:text-left text-center'> Naman </span>this side
                    </span>
                    <br />
                    &nbsp;

                    <div className='lg:w-fit w-fit lg:text-2xl flex text-lg lg:text-left text-center font-bold lg:mx-0 mx-auto text-[#fff4d6]/90' id='signupsubHeading'
                      data-aos="zoom-out-right"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <h3 className='text-[#908a76]'
                      >I'm a&nbsp;</h3>
                      <Typewriter

                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 40,
                          strings: [
                            "Freelancer", "Frontend Developer", "Backend Developer", "FullStackDeveloper", "Data Analyst", "Badminton Player", "Chess Player"
                          ],
                        }} />
                      {/* </div> */}
                    </div>
                  </h2>
                  <div class=" xl:w-[60%] md:justify-start items-end">
                    <h3 className='text-[#908a76] lg:text-base text-xs lg:mx-0 lg:text-justify text-center tracking-wider'
                      data-aos="zoom-out-right"
                      data-aos-duration="1000"
                      data-aos-delay="600">
                      Web development: Where creativity meets code, and innovation becomes interactive. </h3>
                  </div>

                  {/* for mobile image  */}
                  <div class="lg:w-0 w-full z-0 ">
                    <img src="profile2.png" alt="Profile" className='items-start w-[50%] mx-auto rounded-full h-full transition-transform' data-aos="zoom-in-left"
                      data-aos-duration="1000" />
                  </div>

                  <div className='lg:flex lg:my-20 my-5 lg:mx-0 mx-auto w-fit relative z-0 xl:space-y-0 space-y-10'>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      className='lg:my-0 my-10'
                    >
                      <AnimatedButton />
                    </div>
                    <div
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      className=''
                    >
                      <a href='NamanBansalPersonalResume.pdf' download className=' lg:mx-10 mx-auto relative lg:text-base text-sm py-2 px-10 lg:w-28 w-0 h-10 border-b-4 border-[#fff4d6] rounded-sm bg-[#fff4d6]/[0.8] text-black/[0.8] tracking-widest font-semibold text-center hover:bg-transparent hover:text-[#fff4d6] ease-in-out duration-300'>Download CV </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Desktop */}
              <div class="lg:max-w-xl lg:w-1/4 md:w-1/2 w-0 z-0 hover:origin-bottom-right hover:rotate-12 ease-in-out duration-700">
                <img src="profile2.png" alt="Profile" className='hover:origin-top items-start w-[100%] mx-auto rounded-lg h-full transition-transform' data-aos="zoom-in-left"
                  data-aos-duration="1000" />
              </div>
            </div>


          </section>
        </div>
      </div>
    </div>
  )
}

export default Main
