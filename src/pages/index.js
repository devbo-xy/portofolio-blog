import React, { Fragment, useEffect } from 'react'
import Navbar from '../component/Navbar'
import Logo from '../assets/Logo.svg'
import Mail from '../assets/mail.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HTML from '../assets/html.svg'

function Home() {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        // <div style={{ scrollBehavior: 'smooth' }}>
        <Fragment>
            <Navbar />
            <div className="h-screen bg-white1 dark:bg-darksecond w-full py-5">
                <div className="max-w-7xl mx-auto my-auto h-full items-center px-6 flex flex-col md:flex-row justify-evenly md:mt-0">
                    <div className="flex flex-col md:ml-4 max-w-3xl md:mt-20">
                        <h1 data-aos="fade-right" data-aos-duration="1200" className="text-brand dark:text-brand font-bold font-sans text-xl md:text-3xl text-left mt-10">
                            Hi, I'm <span className="uppercase">Lukman Hanif Akbari</span>
                        </h1>
                        <p data-aos="fade-right" data-aos-duration="1500" className="text-text lg:w-3/4 dark:text-white font-bold mt-1 font-serif text-2xl md:text-4xl flex-col md:flex-row text-left">
                            Frontend & UI/UX Designer Who Still Studying in University.
                        </p>
                        <p data-aos="fade-right" data-aos-duration="1800" className="lg:w-3/4 dark:text-white text-text2 font-sans font-medium md:mt-24 mt-10 text-sm md:text-lg flex-col md:flex-row text-left">
                            I am currently in the third year of studying Informatics Engineering
                        </p>
                        <div data-aos="fade-right" data-aos-duration="2200" className="flex justify-start text-left flex-col md:flex-row md:mt-4 mt-10 ">
                            <a href="mailto:hanifakbri7@gmail.com" className="px-8 py-2 mx-auto md:mx-0 flex text-left justify-start md:px-8 md:py-3 uppercase text-sm font-bold bg-brand shadow-4xl items-center text-white rounded-3xl transform hover:scale-105">
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
            <div id="about" className="h-screen bg-white1 dark:bg-darkfirst w-full py-20 inline-block">
                <div className="text-center ">
                    <button data-aos="fade-top" data-aos-duration="1800" className="text-text uppercase px-5 py-3 border-6 border-text text-xl md:text-3xl font-bold">
                        About
                    </button>
                </div>
                <div className="max-w-7xl mt-5 mx-auto my-auto h-full items-center px-6 flex flex-col md:flex-row justify-evnely">
                    {/* md:mr-36 mr-0  */}
                    <div className="flex flex-col md:flex-row justify-start text-center md:mt-0 mt-5 md:ml-3 ">
                        <div data-aos="fade-up" data-aos-duration="1800" className=" w-full h-full">
                            {/* w-48 sm:w-96 h-48 sm:h-96 */}
                            <img src={Logo} alt="Tangan" className="w-48 sm:w-96 h-48 sm:h-96 mt-5" />
                        </div>
                    </div>
                    <div className="flex flex-col max-w-3xl">
                        <p data-aos="fade-down" data-aos-duration="1800" className="text-text lg:w-4/5 md:ml-56 font-medium dark:text-white text-lg md:text-xl flex-col md:flex-row text-left md:text-right mt-20 md:mt-0">
                            I’m studying at Gunadarma University and majoring in Informatics Engineering. I want to learn programmer language and i interest too.
                        </p>
                    </div>
                </div>
            </div>
            <div id="skills" className="min-h-screen bg-io dark:bg-darkfirst w-full py-20">
                <div className="text-center">
                    <button data-aos="fade-top" data-aos-duration="1000" className="text-text dark:text-white px-5 py-3 border-6 border-text uppercase text-xl md:text-3xl font-bold">
                        Skills
                    </button >
                    <p className="mt-5 mx-6 text-lg md:text-xl font-medium">
                        Knowledge is not skill. Knowledge plus ten thousand time is skill
                    </p>
                </div>
                <div className="max-w-3xl mx-auto my-auto px-10 md:mt-12 mt-5 md:px-2 py-5">
                    <div className="flex justify-start ml-5 mb-5">
                        <h1 className="uppercase font-bold text-xl">using now :</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/HTML" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal uppercase">html5</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/CSS" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal uppercase">css5</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://www.figma.com/" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Figma</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://www.mysql.com/" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal uppercase">MySQL</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-5">
                            <a href="https://id.wikipedia.org/wiki/Visual_Basic" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Visual Basic</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center mt-5">
                            <a href="https://en.wikipedia.org/wiki/C%2B%2B" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
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
                            <a href="https://en.wikipedia.org/wiki/JavaScript" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Javascript</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
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
                            <a href="https://en.wikipedia.org/wiki/JavaScript" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
                            </a>
                            <div className="text-center">
                                <h1 className="text-xl mt-2 font-normal">Microsoft Oracle</h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className="w-full h-full flex justify-center" >
                                <img src={HTML} alt="" className="w-24 h-24"></img>
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
export default Home