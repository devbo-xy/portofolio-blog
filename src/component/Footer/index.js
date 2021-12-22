import React, { Fragment } from 'react'
import Git from '../../assets/github.svg'
import Gitck from '../../assets/githubblck.svg'
import Twitter from '../../assets/twitter.svg'
import Twitterblck from '../../assets/twitterblck.svg'
import Ig from '../../assets/instagram.svg'
import Igblck from '../../assets/instagramblck.svg'
import Fb from '../../assets/facebook.svg'
import Fblck from '../../assets/facebookblck.svg'
import Mail from '../../assets/mail.svg'
import Mailblck from '../../assets/mailblack.svg'

function Footer(props) {
    return (
        <Fragment>
            <footer className="relative bg-white3 dark:bg-drknav ">
                <div className="container max-w-7xl mx-auto p-6">
                    <div className="w-full flex justify-center flex-col sm:flex-row max-3-xl">
                        <div className="flex flex-row sm:flex-row ">
                            <a
                                href="https://github.com/hanifakbari"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="p-3" alt="" src={props.fttr ? Git : Gitck} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="https://twitter.com/hanifakbri"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={props.fttr ? Twitter : Twitterblck} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="https://www.instagram.com/hanifakbari/"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={props.fttr ? Ig : Igblck} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="https://www.facebook.com/hanif.akbari.39/"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={props.fttr ? Fb : Fblck} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="mailto:hanifakbri7@gmail.com"
                                target="_blank"
                            >
                                <img className="p-3" alt="" src={props.fttr ? Mail : Mailblck} />
                            </a>
                        </div>
                    </div>
                    <div className="text-left md:text-center text-white">
                        <p className="dark:text-white text-black">© 2021. All right reserved - Created</p>
                        <p className="dark:text-white text-black">
                            by <span className="font-bold">Lukman Hanif Akbari</span>
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer


