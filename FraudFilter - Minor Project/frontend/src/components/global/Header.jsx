import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-green-600">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around">
                <a className="flex title-font font-medium items-center text-gray-900 cursor-pointer mb-4 md:mb-0">
                    <span className="ml-3 font-ananda font-bold text-4xl text-white cursor-pointer hover:text-gray-800">Fraud Filter</span>
                </a>
                <nav className=" flex flex-wrap items-center text-base font-sans font-bold justify-center text-white cursor-pointer">
                    <NavLink to="/" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-black border-red-500" : "mr-5 hover:text-gray-900"}>HOME</NavLink>
                    <NavLink to="/features" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-black border-red-500" : "mr-5 hover:text-gray-900"}>WORKING & FEATURES</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-black border-red-500" : "mr-5 hover:text-gray-900"}>ABOUT</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-black border-red-500" : "mr-5 hover:text-gray-900"}>CONTACTS</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-black border-red-500" : "mr-5 hover:text-gray-900"}>BLOGS</NavLink>
                    <NavLink to="/faq" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-black border-red-500" : "mr-5 hover:text-gray-900"}>FAQ's</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
