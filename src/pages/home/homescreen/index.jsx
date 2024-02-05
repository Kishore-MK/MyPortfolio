import Herosection from "../Herosection";
import Myskills from "../myskills";
import AboutMe from "../Aboutme";
import Myportfolio from "../myportfolio"
import Testimonials from "../testimonials";
import ContactMe from "../Contactme";
import Footer from "../footer";
export default function Homescreen(){
    return(
        <>
        <Herosection />
        <Myskills />
        <AboutMe/>
        <Myportfolio/>
        <Testimonials/>
        <ContactMe/>
        <Footer/>
        </>
    );
}