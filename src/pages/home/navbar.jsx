import {useState,useEffect} from "react";
import {Link} from "react-scroll" ;
import data from "../../data/index.json";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
  
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu;

            }
        }
        window.addEventListener("resize",handleResize);

        return() => {
            window.removeEventListener("resize",handleResize);

        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu;
        }
    }, []);
    
    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
        <img src="./img/mk logo tp.png" width={70} alt="logo" onClick={toggleNav}/>
        </div>
        <a className={`nav_hamburger ${navActive ? "active" : ""}`}>
            <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        </a>
        <div className={`navbar-items ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-70} duration={500} to="herosection" className="navbar-content">Home</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-20} duration={500} to="Myskills" className="navbar-content">My Skills</Link>
                </li>

                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-20} duration={500} to="portfolio" className="navbar-content">Portfolio</Link>
                </li>

                <li>
                    <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-30} duration={500} to="aboutme" className="navbar-content">About Me</Link>
                </li>

        
            </ul>

        </div>
        {data?.resume?.map((item) =>(
            <a href={item.link} target="_blank"><button activeClass="navbar-active-content" className="btn btn-outline-primary">Download Resume</button></a>
        ))}
        <Link onClick={closeMenu} activeClass="navbar-active-content" spy={true} smooth={true} offset={-90} duration={500} to="Contact" className="btn btn-outline-primary">Contact Me</Link>

        
        </nav>
    );

}

export default Navbar;
