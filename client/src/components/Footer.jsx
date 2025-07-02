import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  
    
    return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-40">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto" src={assets.logo} alt="logo" />
                    <p className="mt-6 text-sm">
                        QuickShow is your one-stop platform for booking movie tickets with ease. From the latest blockbusters to local theater listings, we make your movie experience smoother. Plan ahead, book seats instantly, and enjoy your favorite films with just a few clicks—anytime, anywhere.


                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src={assets.googlePlay} alt="google play" className="h-10 " />
                        <img src={assets.appStore} alt="app store" className="h-10 w-auto " />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+92-336-4769806</p>
                            <p>razasyedmoosa882@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © All Right Reserved.
            </p>
        </footer>
    )
}
export default Footer