import React, { Fragment, useEffect } from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Skill from '../component/Skills'
import About from '../component/About'
import Projects from '../component/Projects'
import Footer from '../component/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Home() {

    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <Fragment>
            <Navbar />
            {/* <Banner /> */}
            <About />
            {/* <Skill />
            <Projects />
            <Footer /> */}

            {/* <div id="contact" className="min-h-screen w-full py-20 bg-white1 ">
                <div className="max-w-3xl mx-auto my-auto px-10 md:mt-10 mt-5 md:px-2 py-5">
                    <div className="text-center px-6 ">
                        <button data-aos="fade-up" data-aos-duration="1800" className="text-text uppercase px-5 py-3 border-6 border-text text-xl md:text-3xl font-bold">
                            contact
                        </button>
                        <div className="md:max-w-xl max-w-none mt-5 mx-auto">
                            <h1 data-aos="fade-up" data-aos-duration="2200" className="text-lg font-medium uppercase">New customers come from the action of past customers</h1>
                        </div>
                    </div>
                    <form data-aos="zoom-in" data-aos-duration="1800" className="bg-white max-w-xl mx-auto h-full p-10 md:mt-20 mt-5 shadow-4xl rounded-xl">
                        <div className="p-2 h-full text-center">
                            <div className="">
                                <div className="text-left">
                                    <h1 className="uppercase md:text-md text-sm text-text font-semibold">name</h1>
                                </div>
                                <input type="name" placeholder="enter your name *" className="w-full mt-1 px-2 uppercase text-xs md:text-sm rounded-lg py-4 outline-red bg-ipt " />
                            </div>
                            <div className="mt-5">
                                <div className="text-left">
                                    <h1 className="uppercase md:text-md text-sm text-text font-semibold">email</h1>
                                </div>
                                <input type="email" placeholder="enter your email *" className="w-full mt-1 px-2 uppercase text-xs md:text-sm rounded-lg py-4 outline-red bg-ipt " />
                            </div>
                            <div className="mt-5">
                                <div className="text-left">
                                    <h1 className="uppercase md:text-md text-sm text-text font-semibold">phone number</h1>
                                </div>
                                <input type="number" placeholder="phone number *" className="w-full mt-1 px-2 uppercase text-xs md:text-sm rounded-lg py-4 outline-red bg-ipt " />
                            </div>
                            <div className="mt-5">
                                <div className="text-left">
                                    <h1 className="uppercase md:text-md text-sm text-text font-semibold">message</h1>
                                </div>
                                <input type="text" placeholder="your message" className="w-full mt-1 px-2 uppercase text-xs md:text-sm rounded-lg py-14 outline-red bg-ipt " />
                            </div>
                            <button className="mt-16 uppercase text-white md:text-md text-sm  font-semibold md:px-9 px-6 md:py-3 py-2 rounded-lg bg-brand shadow-7xl transition duration-700 ease-in-out transform hover:scale-90">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
        </Fragment >
    )
}
export default Home