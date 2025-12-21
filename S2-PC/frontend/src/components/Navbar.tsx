import React from 'react'
import { House, LogOut, Palette } from 'lucide-react'

const Navbar = function() {
  return (
    <div className='my-nav-container'>
        <div className='my-nav'>
            <div className='nav-icon-container'>
                <House size={28} className='nav-icon'/>
            </div>
            <div className='my-nav-right'>
                <div className='nav-icon-container'>
                    <Palette size={28} className='nav-icon'/>
                </div>
                <div className='nav-icon-container'>
                    <LogOut size={28} className='nav-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar