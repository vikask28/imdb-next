import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-12'>
        <NavbarItem title='Bollywood' 
        param='bollywood' />
        <NavbarItem title='Hollywood' 
        param='hollywood' />
    </div>
  )
}

export default Navbar