import React, { Fragment } from 'react'
import Navbar from '../component/Navbar'
import Logo from '../assets/Logo.svg'

function Home() {
    return (
        <Fragment>
            <Navbar />
            <div className="h-screen bg-white1 dark:bg-darksecond w-full py-5">
                <div className="max-w-7xl mx-auto my-auto h-full items-center px-6 flex flex-col md:flex-row justify-evenly md:mt-0">
                    <div className="flex flex-col md:ml-4 max-w-3xl md:mt-20">
                        <h1 className="text-brand dark:text-brand font-bold uppercase text-xl md:text-3xl text-left">
                            Hi, I’m Lukman Hanif Akbari
                        </h1>
                        <p className="text-text lg:w-3/4 dark:text-white font-bold mt-1 text-2xl md:text-4xl flex-col md:flex-row text-left">
                            Frontend & UI/UX Designer Who Still Studying in University.
                        </p>
                        <p className="lg:w-3/4 dark:text-white text-text2 font-medium md:mt-24 mt-10 text-sm md:text-lg flex-col md:flex-row text-left">
                            I am currently in the third year of studying Informatics Engineering
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start  ">
                        <div className=" w-full h-full">
                            <img src={Logo} alt="Hero" className="w-48 sm:w-96 h-48 sm:h-96" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="h-screen bg-white1 dark:bg-darkfirst w-full py-20 inline-block">
                <div className="text-center ">
                    <h1 className="text-text1 uppercase text-xl md:text-3xl font-bold">
                        About
                    </h1>
                </div>
                <div className="max-w-7xl mt-5 mx-auto my-auto h-full items-center px-6 flex flex-col md:flex-row justify-evnely">
                    {/* md:mr-36 mr-0  */}
                    <div className="flex flex-col md:flex-row justify-start text-center md:ml-3 ">
                        <div className="w-full h-full">
                            {/* w-48 sm:w-96 h-48 sm:h-96 */}
                            <img src={Logo} alt="Tangan" className="w-48 sm:w-96 h-48 sm:h-96 mt-5" />
                        </div>
                    </div>
                    <div className="flex flex-col max-w-3xl">
                        <p className="text-text1 lg:w-4/5 md:ml-56 font-medium dark:text-white text-lg md:text-xl flex-col md:flex-row text-left md:text-right mt-5">
                            I’m studying at Gunadarma University and majoring in Informatics Engineering. I want to learn programmer language and i interest too.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Home