import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { PiTelevisionThin } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";
import { MdCoffeeMaker } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import { GiGamepad } from "react-icons/gi";
import { GiMuscularTorso } from "react-icons/gi";
import { PiPottedPlantFill } from "react-icons/pi";
import { LuApple } from "react-icons/lu";
import { PiDotsThreeCircle } from "react-icons/pi";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from "../assets/images/hero (1).jpg"
import image2 from "../assets/images/hero (2).jpg"
import image3 from "../assets/images/hero (3).jpg"
import image4 from "../assets/images/hero (4).jpg"
import image5 from "../assets/images/hero (5).jpg"
import image6 from "../assets/images/hero (6).jpg"
import image7 from "../assets/images/hero (7).jpg"
import { useContext } from "react";
import { navContext } from "../context/context";
import { IoCloseOutline } from "react-icons/io5";
const Hero = () => {
    const {active,setActive } = useContext(navContext)

    const fadeImages = [
        {
            url: image1,
            caption: 'First Slide'
        },
        {
            url: image2,
            caption: 'Second Slide'
        },
        {
            url: image3,
            caption: 'Third Slide'
        },
        {
            url: image4,
            caption: 'Third Slide'
        },
        {
            url: image5,
            caption: 'Third Slide'
        },
        {
            url: image6,
            caption: 'Third Slide'
        },
        {
            url: image7,
            caption: 'Third Slide'
        }
    ];

    return (
        <div className="hero flex items-center mt-4">
            {/* sideBar */}
           
            <div className={`${active?"absolute top-0 left-0 z-50 h-screen space-y-6 ":"hidden"} py-6 w-96 lg:flex flex-col  bg-white gap-y-4 pl-4 lg:text-lg`}>
                <a href="#" onClick={()=>setActive(!active)} className="block absolute lg:hidden right-0 mr-2"><IoCloseOutline className="w-8 h-8"/></a>
                <a className="flex" href="#"><p className="flex items-center mr-2 ">< MdOutlinePhoneAndroid className="w-6 h-6" /></p>Téléphone & Tablette</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< TbToolsKitchen3 className="w-6 h-6" /></p>Cuisine & Électroménager</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< GiLipstick className="w-6 h-6" /></p>Santé & Beauté</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< PiTelevisionThin className="w-6 h-6" /></p>Électroniques</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< IoShirt className="w-6 h-6" /></p>Mode</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< MdCoffeeMaker className="w-6 h-6" /></p>Maison & Bureau</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< HiDesktopComputer className="w-6 h-6" /></p>Informatique</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< GiGamepad className="w-6 h-6" /></p>Jeux vidéos & Consoles</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< GiMuscularTorso className="w-6 h-6" /></p>Articles de sport</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< PiPottedPlantFill className="w-6 h-6" /></p>Quincaillerie & Jardin</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< LuApple className="w-6 h-6" /></p>Superette</a>
                <a className="flex" href="#"><p className="flex items-center mr-2">< PiDotsThreeCircle className="w-6 h-6" /></p>Autres catégories</a>
            </div>
            {/* images */}
            <div className="slide-container overflow-hidden mx-auto lg:w-2/3">
                <Fade>
                    {fadeImages.map((fadeImage, index) => (
                        <div key={index}>
                            <img className="w-full" src={fadeImage.url} />
                            <p>{name}</p>
                        </div>
                    ))}
                </Fade>
            </div>
        </div>
    );
}

export default Hero;