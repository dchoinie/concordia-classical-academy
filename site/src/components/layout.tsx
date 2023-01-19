import React from 'react'
import Footer from './footer'
import Header from './header'
import '@fortawesome/fontawesome-svg-core/styles.css';

const Layout = ({children}: any) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Layout