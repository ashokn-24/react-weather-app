// Header.js
import "../styles/Header.css"; // Import CSS file for styling'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo2.jpg"; // Import CSS file for styling
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <motion.div
        initial={{
          rotate: 10,
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="container blur"
      >
        <div className="row align-items-center">
          <div className="col-md-7 p-4 ">
            <motion.h1
              initial={{
                opacity: 0,
                x: -55,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="text-md-start"
            >
              Welcome to our Weather App
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                x: -55,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="text-md-start"
            >
              Our Weather App provides you with accurate and up-to-date weather
              information for any location worldwide. Whether youre planning a
              trip, heading out for a jog, or just curious about the weather,
              our app has you covered
            </motion.p>

            <a className="btn btn-outline-light" href="#weather">
              Check Weather
            </a>
          </div>
          <div className="col-md-5 p-5">
            <motion.img
              initial={{
                opacity: 0,
                x: -55,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              src={logo}
              alt="Logo"
              className="img-fluid"
            />
          </div>
        </div>
      </motion.div>
      <motion.span
        animate={{
          x: -55,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="ball1"
      ></motion.span>
      <motion.span
        animate={{
          x: 55,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="ball2"
      ></motion.span>
    </header>
  );
};

export default Header;
