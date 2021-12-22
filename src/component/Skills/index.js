import React, { Fragment, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HTML from '../../assets/html.svg'
import CSS from '../../assets/css.svg'
import FIGMA from '../../assets/figma.svg'
import SQL from '../../assets/mysql.svg'
import VS from '../../assets/vs.svg'
import VB from '../../assets/vb.svg'
import CPP from '../../assets/c++.svg'
import JS from '../../assets/javascript.svg'
import RJS from '../../assets/react.png'
import ORC from '../../assets/oracle.svg'
import AXD from '../../assets/adobexd.svg'
import BD from '../../assets/blender.svg'
import '../../App.css'

function Skill() {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <Fragment>
            <div id="skills" className="min-h-screen bg-white2 dark:bg-drkpage w-full py-20">
                <div className="text-center">
                    <button data-aos="fade-up" data-aos-duration="1800" className="text-text dark:text-white1  px-5 py-3 border-6 border-text dark:border-white1 uppercase text-xl sm:text-3xl font-bold">
                        Skills
                    </button >
                    <p data-aos="fade-up" data-aos-duration="2200" className="mt-5 text-text dark:text-white1 text-lg sm:text-xl font-medium uppercase">
                        Skill can be improved by practice.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto my-auto px-10 sm:mt-10 mt-5 sm:px-2 py-5">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="flex justify-start ml-5 mb-5"
                    >
                        <h1 className="uppercase font-bold text-xl text-text dark:text-gray-200">using now :</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/HTML" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={HTML} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1  uppercase ">html5</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/CSS" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={CSS} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1  uppercase">css3</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://www.figma.com/" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={FIGMA} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">Figma</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://www.mysql.com/" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={SQL} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">MySQL</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center mt-5"
                        >
                            <a rel="noreferrer" target="_blank" href="https://id.wikipedia.org/wiki/Visual_Basic" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={VS} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">Visual Studio</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center mt-5"
                        >
                            <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/C%2B%2B" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={VB} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">Visual Basic</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center mt-5"
                        >
                            <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/C%2B%2B" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={CPP} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1  uppercase">c++</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="flex justify-start ml-5 mt-10 mb-5"
                    >
                        <h1 className="uppercase font-bold text-xl text-text dark:text-gray-200 ">learning :</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/JavaScript" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={JS} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">Javascript</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={RJS} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">ReactJS</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        className="flex justify-start ml-5 mt-10 mb-5"
                    >
                        <h1 className="uppercase font-bold text-xl text-text dark:text-gray-200 ">other skills :</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://www.oracle.com/cloud/azure-interconnect/" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={ORC} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">Microsoft Oracle</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://www.adobe.com/products/xd.html" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={AXD} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">AdobeXD</h1>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            className="w-full flex flex-col justify-center items-center"
                        >
                            <a rel="noreferrer" target="_blank" href="https://www.blender.org/" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-125" >
                                <img src={BD} alt="" className="w-24 h-24" />
                            </a>
                            <div className="text-center mt-2">
                                <h1 className="text-xl text-text dark:text-white1 ">Blender</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Skill