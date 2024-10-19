import logo from "../assets/images/logo.png"
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuHelpCircle } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { MdMenu } from "react-icons/md";
import { useContext } from "react";
import { navContext } from "../context/context";

const NavBar = () => {
    const {setActive ,active} = useContext(navContext)
    return (
        <div className="bg-white py-4 lg:py-1 ">
            <div className="navbar flex items-center p-4 justify-between ">
                {/* jumia logo + search input */}
                <div className="flex-1 flex lg:flex-row flex-col  justify-between ">
                    <div className="flex items-center">
                            <div className="menu lg:hidden" onClick={()=>setActive(!active)}>
                                <MdMenu className="menu w-8 h-8" />
                            </div>
                        <img className="w-28 md:w-48 self-center" src={logo} alt="jumia logo" />
                    </div>
                    <div className="hidden lg:flex gap-x-4 ">
                        <div className="flex border w-fit p-2">
                            <div className="flex items-center">
                                <FaSearch />
                            </div>
                            <input className="outline-none ml-2" type="text" placeholder="Cherchez un produit, une…" />
                        </div>
                        <button className="bg-[#F68B1E] text-white p-2 rounded-lg">RECHERCHER</button>
                    </div>
                </div>
                {/* nav items */}
                <div className="flex-1 flex justify-end gap-x-4">
                    <a href="#" className="flex gap-x-2 "><p className="flex items-center"><FaUserAlt className="w-6 h-6" /></p><p><span className="hidden lg:block">Se Connecter</span> </p><p className="flex items-center"><IoIosArrowDown /></p></a>
                    <a href="#" className="hidden lg:flex gap-x-2"><p className="flex items-center"><LuHelpCircle className="w-6 h-6"/></p>Aider<p className="flex items-center"><IoIosArrowDown /></p></a>
                    <a href="#" className="flex gap-x-2"><p className="flex items-center"><SlBasket className="w-6 h-6"/></p><span className="hidden lg:block">Pannier</span></a>
                </div>

            </div>
            <div className="lg:hidden flex  gap-x-4 mx-6 ">
                <div className="flex border w-full rounded-3xl lg:rounded-none p-2">
                    <div className="flex items-center">
                        <FaSearch />
                    </div>
                    <input className="outline-none ml-2" type="text" placeholder="Cherchez un produit, une…" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;