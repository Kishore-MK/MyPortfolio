export default function Herosection(){
    return (
        <div className="herosection">
        <section id="herosection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey I'm MK</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Full Stack</span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero-section-description">some lorem shit going here and i will change soon i guess.
                    <br/>
                    more of the same lorem shit going here.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero-section-img">
                <img src="./img/kishore.jpg" alt=""/>
            </div>
        </section>
        </div>
    );

}