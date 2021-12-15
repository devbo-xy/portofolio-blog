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

function Skill() {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <Fragment>
            <div id="skills" className="min-h-screen bg-io dark:bg-darkfirst w-full py-20">
                <div className="text-center">
                    <button data-aos="fade-top" data-aos-duration="1000" className="text-text dark:text-white px-5 py-3 border-6 border-text uppercase text-xl md:text-3xl font-bold">
                        Skills
                    </button >
                    <p className="mt-5 mx-6 text-lg md:text-xl font-medium uppercase">
                        Skill can be improved by practice.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto my-auto px-10 md:mt-12 mt-5 md:px-2 py-5">
                    <div className="flex justify-start ml-5 mb-5">
                        <h1 className="uppercase font-bold text-xl">using now :</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/HTML" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 uppercase">html5</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/CSS" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={CSS} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 uppercase">css5</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://www.figma.com/" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={FIGMA} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2">Figma</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://www.mysql.com/" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={SQL} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">MySQL</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-5">
                            <a href="https://id.wikipedia.org/wiki/Visual_Basic" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={VS} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Visual Studio</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-5">
                            <a href="https://en.wikipedia.org/wiki/C%2B%2B" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={VB} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Visual Basic</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-5">
                            <a href="https://en.wikipedia.org/wiki/C%2B%2B" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={CPP} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal uppercase">c++</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start ml-5 mt-10 mb-5">
                        <h1 className="uppercase font-bold text-xl">learning :</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/JavaScript" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={JS} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Javascript</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={RJS} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">ReactJS</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start ml-5 mt-10 mb-5">
                        <h1 className="uppercase font-bold text-xl">other skills :</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/JavaScript" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={ORC} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Microsoft Oracle</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className="w-full h-full flex justify-center transition duration-700 ease-in-out transform hover:scale-75" >
                                <img src={AXD} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">AdobeXD</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Skill