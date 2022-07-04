import React, {useEffect} from "react";
import "./midpage.css";
import { motion, useAnimation} from "framer-motion";
import {useInView} from 'react-intersection-observer'


const Mid = () => {

  const {ref, inView} = useInView({
    threshold:0.3
  })
  const animation = useAnimation()
  
  useEffect(()=>{
      
    if(inView){
      animation.start({
        scale: 1 , initial:{ scale: 0 }, transition:{duration:0.5}
      })
    }

    if(!inView){
      animation.start({
        scale:0
      })
    }

  },[inView])

  return (
    <div ref={ref} className="mid">
      <motion.div
        className="text"
        animate={animation}
        
      >
        A <span id="yellow">Supporter</span> is worth a<br /> thousand
        followers.
      </motion.div>

      <motion.div
        animate={ animation }
        className="subtext"
      >
        Accept donations. Start a membership. Sell anything you like. <br />{" "}
        It’s easier than you think.
      </motion.div>

      <input className="search" type="text" placeholder="Buymywish.com/" />
      <button className="btnn">Start My Page</button>
    </div>
  );
};

export default Mid;
