import React from 'react'

function Navbar() {
    return (
        <nav className='sticky w-full h-16 bg-red-600'>
            <div className='flex justify-start p-3 gap-6 items-center'>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                </a>
                <img src='/Poke-logo.png' className='h-10'/>
            </div>
        </nav>
    )
}

export default Navbar