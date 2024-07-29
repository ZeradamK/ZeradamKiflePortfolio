import React, {useEffect, useState} from "react";
import './Projects.css';
import {FaCircle} from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import javascript from "../../assets/js.png";
import tailwind from "../../assets/tailwind.png";
import typescript from "../../assets/typescript.png";
import python from "../../assets/python.webp";
import swift from "../../assets/swift.png";
import java from "../../assets/java.png";
import c from "../../assets/C++.png";
import reactIcon from "../../assets/React.png";
import aws from "../../assets/aws.png";
import next from "../../assets/next.png";
import node from "../../assets/node.png";
import express from "../../assets/Express.png";
import mongo from "../../assets/mongodb.svg";
import flask from "../../assets/Flask.png";
import Netxspeed from "./netxspeed/Netxspeed.jsx";


const Projects = () =>{
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [speed, setSpeed] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            const timeOptions = { hour: '2-digit', minute: '2-digit' };
            setDate(now.toLocaleDateString(undefined, dateOptions));
            setTime(now.toLocaleTimeString(undefined, timeOptions));
        };
        const intervalId = setInterval(updateDateTime, 60000);
        updateDateTime();
        return () => clearInterval(intervalId);
    }, []);
    const handleButtonClick = () => {
        const imgLink = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Tokyo_Skytree_%281%29.JPG';

        const downloadSize = 3680000;
        const time_start = new Date().getTime();
        const cacheImg = `?nn=${time_start}`;
        const downloadSrc = new Image();

        setIsLoading(true);

        downloadSrc.onload = () => {
            const time_end = new Date().getTime();
            const timeDuration = (time_end - time_start) / 1000;
            const loadedBytes = downloadSize * 8;
            const totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);

            setSpeed(totalSpeed);
            setIsLoading(false);
        };

        downloadSrc.src = imgLink + cacheImg;

        // Simulate loading for 2 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    return (
        <section className={"section-3"}>
            <div className={"first-box-3 items-start justify-start d-flex flex-row flex-shrink-0"}>
                <div className={"second-box-3 justify-start d-flex flex-col flex-shrink-0"}>
                    <div className={"nav-box-3 items-start justify-between d-flex flex-row flex-shrink-0"}>
                        <div className={"inner-div-3 flex-row justify-center"}>
                            <div className={"description-page-3 justify-center"}>
                                <nav className={"flex items-center justify-between sticky"} id={"nav"}>
                                    <div className={"intro-3 mt-2 ml-10"}>
                                        <FaApple className={"apple-1"} />
                                    </div>
                                    <div className={"safari ml-4 mt-3"}>
                                        <p className={"safari-text-1"}>Projects</p>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className={"camera-bump-2 position-absolute justify-center translate-middle"}></div>
                        <div className={"arrow-right-2 items-center mt-1 mr-10"}>
                            <div className={"battery mr-4"}><IoIosBatteryFull /></div>
                            <div className={"search mr-3"}><IoIosSearch /></div>
                            <div className={"m-3"} id="date">{date}</div>
                            <div className={"m-3"} id="time">{time}</div>
                        </div>
                    </div>
                    <div className={"browser-2 items-start justify-center d-flex flex-row flex-shrink-0 mt-10"}>
                        <div className={"browser-content-2 items-start justify-between d-flex flex-row flex-shrink-0"}>
                            <div className={"browser-lights-2"}>
                                <div id={"browser-red-2"}>
                                    <FaCircle style={{ color: '#f85248', fontSize: '12px' }} id={"FaCircle"} />
                                </div>
                                <div id={"browser-yellow-2"}>
                                    <FaCircle style={{ color: '#efe144', fontSize: '12px' }} id={"FaCircle"} />
                                </div>
                                <div id={"browser-green-2"}>
                                    <FaCircle style={{ color: '#4ef64e', fontSize: '12px' }} id={"FaCircle"} />
                                </div>

                            </div>
                            <div className={"browser-nav-2 w-full flex items-center justify-between sticky ml-10"}>
                                <div className={"flex items-center mt-4"}>
                                    <div className={"bookmark"}>
                                        <TfiMenuAlt/>
                                    </div>
                                    <div className={"left-arrow ml-10"}>
                                        <FaChevronLeft/>
                                    </div>
                                    <div className={"right-arrow ml-3"}>
                                        <FaChevronRight/>
                                    </div>
                                </div>
                                <div className={"flex items-center mr-5 mt-4"}>
                                    <div className={"share mr-2"}>
                                       <FaArrowRight href={"https://zeradamk.github.io/netxspeed/"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"inner-browser-2 flex-col justify-start items-start"}>
                            <Netxspeed url="https://zeradamk.github.io/netxspeed/" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;