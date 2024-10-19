import star from "../assets/images/star.png"
import logo from "../assets/images/logo.png"
import pay from "../assets/images/pay.png"
const Banner = () => {
    return (
        <div className="banner flex py-2">
            <div className="flex-1  flex items-center gap-x-2 ">
                <img className="w-4 ml-6" src={star} alt="star logo" />
                <a className="text-sm lg:text-lg" href="#">Vendez sur Jumia</a>
            </div>
            <div className="flex-1 flex justify-end sm:justify-start items-center">
                <img className="w-20" src={logo} alt="jumia logo" />
                <img className="w-12" src={pay} alt="pay logo" />
            </div>
        </div>
    );
}

export default Banner;