import React from "react"
import { motion } from "framer-motion";

const Footer  = () => {

    const footerAnimate = {
        hidden : {
            y :100
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
        <motion.footer className="flex justify-center"
        variants = {footerAnimate} initial = "hidden" animate = "show">

            <ul className="w-[300px] flex justify-between items-center">
                <li><a href="#" className=" text-sm font-semibold">LinkedIn</a></li>
                <li><a href="#" className=" text-sm font-semibold">Twitter</a></li>
                <li><a href="#" className=" text-sm font-semibold">Github</a></li>
            </ul>

        </motion.footer>
    )

}
export default Footer