// import { useState } from ' react''
// import './App.css'
import "./index.css";
import NavBar from "./component/navBar";
import Footer from "./component/footer";
import { motion } from "framer-motion";

function App() {
  //Initial text Animation
  const animateTitle = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 2,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const animateChildrenTitle = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const animateImage = {
    hidden: {
      //defines polygon shape w 4 points
      //making elem invisible  by clipping it to a triangle with no area
      clipPath: "polygon(0 0, 0 0,0 100%, 0% 100%)",
    },
    show: {
      //defines a full rectangle as the clipping region, revealing the entire element.
      clipPath: "polygon(0 0, 100% 0 ,100% 100%, 0% 100%)",
      transition: {
        delay: 2.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const explainAnimate = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0)",
    },
    show: {
      //defines a full rectangle as the clipping region, revealing the entire element.
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: {
        delay: 2.8,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const circleAnimate = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: 3.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="h-screen px-12 relative overflow-hidden">
      <NavBar />
      <div className="absolute -top-12 -left-12 w-[300px] h-[300px] bg-red-200 blur-[120px]" />

      <div className="absolute bottom-0 -right-12 w-[300px] h-[300px] bg-blue-200 blur-[100px]" />
      <div>
        <motion.img
          src="/kakashi.png"
          alt="art"
          className="w-[70px]  top-14 left-16 animate-spin-slow z-50 fixed max-lg:w-[60px] 
          max-md:w-[50px] "
          variants={circleAnimate}
          initial="hidden"
          animate="show"
        />
      </div>
      <section className="h-[calc(100vh - 80px)] flex flex-col items-center relative">
        <div className="absolute left-[200px] top-[200px] h-[100px] flex items-center overflow-hidden">
          <motion.div
            className="relative flex text-6xl font-bold text-purple-600 drop-shadow-lg z-50"
            variants={animateTitle}
            initial="hidden"
            animate="show"
          >
            {Array.from("Portfolio").map((letter, idx) => (
              <motion.span key={idx} variants={animateChildrenTitle}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="h-[500px] m-auto  sticky">
          <motion.img
            src="/kishibe.png"
            alt="art"
            className="object-cover w-[1000px]  mt-[100px]"
            variants={animateImage}
            inital="hidden"
            animate="show"
          />
        </div>
        <motion.div
          className="bg-black p-4 w-[300px] absolute top-[447px] right-6  drop-shadow-lg  z-50 max-3xl:w-[280px]"
          variants={explainAnimate}
          initial="hidden"
          animate="show"
        >
          <p className="text-white text-sm text-justify">
            This is the Personal Portfolio for Danazumi He is a software
            engineer who works with typescript, react, tailwindCSS, nextJS and
            python.
          </p>
        </motion.div>
        <div className="mt-[17rem]">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
