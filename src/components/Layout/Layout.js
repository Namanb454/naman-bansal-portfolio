import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from "react-helmet"

const Layout = ({ children, title }) => {
    return (
        <div className='w-[100%] mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>

            <div className='lg:w-full w-[100%] mx-auto fixed text-white text-center z-10'>
                <Navbar className='scroll-smooth z-1 relative' />
            </div>

            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Naman Bansal',
}

export default Layout