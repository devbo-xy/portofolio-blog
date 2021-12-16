import React, { Fragment, useEffect } from 'react'
import Navbar from '../component/Navbar'
import Logo from '../assets/Logo.svg'
import Mail from '../assets/mail.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Skill from '../component/Skills'
import BLCK from '../assets/blockchainku.svg'
import BG from '../assets/bg.svg'

function Home() {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        // <div style={{ scrollBehavior: 'smooth' }}>
        <Fragment>
            <Navbar />
            <div className="w-full py-5">
                <div src={BG} className="h-screen bg-cb w-full shadow-lg">
                    <div className="max-w-7xl mx-auto my-auto h-full items-center px-6 flex flex-col md:flex-row justify-evenly md:mt-0">
                        <div className="flex flex-col md:ml-4 max-w-3xl md:mt-20">
                            <h1 data-aos="fade-right" data-aos-duration="2200" className="text-brand dark:text-brand font-bold font-sans text-xl md:text-3xl text-left mt-10">
                                Hi, I'm <span className="uppercase">Lukman Hanif Akbari</span>
                            </h1>
                            <p data-aos="fade-right" data-aos-duration="2200" className="text-text lg:w-3/4 dark:text-white font-bold mt-1 font-serif text-2xl md:text-4xl flex-col md:flex-row text-left">
                                Front-end & UI/UX Designer Who Still Studying in University.
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2200" className="lg:w-3/4 dark:text-white text-text2 font-sans font-medium md:mt-24 mt-10 text-sm md:text-lg flex-col md:flex-row text-left">
                                I am currently in the third year of studying Informatics Engineering
                            </p>
                            <div data-aos="fade-right" data-aos-duration="2200" className="flex justify-start text-left flex-col md:flex-row md:mt-4 mt-10 ">
                                <a href="mailto:hanifakbri7@gmail.com" className="px-8 py-2 mx-auto ml-0 md:mx-0 flex text-left justify-start md:px-8 md:py-3 uppercase text-sm font-bold bg-brand shadow-4xl items-center text-white rounded-3xl transition duration-700 ease-in-out transform hover:scale-90">
                                    <img src={Mail} alt="pesan" className="w-5 h-5 mr-3 text-center"></img>Email me
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-start  ">
                            <div data-aos="fade-left" data-aos-duration="2200" className=" w-full h-full">
                                <img src={Logo} alt="Hero" className="w-48 sm:w-96 h-48 sm:h-96" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="h-screen bg-white1 dark:bg-darkfirst w-full py-20 inline-block">
                <div className="text-center ">
                    <button data-aos="fade-up" data-aos-duration="1800" className="text-text uppercase px-5 py-3 border-6 border-text text-xl md:text-3xl font-bold">
                        About
                    </button>
                </div>
                <div className="max-w-7xl mt-5 mx-auto my-auto h-full items-center px-6 flex flex-col md:flex-row justify-evnely">
                    {/* md:mr-36 mr-0  */}
                    <div className="flex flex-col md:flex-row justify-start text-center md:mt-0 mt-5 md:ml-3 ">
                        <div data-aos="fade-up" data-aos-duration="2200" className="w-full h-full">
                            {/* w-48 sm:w-96 h-48 sm:h-96 */}
                            <img src={Logo} alt="Tangan" className="w-48 sm:w-96 h-48 sm:h-96 mt-5" />
                        </div>
                    </div>
                    <div className="flex flex-col max-w-3xl">
                        <p data-aos="fade-down" data-aos-duration="2200" className="text-text lg:w-4/5 md:ml-56 font-medium dark:text-white text-lg md:text-xl flex-col md:flex-row text-left md:text-right mt-20 md:mt-0">
                            I’m studying at Gunadarma University and majoring in Informatics Engineering. I want to learn programmer language and i interest too.
                        </p>
                    </div>
                </div>
            </div>
            <Skill />
            <div id="project" className="min-h-screen bg-white1 dark:bg-darkfirst w-full py-20">
                <div className="text-center px-6 ">
                    <button data-aos="fade-up" data-aos-duration="1800" className="text-text uppercase px-5 py-3 border-6 border-text text-xl md:text-3xl font-bold">
                        projects
                    </button>
                    <div className="md:max-w-xl max-w-none mt-5 mx-auto">
                        <h1 data-aos="fade-up" data-aos-duration="2200" className="text-lg font-medium uppercase">Create a vision, articulate the vision, passionately own the vision, and relentessly drive it to completion</h1>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto my-auto px-10 md:mt-20 mt-5 md:px-2 py-5">
                    <div className="flex justify-center flex-col md:flex-row md:space-x-20 md:space-y-0 space-y-10">
                        <div data-aos="zoom-in" data-aos-duration="1800" className="w-64 max-h-64">
                            <a rel="noreferrer" target="_blank" href="https://blockchainku.vercel.app/" >
                                <img src={BLCK} alt="" className="rounded-xl shadow-3xl transition duration-700 ease-in-out transform hover:scale-90" />
                            </a>
                            <div className="text-center mt-5">
                                <h1 className="text-xl font-bold text-text uppercase">blockchainku</h1>
                                <p className="text-md text-text2">2021 - 2022</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1800" className="w-64 w-64">
                            <a rel="noreferrer" target="_blank" href="https://blockchainku.vercel.app/" >
                                <img src={BLCK} alt="" className="rounded-xl shadow-3xl transition duration-700 ease-in-out transform hover:scale-90" />
                            </a>
                            <div className="text-center mt-5">
                                <h1 className="text-xl font-bold text-text uppercase">portofolio</h1>
                                <p className="text-md text-text2">2021 - 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="min-h-screen w-full py-20 bg-white1 ">
                <div className="max-w-3xl mx-auto my-auto px-10 md:mt-20 mt-5 md:px-2 py-5">
                    <div className="text-center px-6 ">
                        <button data-aos="fade-up" data-aos-duration="1800" className="text-text uppercase px-5 py-3 border-6 border-text text-xl md:text-3xl font-bold">
                            contact
                        </button>
                        <div className="md:max-w-xl max-w-none mt-5 mx-auto">
                            <h1 data-aos="fade-up" data-aos-duration="2200" className="text-lg font-medium uppercase">New customers come from the action of past customers</h1>
                        </div>
                    </div>
                    <form className="bg-cb max-w-xl mx-auto h-96 p-10 md:mt-20 mt-5 shadow-xl rounded-xl">
                        <div className="p-2 text-center h-full">
                            <div className="">
                                <div className="text-left">
                                    <h1 className="uppercase text-lg text-text font-semibold">name</h1>
                                </div>
                                <input type="name" placeholder="enter your name" className="w-full mt-1 uppercase text-sm rounded-lg py-3 bg-white" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default Home