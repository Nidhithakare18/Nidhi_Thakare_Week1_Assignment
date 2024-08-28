import React from 'react';
import './Banner.css';

const Banner = () => {
  return <div>
    <section class="home">
        <div class="home-img">
            <img src="https://th.bing.com/th/id/OIP.MCjIxs9agBfrp-ubCIpMVADsFK?w=166&h=233&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""></img>
        </div>
        <div class="home-content">
            <h1>Hi, It's <span>NIDHI THAKARE</span></h1>
            <h3 class="typing-text">I'm a <span></span></h3><br></br>
            <p> I am passionate about solving problem through human centered design. Curious by nature and bussiness minded.</p>
            <br></br>
            <a href="#" class="btn">Hire me</a>
        </div>
    </section>
  </div>;
};

export default Banner;
