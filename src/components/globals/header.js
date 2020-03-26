import React from 'react'

import { Link } from 'gatsby'

import Navbar from './navbar'

const Header = () => {
    return (
        <header>
            <Navbar />
            <main className="welcome-header">
            </main>
        </header>
    )
}

export default Header