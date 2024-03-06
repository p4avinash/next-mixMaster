"use client"
import React, { useEffect } from "react"
import Link from "next/link"

const links = [
  { href: "/about", text: "About" },
  // { href: "/contact", text: "Contact Us" },
]

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
]

const Navbar = () => {
  const handleTheme = (e) => {
    let themeFromLocalStorage = localStorage.getItem("mix-theme")
    if (!themeFromLocalStorage) {
      localStorage.setItem("mix-theme", e.target.textContent)
    } else {
      localStorage.setItem("mix-theme", e.target.textContent)
      themeFromLocalStorage = localStorage.getItem("mix-theme")
    }

    const rootHTML = document.querySelector("#root-html")
    rootHTML.setAttribute("data-theme", themeFromLocalStorage)
  }

  useEffect(() => {
    const rootHTML = document.querySelector("#root-html")
    let themeFromLocalStorage = localStorage.getItem("mix-theme")
    rootHTML.setAttribute("data-theme", themeFromLocalStorage)
  }, [])

  return (
    <div className='navbar p-4 shadow-xl px-8'>
      <div className='flex-1'>
        <Link href={"/"} className='text-3xl font-bold text-primary'>
          MixMaster
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal'>
          {links.map((link) => {
            return (
              <li>
                <Link href={link.href} key={link.href}>
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li>
            <details className=''>
              <summary>Theme</summary>
              <ul className='bg-base-100 rounded-xl z-10 h-[400px] overflow-y-scroll'>
                {themes.map((theme) => (
                  <li
                    key={theme}
                    className='cursor-pointer  hover:bg-primary hover:text-primary-content hover:rounded-lg'
                    onClick={(e) => handleTheme(e)}
                  >
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
