import React from 'react';
import './LandingPage.css';
import {FaCircle} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";

const LandingPage = () => {
    return (
        <section className={"section-1"} >
            <div className={"first-box items-start justify-start d-flex flex-row flex-shrink-0"}>
                <div className={"second-box items-start justify-start d-flex flex-row flex-shrink-0"}>
                    <div className={"lights"}>
                        <div id={"red"}>
                            <FaCircle style={{ color: '#da180a', fontSize: '10px' }} id={"FaCircle"}/>
                        </div>
                        <div id={"yellow"}>
                            <FaCircle style={{ color: '#dac90a', fontSize: '10px' }} id={"FaCircle"}/>
                        </div>
                        <div id={"green"}>
                            <FaCircle style={{ color: '#00a100', fontSize: '10px' }} id={"FaCircle"}/>
                        </div>
                    </div>
                    <div className={"inner-div"}>
                        <div className="gradient-overlay"></div>
                        <div className={"description-page"}>
                            <div className={"intro"}>
                                <h1>Software Engineer, creating apps that matter.</h1>
                            </div>
                            <div className={"title justify-end items-end"}>
                                <h4>Software Engineering Fellow @ Headstarter AI</h4>
                                <h4>Formerly @ Fiverr.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"section-fader"}>
                <div className={"arrow-down items-center justify-center"}>
                    <HiArrowDown/>
                </div>
            </div>
            <div className={"space"}>

            </div>
        </section>
    )
};

export default LandingPage;
