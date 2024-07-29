import React, {useEffect, useState} from "react";
import {FaApple, FaCircle} from "react-icons/fa";
import {IoIosBatteryFull, IoIosSearch} from "react-icons/io";
import {TfiMenuAlt} from "react-icons/tfi";
import {FaArrowRight, FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import "./ExperiancePage.css";
import { IoHammer } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import skills from './skills-banner.jpg';
import languages from './imgs/languages.png';
import frameworks from './imgs/frameworks.png';
import libraries from './imgs/library.png';
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
import pdf from "../../../public/MySWEResume.pdf"
import pdfImage from "../ExperiancePage/resume.jpg"

const ExperiancePage =()=>{
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [speed, setSpeed] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [activePanel, setActivePanel] = useState('skills');
    const [activeSkillPanel, setActiveSkillPanel] = useState('languages');
    const [activePDF, setActivePDF] = useState(null);
    const [activeURL, setActiveURL] = useState(null);
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

    const renderSkillContent = () => {
        switch (activeSkillPanel) {
            case 'languages':
                return (
                    <div className={"skill-pack"} id={"languages"}>
                        <div className={"languages flex flex-row mb-5"}>
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
                    </div>
                );
            case 'frameworks':
                return (
                    <div className={"skill-pack"} id={"frameworks"}>
                        <div className={" frameworks flex flex-row mb-5 "}>
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
                );
            default:
                return null;
        }
    };
    const PDFViewer = ({ pdfUrl }) => {
        return (
            <div className="pdf-viewer">
                <iframe
                    src={pdfUrl}
                    width="100%"
                    height="600px"
                    title="PDF Viewer"
                    frameBorder="0"
                ></iframe>
            </div>
        );
    };



    const renderContent = () => {
            switch (activePanel) {
                case 'skills':
                    return (
                        <div className={"skills-div"}>
                            <div className={"skills-banner"}>
                                <div className={"banner-div"}>
                                    <img className={"banner-bg"} src={skills} alt={"banner"}/>
                                </div>
                                <div className={"skills-line"}>
                                    <div className={`skill-section ${activeSkillPanel === 'languages' ? 'active' : ''}`} id={"languages"} onClick={() => setActiveSkillPanel('languages')}>
                                        <div className={"discription"}>
                                            <h1 className={"discription-title"}>Languages</h1>
                                        </div>
                                        <div className={"icon-div"}>
                                            <img className={"languages-icon"} src={languages} alt={"languages-icon"} />
                                        </div>
                                    </div>
                                    <div className={`skill-section ${activeSkillPanel === 'frameworks' ? 'active' : ''}`} id={"frameworks"} onClick={() => setActiveSkillPanel('frameworks')}>
                                        <div className={"discription"}>
                                            <h1 className={"discription-title"}>Frameworks</h1>
                                        </div>
                                        <div className={"icon-div"}>
                                            <img className={"frameworks-icon"} src={frameworks} alt={"frameworks-icon"} />
                                        </div>
                                    </div>
                                </div>
                                <div className={"skills-line"}>
                                    {renderSkillContent()}
                                </div>
                            </div>
                        </div>
                    );
                case 'experience':
                    return <div>Experience Content</div>;
                case 'resume':
                   return (
                       <div className="resume-div">
                          <img src={pdfImage} alt={"pdf"}/>
                       </div>
                );
                case 'about':
                    return <div>About Content</div>;
                case 'contact':
                    return <div>Contact Content</div>;
                default:
                    return <div>Skills Content</div>;
            }
        };


        return (
        <section className={"section-4"}>
            <div className={"first-box-4 items-start justify-start d-flex flex-row flex-shrink-0"}>
                <div className={"second-box-4 justify-start d-flex flex-col flex-shrink-0"}>
                    <div className={"nav-box-4 items-start justify-between d-flex flex-row flex-shrink-0"}>
                        <div className={"inner-div-4 flex-row justify-center"}>
                            <div className={"description-page-4 justify-center"}>
                                <nav className={"flex items-center justify-between sticky"} id={"nav"}>
                                    <div className={"intro-4 mt-2 ml-10"}>
                                        <FaApple className={"apple-2"} />
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
                        <div className={"camera-bump-3 position-absolute justify-center translate-middle"}></div>
                        <div className={"arrow-right-3 items-center mt-1 mr-10"}>
                            <div className={"battery-experiance mr-4"}><IoIosBatteryFull /></div>
                            <div className={"search-experiance mr-3"}><IoIosSearch /></div>
                            <div className={"m-3"} id="date-experiance">{date}</div>
                            <div className={"m-3"} id="time-experiance">{time}</div>
                        </div>
                    </div>
                    <div className={"browser-3 d-flex flex-row flex-shrink-0 mt-10"}>
                        <div className={"browser-content-3 d-flex flex-col flex-shrink-0"} style={{ marginRight: 'auto' }}>
                            <div className={"browser-lights-3"}>
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
                            <div className={"browser-nav-3 w-full flex items-start flex-col justify-between sticky mt-10"}>
                                <div className={`panels flex items-start mr-5 ${activePanel === 'skills' ? 'active' : ''}`}
                                     onClick={() => setActivePanel('skills')}>
                                    <IoIosStar className={"mt-3 mr-3 ml-5"}/><h1 className={"mt-2"}>Skills</h1>
                                </div>
                                <div className={`panels flex items-start mr-5 ${activePanel === 'resume' ? 'active' : ''}`}
                                        onClick={() => setActivePanel('resume')}>
                                    <IoBookSharp className={"mt-3 mr-3 ml-5"} /><h1 className={"mt-2"}>Resume</h1>
                                </div>
                            </div>
                        </div>
                        <div className={"browser-content-main d-flex flex-column justify-center"}>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ExperiancePage;