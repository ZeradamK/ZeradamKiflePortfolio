import React, {useEffect, useState} from "react";
import './TechnologiesSection.css';
import {FaCircle} from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import  javascript  from "../../assets/js.png"
import  tailwind  from "../../assets/tailwind.png"
import  reactIcon  from "../../assets/React.png"
import  typescript from "../../assets/typescript.png"
import  next  from "../../assets/next.png"
import  node  from "../../assets/node.png"
import  express from "../../assets/Express.png"
import  mongo from "../../assets/mongodb.svg"
import  python from "../../assets/python.webp"
import  flask from "../../assets/Flask.png"
import  java from "../../assets/java.png"
import  aws from "../../assets/aws.png"
import  swift from "../../assets/swift.png"
import c from "../../assets/C++.png"

const TechnologiesSection=()=>{
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
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
    return (
        <section className={"section-2"}>
            <div className={"first-box-2 items-start justify-start d-flex flex-row flex-shrink-0"}>
                <div className={"second-box-2 justify-start d-flex flex-col flex-shrink-0"}>
                    <div className={"nav-box-2 items-start justify-between d-flex flex-row flex-shrink-0"}>
                        <div className={"inner-div-2 flex-row justify-center"}>
                            <div className={"description-page-2 justify-center"}>
                                <nav className={"flex items-center justify-between sticky"} id={"nav"}>
                                    <div className={"intro-2 mt-2 ml-10"}>
                                        <FaApple className={"apple"} />
                                    </div>
                                    <div className={"safari ml-4 mt-3"}>
                                        <p className={"safari-text"}>Safari</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"file-text"}>File</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"edit-text"}>Edit</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"view-text"}>View</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"history-text"}>History</p>
                                    </div>
                                    <div className={"safari ml-5 mt-3"}>
                                        <p className={"window-text"}>Window</p>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className={"camera-bump position-absolute justify-center translate-middle"}></div>
                        <div className={"arrow-right items-center mt-1 mr-10"}>
                            <div className={"battery mr-4"}><IoIosBatteryFull /></div>
                            <div className={"search mr-3"}><IoIosSearch /></div>
                            <div className={"m-3"} id="date">{date}</div>
                            <div className={"m-3"} id="time">{time}</div>
                        </div>
                    </div>
                    <div className={"browser items-start justify-center d-flex flex-row flex-shrink-0 mt-10"}>
                        <div className={"browser-content items-start justify-between d-flex flex-row flex-shrink-0"}>
                            <div className={"browser-lights"}>
                                <div id={"browser-red"}>
                                    <FaCircle style={{ color: '#f85248', fontSize: '12px' }} id={"FaCircle"} />
                                </div>
                                <div id={"browser-yellow"}>
                                    <FaCircle style={{ color: '#efe144', fontSize: '12px' }} id={"FaCircle"} />
                                </div>
                                <div id={"browser-green"}>
                                    <FaCircle style={{ color: '#4ef64e', fontSize: '12px' }} id={"FaCircle"} />
                                </div>

                            </div>
                            <div className={"browser-nav w-full flex items-center justify-between sticky ml-10"}>
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
                                    <div className={"share"}>
                                        <IoShareOutline/>
                                    </div>
                                    <div className={"plus ml-5"}>
                                        <FaPlus/>
                                    </div>
                                    <div className={"copy ml-5"}>
                                        <IoCopyOutline/>
                                    </div>
                                </div>
                            </div>
                            <div className={"inner-browser flex-col justify-start items-start"}>
                                <div className={"overlay-2"}></div>
                                <div className={"browser-spacing"}>

                                </div>
                                <div className={"browser-description-page flex-col justify-between"}>
                                    <div className={"browser-intro-languages mb-10"}>
                                        <h1>Expertise</h1>
                                    </div>
                                    <div className={" languages flex flex-row ml-20 mb-5"}>
                                        <div className={"javascript ml-5"}>
                                            <img className={"javascript-icon"} src={javascript} alt="JavaScript" />
                                        </div>
                                        <div className={"tailwind ml-5"}>
                                            <img className={"tailwind-icon"} src={tailwind} alt="tailwind" />
                                        </div>
                                        <div className={"typescript ml-5"}>
                                            <img className={"typescript-icon"} src={typescript} alt="typescript" />
                                        </div>
                                        <div className={"python ml-5"}>
                                            <img className={"python-icon"} src={python} alt="python" />
                                        </div>
                                        <div className={"swift ml-5"}>
                                            <img className={"swift-icon"} src={swift} alt="swift" />
                                        </div>
                                        <div className={"java ml-5"}>
                                            <img className={"java-icon"} src={java} alt="java" />
                                        </div>
                                        <div className={"c ml-5"}>
                                            <img className={"c-icon"} src={c} alt="c++" />
                                        </div>
                                    </div>
                                    <div className={" frameworks flex flex-row ml-20 mb-5"}>
                                        <div className={"react ml-5"}>
                                            <img className={"react-icon"} src={reactIcon} alt="react" />
                                        </div>
                                        <div className={"aws ml-5"}>
                                            <img className={"aws-icon"} src={aws} alt="aws" />
                                        </div>
                                        <div className={"next ml-5"}>
                                            <img className={"next-icon"} src={next} alt="next" />
                                        </div>
                                        <div className={"node ml-5"}>
                                            <img className={"node-icon"} src={node} alt="node" />
                                        </div>
                                        <div className={"express ml-5"}>
                                            <img className={"express-icon"} src={express} alt="express" />
                                        </div>
                                        <div className={"mongo ml-5"}>
                                            <img className={"mongo-icon"} src={mongo} alt="mongo" />
                                        </div>
                                        <div className={"flask ml-5"}>
                                            <img className={"flask-icon"} src={flask} alt="flask" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologiesSection;