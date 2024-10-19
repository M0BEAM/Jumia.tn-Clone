import logo from "../assets/images/logo.png"
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import twiter from "../assets/images/twiter.png"
const Footer = () => {
    return ( 
        <div className="bg-gray-600 py-10">
        <div className="flex flex-col md:flex-row gap-y-8 justify-between  items-center mx-4 ">
            <div>
                <a href="#">
                    <img src={logo} alt="jumia logo" />
                </a>
            </div>
            <div className="flex flex-col justify-center">
                <div className="mx-2 text-white">
                    <p>Nouveau sur Jumia ?</p>
                    <p className=" text-sm">Inscrivez-vous à nos communications pour recevoir nos meilleures offres!</p>
                </div>
                <div className="flex my-2">
                    <div className="mr-4"> 
                        <input  className="py-2 px-4 rounded-xl" placeholder="Your Email" type="text" />
                    </div>
                    <div>
                        <button className="bg-white p-2 rounded-lg">Subscribe</button>
                    </div>
                </div>
              
            </div>
            <div className="flex justify-center items-center gap-x-4">
                    <img src={facebook} alt="facebook logo" />
                    <img src={instagram} alt="instagram logo" />
                    <img src={twiter} alt="twiter logo" />
                </div>
        </div>
        
        </div>
     );
}
 
export default Footer;
