import React, { Fragment } from 'react'
import Logo from '../../assets/Logo.svg'
import Mail from '../../assets/mail.svg'
// import Mailblck from '../../assets/mailblack.svg'

function About() {

    return (
        <Fragment>
            <div id="about"
                className="min-h-screen bg-white1 dark:bg-drkpage w-full py-20 inline-block"
            >
                <div className="text-center ">
                    <button
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        className="text-text dark:text-white1 uppercase px-5 py-3 border-6 border-text dark:border-white1 text-xl md:text-3xl font-bold active:outline-none"
                    >
                        About
                    </button>
                </div>
                <div className="max-w-7xl mt-5 ml-10 h-full items-center px-6 flex flex-col md:flex-row justify-evenly">
                    <div className="flex flex-col md:flex-row justify-start text-center md:mt-0 mt-5 md:ml-3 ">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="2200"
                            className="w-full h-full"
                        >
                            <img
                                src={Logo}
                                alt="Tangan"
                                className="w-48 sm:w-96 h-48 sm:h-96 mt-5"
                            />
                        </div>
                    </div>
                    {/* <div
                        data-aos="fade-left"
                        data-aos-duration="2200"
                        className="flex flex-col max-w-3x justify-end w-full">
                        <p
                            className="text-text lg:w-4/5 md:ml-48 font-medium dark:text-white text-lg md:text-xl items-center flex-col md:flex-row text-left md:text-right mt-20 md:mt-0"
                        >
                            I’m studying at Gunadarma University and majoring in Informatics
                            Engineering. I want to learn programmer language and i interest
                            too.
                        </p>
                        <div
                            className="flex justify-end flex-col md:flex-row md:mt-28 mt-5 w-full"
                        >
                            <a
                                href="mailto:hanifakbri7@gmail.com"
                                className="px-8 py-2 mx-auto md:mx-0 flex justify-center md:px-8 md:py-3 uppercase text-sm font-bold bg-brand dark:bg-white1 shadow-4xl items-center text-white dark:text-text rounded-3xl transition duration-700 ease-in-out transform hover:scale-110">
                                <img src={Mail}
                                    alt="pesan"
                                    className="w-5 h-5 mr-3 text-center"
                                >
                                </img>
                                Email me
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment >
    )
}

export default About

