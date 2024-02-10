import {Link} from "react-scroll" ;
export default function Herosection(){

    return (
        
        <div className="herosection">
        <section id="herosection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey I'm Kishore</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Full Stack</span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero-section-description">I am passionate and dedicated tech enthusiast with a strong foundation in Python and Django. I currently working on developing full stack development skills and creating an impact with them.
                    <br/>
                    
                    </p>
                </div>
                <Link spy={true} smooth={true} offset={-10} duration={500} to="Contact" className="btn btn-primary">Get In Touch</Link>
            </div>
            <div className="hero-section-img">
                <img src="./img/kishore.jpg" alt=""/>
            </div>
        </section>
        </div>
    );

}