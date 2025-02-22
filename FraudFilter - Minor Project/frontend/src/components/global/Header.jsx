import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-[#142F32]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <a className="flex title-font font-medium items-center cursor-pointer mb-4 md:mb-0">
                    <span className="ml-3 font-ananda font-bold text-4xl text-white cursor-pointer hover:text-[#E4FFCD]">Fraud Filter</span>
                </a>
                <nav className=" flex flex-wrap items-center text-base font-sans font-bold justify-center text-stone-100 cursor-pointer">
                    <NavLink to="/" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-[#E4FFCD] border-red-500" : "mr-5 hover:text-[#1AA77E]"}>HOME</NavLink>
                    <NavLink to="/features" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-[#E4FFCD] border-red-500" : "mr-5 hover:text-[#1AA77E]"}>WORKING & FEATURES</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-[#E4FFCD] border-red-500" : "mr-5 hover:text-[#1AA77E]"}>ABOUT</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-[#E4FFCD] border-red-500" : "mr-5 hover:text-[#1AA77E]"}>CONTACTS</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-[#E4FFCD] border-red-500" : "mr-5 hover:text-[#1AA77E]"}>BLOGS</NavLink>
                    <NavLink to="/faq" className={({ isActive }) => isActive ? "mr-5 border-b-2 text-[#E4FFCD] border-red-500" : "mr-5 hover:text-[#1AA77E]"}>FAQ's</NavLink>
                </nav>
                <div class="flex justify-center">
                    <button
                        class="inline-flex items-center justify-center w-auto text-gray-950 bg-white border-0  py-2 px-6 focus:outline-none hover:bg-stone-200 hover:scale-105 transition-transform duration-200 rounded-lg text-lg">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2">
                            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.266c-3.338.726-4.037-1.61-4.037-1.61-.547-1.39-1.335-1.76-1.335-1.76-1.09-.743.084-.727.084-.727 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.806 1.305 3.49.997.108-.776.42-1.305.764-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.236-3.22-.124-.303-.536-1.525.116-3.176 0 0 1.01-.323 3.3 1.23a11.43 11.43 0 0 1 3-.404c1.02.006 2.045.137 3 .404 2.29-1.553 3.298-1.23 3.298-1.23.653 1.65.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.477 5.922.43.37.81 1.104.81 2.226v3.293c0 .32.19.694.8.577C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                        </svg>
                        Visit GitHub Repo
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                            <path d="M17 7H7M17 7L7 17M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
