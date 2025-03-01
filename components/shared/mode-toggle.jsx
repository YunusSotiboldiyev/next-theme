"use client";
import { useTheme } from 'next-themes'
import React from 'react'
import { FaMoon,FaSun  } from "react-icons/fa";
const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <button onClick={toggleTheme} className='p-2 '>
            {theme === "dark" ? <FaMoon /> : <FaSun />}
        </button>
    )
}
export default ModeToggle
