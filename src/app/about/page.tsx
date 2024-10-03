import React from "react";

function About() {
  return (
    
    <div className="w-screen p-6  md:flex md:justify-center md:items-center md:gap-28 md:p-2 bg-gradient-to-r from-teal-500 to-yellow-400 h-full md:w-full ">

      <div className="basis-1/3 p-10 text-lg md:text-xl text-black text-justify">
        <p className="mt-10">
        My specialty lies in transforming concepts into scalable, user-friendly, and interactive web applications. I combine technical expertise with artistic vision to create smooth, captivating user experiences, utilizing both front-end and back-end technologies. I focus on building dynamic, user-friendly applications with code that is scalable, efficient, and maintainable. As a full-stack developer, I have a keen eye for detail and a strong passion for crafting seamless user experiences. I am confident in my ability to deliver exceptional results. My goal is to not only meet but exceed expectations by delivering innovative solutions that drive user engagement and business success.
        </p>
      </div>
      <div id="image-container" className="pb-10 pt-10">
        
        <div
          className="box row-2"
          style={{ backgroundImage: `url(/assets/colorToggle.jpg)` }}
        >
        </div>
        <div
          className="box col-2"
          style={{ backgroundImage: `url(/assets/imageCal.jpg)` }}
        ></div>
        <div
          className="box "
          style={{ backgroundImage: `url(/assets/imageRB.png)` }}
        ></div>
        <div
          className="box row-2"
          style={{ backgroundImage: `url(/assets/srf.jpg)` }}
        ></div>
        <div className="box col-2" style={{ backgroundImage: `url(/assets/pp.jpg)` }}>
        </div>
        <div
          className="box"
          style={{ backgroundImage: `url(/assets/rps.jpg)` }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: `url(/assets/NGG.png)` }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: `url(/assets/tt.jpg)` }}
        ></div>
        <div
          className="box "
          style={{ backgroundImage: `url(/assets/td.jpg)` }}
        ></div>
      </div>
    </div>
  );
}

export default About;
