import React from 'react'
import LvBand from '../assets/lvband.png';
import rosaStand from '../assets/rosastand.png';
import mazeGame from '../assets/mazegame.png';
import movieFight from '../assets/moviefight.png';
import secretMessage from '../assets/secretmessage.png';
import portfolioSite from '../assets/portfoliosite.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-white">Work</p>
                <p className="py-6">Check out some of my recent work</p>
            </div>

            {/*Container*/}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${LvBand})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML, CSS, JS Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://laverniaband.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/joeygonzzzz/lvbandwebsite">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${rosaStand})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React, Tailwind Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://rosashamburgerstand.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/joeygonzzzz/hamburgerstand">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${mazeGame})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Javascript Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://jgonzmazegame.netlify.app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/joeygonzzzz/Maze-Game">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*New Projects, to be replaced with newer ones*/}
                <div style={{backgroundImage: `url(${movieFight})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JS, API For Data
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://movie-project-five.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/joeygonzzzz/Movie-Project">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div style={{backgroundImage: `url(${secretMessage})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JS, Base64 Encoding
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://secret-message-peach-ten.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/joeygonzzzz/secret-message">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${portfolioSite})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/*Hover Effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React, Tailwind, GetForm.io
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://portfolio-react-app-eight.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/joeygonzzzz/portfolio-react-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>





                </div>
            </div>
        </div>
  )
}

export default Work