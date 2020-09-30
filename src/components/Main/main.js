import React from "react";
import "./main.scss";
import logo from "../../img/logo.png";

const Main = () => {
    return (
        <>
            <div className="rootMain">
                <div className="mainContainer">
                    {/*<Header/>*/}
                    <div className="mainInfo">
                        <div className="mainBeforeHeader">
                            Wir sing mindnow
                        </div>
                        <h1 className="mainHeaderTitle">
                            Be hamble
                        </h1>
                    </div>
                </div>
            </div>
            <div className="aboutUsBlock">
                <div className="aboutUsBlockInner">
                    <div className="aboutUsImg">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className="aboutUsInfo">
                        <div className="aboutUsTitle">
                            About us
                        </div>
                        <div className="aboutUsText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                            necessitatibus nisi sint soluta voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                            necessitatibus nisi sint soluta voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                            necessitatibus nisi sint soluta voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                            necessitatibus nisi sint soluta voluptatem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                            necessitatibus nisi sint soluta voluptatem.
                        </div>
                        <button className="aboutUsBtn">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
