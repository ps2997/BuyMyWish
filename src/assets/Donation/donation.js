import React, { useEffect } from "react";
import "./donation.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Donation = () => {
  <script
    src="https://kit.fontawesome.com/77e827c027.js"
    crossorigin="anonymous"
  ></script>;
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: -50,
        transition: { duration: 2 },
      });

      animation2.start({
        rotate: 6.18,
        transition: { duration: 2 },
      });

      animation3.start({
        x: 50,
        y: -50,
        transition: { duration: 2 },
      });
    }

    if (!inView) {
      animation1.start({
        x: 50,
        transition: { duration: 2 },
      });

      animation2.start({
        rotate: -6.18,
        transition: { duration: 2 },
      });

      animation3.start({
        x: -50,
        y: 50,
        transition: { duration: 2 },
      });
    }
  }, [inView]);

  return (
    <div className="main">
      <h3 className="head">
        <b>Donation</b>
      </h3>
      <p className="heading">
        Give your audience an
        <br />
        easy way to say thanks.
      </p>

      <p className="subtext">
        Buy Me a Wish makes supporting fun and easy.In just a couple of <br />{" "}
        taps, your fans can make the payment (buy you a wish) and
        <br /> leave a message.They don't even have <br /> to create an
        account!!
      </p>

      <div ref={ref}>
        <motion.div animate={animation1}>
          <div className="box-1">
            <h4>Sam bought a Wish</h4>
            <br />
            <p>
              Absouluetly loved the show! Already <br />
              waiting for next week's Episode
              <br />
              Thank you
            </p>
          </div>
        </motion.div>

        <motion.div animate={animation2}>
          <div className="box-2">
            <h4>Anil bought 5 Wishes</h4>
            <p>waiting for next week's Event<br/>
            Hope my money could help the<br/>poor people!</p>
          </div>
        </motion.div>

        <motion.div animate={animation3}>
          <div className="box-3">
          <h4>Raj bought 15 Wishes</h4>
          <p>So glad I could help out<br/>the disabled people</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donation;
