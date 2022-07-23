import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiAlertCircle, FiSearch } from 'react-icons/fi'
import { Input, Tooltip } from '@mantine/core'

function Header() {
    const rightSection = (
        <Tooltip label="We do not send spam" position="top" placement="end">
            <FiSearch size={24} style={{ display: 'block' }} />
        </Tooltip>
    );
    return (
        <>
            <section>
                <div>
                    <GiHamburgerMenu />
                    <Image src={logo} alt="logo" width={120} height={26} />
                </div>
                <div>
                    <form style={{ marginLeft: '20px', marginRight: '20px' }}>
                        <Input placeholder="Your email" rightSection={rightSection} classNames={{ rightSection: 'search-icon'}} />
                    </form>
                </div>
                <div>

                </div>
            </section>
        </>
    )
}

export default Header