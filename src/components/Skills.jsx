import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Tailwind from '../assets/tailwind.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f]">
        {/*Container*/}
        <div>
            <div>
                <p>Experience</p>
                <p>These are the languages that I've worked with</p>
            </div>

            <div>
                <div>
                    <img src={HTML} alt="HTML icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills