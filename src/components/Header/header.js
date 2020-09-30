import React, {useState} from "react";
import "./header.scss";
import logo from "../../img/logo.png";
import {Link} from "react-router-dom";

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
        return menuIsOpen
    };
    return (
        <div className="rootHeader">
            <div className="mainContainer">
                <div className="mainHeader">
                    <img src={logo} className="logo"/>
                    <ul className="headerMenu">
                        <li>
                            <Link to={"/case-studies"}>
                                Case
                            </Link>
                        </li>
                        <li>
                            <Link to={"/skills"}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}>
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="headerLanguage">DE</div>
                    <div className="menuBtn"
                         onClick={onMenuClick}>
                        <span/>
                    </div>
                    <ul className="burgerMenu" style={{display: menuIsOpen ? 'block' : 'none'}}>
                        <li>
                            <Link to={"/case-studies"}>
                                Case
                            </Link>
                        </li>
                        <li>
                            <Link to={"/skills"}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}>
                                About
                            </Link>
                        </li>
                        <div className="menuBtn closeBtn"
                             onClick={onMenuClick}>
                            <span/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
