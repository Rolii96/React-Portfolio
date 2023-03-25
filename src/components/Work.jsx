import React from "react";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import Project4 from "../assets/project-4.png";
import Project5 from "../assets/project-5.png";
import Project6 from "../assets/project-6.png";
import Project7 from "../assets/project-7.png";
import Project8 from "../assets/project-8.png";
import Project9 from "../assets/project-9.png";
import Project10 from "../assets/project-10.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Grid Item */}
          <div
            style={{ backgroundImage: `url(${Project1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS- Weather Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://weather-websitte.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS- Movie Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://soft-narwhal-fbd1d5.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*Grid Item */}
          <div
            style={{ backgroundImage: `url(${Project3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS- Protfolio Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://lustrous-baklava-d94748.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  JavaScript Calculator
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://suspicious-wilson-154a58.netlify.app/javascript%20calculator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*Grid Item */}
          <div
            style={{ backgroundImage: `url(${Project5})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  jQuery Calendar
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://suspicious-wilson-154a58.netlify.app/calendar%20project%20using%20jquery/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project6})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  Data Analytics- React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://splendid-fenglisu-7109f7.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project7})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  Protfolio Website- HTML, CSS & JS
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://suspicious-wilson-154a58.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project8})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  Bootstrap- Website Idea
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://suspicious-wilson-154a58.netlify.app/project%20rolandajeti/rolandajeti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project9})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  Facebook.com- Bootstrap Project
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://suspicious-wilson-154a58.netlify.app/facebook%20page-like/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project10})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  New Movie Website
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://roland-ajeti.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GO LIVE
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rolii96/roi-internship"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

