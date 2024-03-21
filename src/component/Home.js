import "./Home.css"
import myimages from "../images/hero1.jpg"
import farsamimage from "../images/hero2 (2).jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slideToshow: 2,
        slideToscroll: 1,
        autoplay:true

    }
    return(
        <section className="Home1">

             <Slider {...settings}>
            <div className="slide-item">
                <img src={myimages} className="slide-image" alt="Home"/>
            </div>

            <div className="slide-item">
                <img src={farsamimage} className="slide-image" alt="Home"/>

            </div>

            </Slider>
    
            <section className="home2">
                <div className="main-home">
                    <h1 className="home-text1">We provide with affordable, best-in class  household hygiene products.</h1> 
                    <p className="home-text2">Farsam Fresh Enterpise Limited (FFEL) aims to significantly impact the availabilty of hygiene and sanitation solutions fo Nigeria.</p>

                </div>

            </section>
        </section>
    )
}

export default Home