import React, { Fragment } from 'react'
import Git from '../../assets/github.svg'
import Twitter from '../../assets/twitter.svg'
import Ig from '../../assets/instagram.svg'
import Fb from '../../assets/facebook.svg'
import Mail from '../../assets/mail.svg'

function Footer() {
    return (
        <Fragment>
            <footer className="relative bg-brand dark:bg-darkfrist ">
                <div className="container max-w-7xl mx-auto p-6">
                    <div className="w-full flex justify-center flex-col md:flex-row max-3-xl">
                        <div className="flex flex-row sm:flex-row ">
                            <a
                                href="https://github.com/hanifakbari"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="p-3" alt="" src={Git} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="https://twitter.com/hanifakbri"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={Twitter} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="https://www.instagram.com/hanifakbari/"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={Ig} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="https://www.facebook.com/hanif.akbari.39/"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={Fb} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="mailto:hanifakbri7@gmail.com"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={Mail} />
                            </a>
                        </div>
                    </div>
                    <div className="text-left md:text-center text-white">
                        <p>© 2021. All right reserved - Created</p>
                        <p>
                            by <span className="font-bold">Lukman Hanif Akbari</span>
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer


