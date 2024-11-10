
import React from 'react'
import Menu from '../component/Menu'
import { Link } from 'react-router-dom'
import { ABOUT, ACCUEIL } from '../urls'
import Footer from '../component/Footer'

export default function Layout({children}) {
  return (
    <div>
    {/* menu */}
    <Menu color={"blue"}>
        <li><Link to={ACCUEIL}>Accueil</Link></li>
        <li><Link to={ABOUT}>About</Link></li>
    </Menu>

    {children}

    {/* footer */}
    <Footer>
        <h2>Footer</h2>
    </Footer>

      
    </div>
  )
}
