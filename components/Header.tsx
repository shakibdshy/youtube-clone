import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'

function Header() {
    return (
        <>
            <section>
                <div>
                    <GiHamburgerMenu />
                    <Image src={logo} alt="logo" width={120} height={26} />
                </div>
                <div>
                    <form>
                        <input type="search" placeholder="Search" />
                        <button><FiSearch /></button>
                    </form>
                </div>
                <div>

                </div>
            </section>
        </>
    )
}

export default Header