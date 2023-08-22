import { motion } from "framer-motion";
import React from "react"
const NavBar  = () =>  {

    const navAnimate = {
        hidden : {
            y :-100
        },
        show: {
            y: 0,
            transition : {
                delay: 3.9,
                duration: 0.5
            }
            
        }
    }

    return (
        <motion.nav className="flex justify-between item-center pt-4 relative z-50 "
        variants={navAnimate} initial = "hidden" animate = "show">
            <div>
            <h1 className="font-bold text-xl">Danazumi</h1>
            </div>

            <ul className="w-[200px] flex justify-between items-center">
                <li><a href="#" className=" text-sm font-semibold">Projects</a></li>
                <li><a href="#" className=" text-sm font-semibold">Articles</a></li>
                <li><a href="#" className=" text-sm font-semibold">About</a></li>
            </ul>

            <div>
                <a href="#" className="text-sm font-semibold">Contact Info</a>
            </div>


        </motion.nav>
    )
}
export default NavBar