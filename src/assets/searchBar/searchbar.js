import React,{ useEffect } from "react";
import "./searchbar.css";
import logo from '../Images/logo.png' ;
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'

const Search = () => {

  const {ref, inView} = useInView({
    threshold:0.3
  })
  const animation = useAnimation()
  
  
  useEffect(()=>{
      
    if(inView){
      animation.start({
        scale: 1 , initial:{ scale: 0 }, transition:{delay:0.5}
      })
    }

    if(!inView){
      animation.start({
        scale:0
      })
    }

  },[inView])


  return (
    <div ref={ref} className="searchbar">
      <ul>
        <motion.div animate={animation }>
          <img className="logo" src={logo} alt="logo" />
        </motion.div>
        <li>FAQ</li>
        <li>Explore creators</li>
        <li>Log in</li>
        <button className="btn">Sign Up</button>
      </ul>
    </div>
  );
};

export default Search;
