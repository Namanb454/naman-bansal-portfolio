import React, { useState } from 'react'
import Contact from '../components/Layout/Contact';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

function GetInTouch() {

  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuserData({ ...userData, [name]: value })
  }

  // connect with Database 
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, message } = userData;

    if (firstName && lastName && phone && email && message) {
      const res = await fetch("https://portfolio-naman-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName, lastName, phone, email, message
          }),
        }
      );

      if (res) {
        setuserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        })
        // alert("Data Stored");
        // toast("Wow so easy !");
        toast.success('Done! Our team will contact you soon.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // toast.success("Our team will contact you soon");

      }
      else {
        toast.error('Invalid Credentials', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    else {
      // alert("Unfilled");
      toast.error('Invalid Credentials', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };


  return (
    <div class="max-w-screen-lg mx-auto p-5 py-20">
      <div class="flex flex-col text-center w-full">
        <h1 class="lg:w-[80%] mx-auto lg:text-3xl text-xl font-bold text-center lg:px-5 py-5 text-[#908a76] tracking-wider"> Get In
          <span className='lg:text-4xl text-2xl text-[#fff4d6] tracking-widest'> Touch</span></h1>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 border backdrop-blur-xl">
        <div class=" md:col-span-4 py-10 px-10 text-[#fff4d6]">
          <p class="mt-4 xl:text-3xl text-xl lg:mx-0 mx-auto w-fit leading-7 font-semibold uppercase tracking-wider">
            Social Links
          </p>
          <div className='my-10 w-fit lg:mx-0 mx-auto'>
            <Contact />
          </div>

          <div class="flex items-center mt-5">

            <a href='mailto: namanb454@gmail.com' class="text-base flex items-center tracking-wider lg:mx-0 mx-auto w-fit"><AiOutlineMail className='items-center' />&nbsp; namanb454@gmail.com</a>
          </div>
          <div class="flex items-center mt-5">

            <a href='tel:+919599791185' class="text-base items-center flex mx-auto w-fit lg:mx-0 "><AiOutlinePhone className='items-center tracking-wider' />&nbsp;+91 9599791185</a>
          </div>
        </div>

        <form method='POST' class="md:col-span-8 p-10">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-[#908a76] text-xs font-bold mb-2"
                for="grid-first-name">
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-[#908a76]/20 text-[#fff4d6] border border-[#fff4d6] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#908a76]/30"
                id="grid-first-name" type="text" name='firstName' placeholder="Elon" value={userData.firstName} onChange={postUserData} />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-[#908a76] text-xs font-bold mb-2"
                for="grid-last-name">
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-[#908a76]/20 text-[#fff4d6] border border-[#fff4d6] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#908a76]/30 focus:border-gray-500"
                id="grid-last-name" type="text" name='lastName' placeholder="Musk" value={userData.lastName} onChange={postUserData} />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-[#908a76] text-xs font-bold mb-2"
                for="grid-first-name">
                Phone
              </label>
              <input
                class="appearance-none block w-full bg-[#908a76]/20 text-[#fff4d6] border border-[#fff4d6] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#908a76]/30"
                id="grid-first-name" type="number" name='phone' placeholder="+91 XXXXXXXXXX" value={userData.phone} onChange={postUserData} />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-[#908a76] text-xs font-bold mb-2"
                for="grid-last-name">
                E-mail
              </label>
              <input
                class="appearance-none block w-full bg-[#908a76]/20 text-[#fff4d6] border border-[#fff4d6] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[#908a76]/30 focus:border-gray-500"
                id="grid-last-name" type="email" name='email' placeholder="example123@gmail.com" value={userData.email} onChange={postUserData} />
            </div>
          </div>


          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-[#908a76] text-xs font-bold mb-2"
                for="grid-password">
                Your Message
              </label>
              <textarea type='text' name='message' placeholder="" value={userData.message} onChange={postUserData} rows="10"
                class="appearance-none block w-full bg-[#908a76]/20 text-[#fff4d6] border border-[#fff4d6] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#908a76]/30 focus:border-gray-500"></textarea>
            </div>
            <div class="mx-auto justify-between w-fit px-3">
              <motion.button
                whileTap={{
                  scale: 0.8,
                  borderRadius: "100%",
                }}
                data-te-ripple-init
                data-te-ripple-color="light"
                class="shadow bg-[#908a76]/20 hover:bg-[#908a76]/40 backdrop-blur-3xl focus:shadow-outline focus:outline-none text-[#fff4d6] font-bold py-2 px-6 rounded"
                type='submit' onClick={submitData}>
                Send Message
              </motion.button>
            </div>

          </div>

        </form>

      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    // <!-- Container for demo purpose -->
  )
}

export default GetInTouch;