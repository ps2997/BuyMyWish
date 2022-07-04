import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="MainHeading">
        Designed for creators,
        <br /> not for businesses.
      </p>

      <h1 id="one" className="numbers">
        1
      </h1>
      <p id="oneText" className="bottomtext">
        We don't call them "customers" or transactions. They are your <br/>
        <span id="supprt"><b>supporters.</b></span>
      </p>


      <h1 id="two" className="numbers">
        2
      </h1>

      <p id="twoText" className="bottomtext">
      You get paid instantly to your bank account.
      <br/>
        <span id="delay"><b>No more 30-day delays.</b></span>
      </p>


      <h1 id="three" className="numbers">
        3
      </h1>

      <p id="threeText" className="bottomtext">
      You get to <b>talk to a human</b> for help, or if you just 

      <br/>
        <span id="human">like some advice to hit the ground running.</span>
      </p>

     <button className="Startbtn">Start my page-<b>It’s free</b></button>

    </div>
  );
};

export default Footer;
