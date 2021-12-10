import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [dark, setDark] = useState(false)

    const selectTheme = (value) => {
        localStorage.setItem('theme', value)
        const html = document.querySelector('html')
        if (dark) {
            html.classList.remove('dark')
            console.log("remove Light")
        } else {
            html.classList.add('dark')
            console.log("remove Dark")
        }
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setDark(true)
        } else {
            document.documentElement.classList.add('light')
            setDark(false)
        }
        localStorage.removeItem('theme')
    }, [])

    return (
        <Fragment>
            <nav className="bg-io dark:bg-blue-200 w-full top-0 fixed shadow-lg z-10">
                <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto">
                    <div className="flex justify-between items-center px-4 py-5">
                        <a href="# " className=" w-full h-full items-center">

                        </a>
                        <div className="flex justify-end">
                            <div className="focus:outline-none flex space-x-3 lg:hidden">
                                <button onClick={() => {
                                    dark ? setDark(false) : setDark(true)
                                    dark ? selectTheme('light') : selectTheme('dark')
                                }} className="focus:outline-none lg:hidden w-full h-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text hover:text-brand" viewBox="0 0 20 20" fill="currentColor">
                                        <path className={dark ? 'hidden' : 'block'} d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:text-white dark:hover:text-brand" viewBox="0 0 20 20" fill="currentColor">
                                            <path className={dark ? 'block' : 'hidden'} fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                        </svg>
                                    </svg>
                                </button>
                                {/* Pada bagian button dikasih kondisi state dark true atau false */}
                                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none hover:md:text-brand dark:text-white dark:hover:md:text-brand ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path className={!isOpen ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path className={isOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} item-center lg:flex justify-end flex-col lg:flex-row w-full py-5 lg:py-0`}>
                        <div className="flex flex-col lg:flex-row justify-center text-center">
                            <a href="#about" className="block items-center text-lg font-sans font-sm px-4 py-3 lg:py-6 text-black  hover:text-brand dark:hover:text-brand dark:text-white uppercase font-bold">About</a>
                            <a href="#team" className="block items-center text-lg font-sans font-sm px-4 py-3 lg:py-6 text-black  hover:text-brand dark:hover:text-brand dark:text-white uppercase font-bold">Skills</a>
                            <a href="#work" className="block items-center text-lg font-sans font-sm px-4 py-3 lg:py-6 text-black  hover:text-brand dark:hover:text-brand dark:text-white uppercase font-bold">Portofolio</a>
                            <a href="#work" className="block items-center text-lg font-sans font-sm px-4 py-3 lg:py-6 text-black  hover:text-brand dark:hover:text-brand dark:text-white uppercase font-bold">Contact</a>
                            <button onClick={() => {
                                dark ? setDark(false) : setDark(true)
                                dark ? selectTheme('light') : selectTheme('dark')
                            }}
                                className="focus:outline-none hidden items-center text-lg uppercase px-4 py-5 lg:py-6 lg:inline-flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-brand" viewBox="0 0 20 20" fill="currentColor">
                                    <path className={dark ? 'hidden' : 'block'} d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-brand dark:text-white dark:hover:text-brand" viewBox="0 0 20 20" fill="currentColor">
                                        <path className={dark ? 'block' : 'hidden'} fillRule=" evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment >
    )
}
export default Navbar