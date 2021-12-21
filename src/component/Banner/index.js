import React, { Fragment } from 'react'
import Foto from '../../assets/foto.svg'
// import Pem from '../../assets/pem.svg'

function Banner() {
    return (
        <Fragment>
            <div className="h-screen bg-white3 dark:bg-drkpage w-full py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto my-auto h-full items-center px-6 flex flex-col md:flex-row justify-evenly mt-24 md:mt-0">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="2200"
                        className="flex flex-col md:ml-4 max-w-3xl md:mt-10"
                    >
                        <h1
                            className="text-brand font-bold font-sans text-xl md:text-3xl text-left mt-10"
                        >
                            Hi, I'm <span className="uppercase">Lukman Hanif Akbari</span>
                        </h1>
                        <p
                            className="text-text lg:w-3/4 dark:text-white font-bold mt-1 font-serif text-2xl md:text-4xl flex-col md:flex-row text-left"
                        >
                            Front-end & UI Designer Who Still Studying in University.
                        </p>
                        <p
                            className="lg:w-3/4 dark:text-gray-300 text-text2 font-sans font-medium md:mt-24 mt-10 text-sm md:text-lg flex-col md:flex-row text-left"
                        >
                            I am currently in the third year of studying Informatics
                            Engineering
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start h-full">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="2200"
                            className=" w-full h-full"
                        >
                            <img
                                src={Foto}
                                alt="Hero"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
export default Banner