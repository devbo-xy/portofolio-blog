import React, { Fragment } from 'react'
import BLCK from '../../assets/webbl.png'
import PRT from '../../assets/prtf.png'

function Projects() {
    return (
        <Fragment>
            <div
                id="project"
                className="min-h-screen bg-white1 dark:bg-drkpage w-full py-20 "
            >
                <div className="text-center px-6 pb-10 ">
                    <button
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        className="text-text uppercase px-5 py-3 border-6 border-text dark:border-white1 dark:text-white1 text-xl md:text-3xl font-bold"
                    >
                        projects
                    </button>
                    <div className="md:max-w-xl max-w-none mt-5 mx-auto">
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="2200"
                            className="text-lg font-medium uppercase dark:text-white1"
                        >
                            Create a vision, articulate the vision, passionately own the
                            vision, and relentessly drive it to completion
                        </h1>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto my-auto px-10 md:mt-10 mt-5 md:px-2 py-5">
                    <div className="flex justify-center flex-col md:flex-row md:space-x-20 md:space-y-0 space-y-2">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-72 h-72"
                        >
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://blockchainku.vercel.app/"
                            >
                                <img
                                    src={BLCK}
                                    alt="Blockchainku"
                                    className="rounded-xl shadow-3xl transition duration-700 ease-in-out transform hover:scale-90"
                                />
                            </a>
                            <div className="text-center mt-5">
                                <h1 className="text-xl font-bold text-text uppercase dark:text-white">
                                    blockchainku
                                </h1>
                                <p className="text-md dark:text-gray-400 text-text2">2021 - 2022</p>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-72 h-72"
                        >
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://blockchainku.vercel.app/"
                            >
                                <img
                                    src={PRT}
                                    alt="Portofolio-blog"
                                    className="rounded-xl shadow-3xl transition duration-700 ease-in-out transform hover:scale-90"
                                />
                            </a>
                            <div className="text-center mt-5">
                                <h1 className="text-xl font-bold text-text uppercase dark:text-white">
                                    portofolio
                                </h1>
                                <p className="text-md text-text2 dark:text-gray-400 ">2021 - 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Projects

