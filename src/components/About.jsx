import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm curiosity-driven developer eager to learn everyday. I look forward to writing 
          clean code and maintainable systems that makes lives easier across the technology
          stack: Java and Kotlin
        </p>

        <br />
        <br />

        <p className="text-xl mt-4">
          When I'm not crackling the keyboard with my fingers, I'm probably playing football(soccer), in the 
          gym, reading a book or just walking in the nearest park.
        </p>
      </div>
    </div>
  );
};

export default About;
