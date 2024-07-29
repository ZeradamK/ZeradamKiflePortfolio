import React, {useState} from "react";
import "./Navbar.css";
import {FaArrowDown, FaArrowUp, FaCircle} from 'react-icons/fa';
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHome } from 'react-icons/fa';
import { CiGrid41 } from "react-icons/ci";
import { BsXLg } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";

import avatar from "/src/assets/avatar.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons";




const Navbar=()=>{
    const [activeTab, setActiveTab] = useState('home');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <nav className={"flex items-center justify-between py-7 px-10 sticky "} id={"nav"}>
            <div className={"items-start justify-start d-flex flex-row flex-shrink-0"}>
                <div className="items-start justify-start flex flex-row flex-shrink-0 avatar-area" id="avatar-area">
                    <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full avatar-img" />
                </div>
                <div className={"items-start justify-start d-flex flex-row flex-shrink-0"} id={"logo-area"}>
                    <div id={"online"}>
                        <FaCircle style={{ color: '#ffffff', fontSize: '10px' }} id={"FaCircle"}/>
                    </div>
                    <div id={"logo-text"}>
                        <h2 className={"Logo text-white hover:accent-blue-400"}>Zeradam Kifle.</h2>
                        <p className={"text-white hover:accent-blue-400 font-extralight"}>Full-Stack Software Engineer</p>
                    </div>
                </div>
            </div>
            <div className="toggler-container">
                <div className="items-center justify-center flex flex-row" id="Home-Projects-Tab">
                    <button
                        id="home-tab"
                        className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
                        onClick={() => handleTabClick('home')}
                    >
                        <FaHome className={"icon"} />
                        <div className="slide mt-2"></div>
                    </button>
                    <button
                        id="projects-tab"
                        className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
                        onClick={() => handleTabClick('projects')}
                    >
                        <span className={"projects"}>Projects</span>
                        <div className="slide"></div>
                    </button>
                </div>
            </div>
            <div className="flex flex-row justify-end" id="linkdin-git">
                {/* Visible icons on larger screens */}
                <div className="icon-links flex">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" id={"links"}>
                        <FaGithub className="mx-3 github-icon" style={{ color: 'white', width: '25px', height: 'auto' }} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id={"links"}>
                        <FaLinkedinIn className="mx-3 linkedin-icon" style={{ color: 'white', width: '25px', height: 'auto' }} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id={"links"}>
                        <SiGmail className="mx-3 linkedin-icon" style={{ color: 'white', width: '25px', height: 'auto' }} />
                    </a>

                </div>
                {/* Dropdown menu for smaller screens */}
                <div className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
                    <div onClick={toggleDropdown} className="mx-3 dropdown-toggle">
                        {dropdownOpen ? (
                            <BsXLg className={`dropdown-toggle-text ${dropdownOpen ? 'rotate-back' : ''}`} />
                        ) : (
                            <CiGrid41 className={`dropdown-toggle-text ${dropdownOpen ? 'rotate' : ''}`} />
                        )}
                    </div>
                    <div className="dropdown-content">
                        <a className={"flex-row"} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                            <span className="arrow flex-row"><HiArrowUpRight/></span>
                        </a>
                        <a className={"flex-row"} href="https://github.com" target="_blank" rel="noopener noreferrer">
                            GitHub
                            <span className="arrow flex-row"><HiArrowUpRight/></span>
                        </a>
                        <a className={"flex-row"} href="https://github.com" target="_blank" rel="noopener noreferrer">
                            Mail
                            <span className="arrow flex-row"><HiArrowUpRight/></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </nav>



    )
}


export default Navbar;