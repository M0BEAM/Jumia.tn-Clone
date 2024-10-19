import vf_Logo from "../assets/images/vf_logo.png"
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../assets/images/vf (1).png"
import img2 from "../assets/images/vf (2).png"
import img3 from "../assets/images/vf (3).png"
import img4 from "../assets/images/vf (4).png"
const VenteFlash = () => {
  return (
    <div className="bg-white">
      <div className="bg-red-600  text-white py-4 overflow-hidden">
        <div className="flex flex-col   sm:flex-row w-full sm:justify-between sm:mx-8">
          <div className="flex justify-center  gap-x-2 sm:w-36 items-center">
            <img src={vf_Logo} alt="vente flash logo" />
            <p>Ventes Flash</p>
          </div>
          <div className="flex items-center justify-center  ">
            <p>Termine dans : <span className="font-bold">22h : 38m : 22s</span> </p>
          </div>
          <div className="flex text-sm sm:text-md gap-x-2 sm:w-36 items-center justify-end mr-6 sm:mr-10">
            <p>VOIR PLUS</p>
            <span><IoIosArrowForward /></span>
          </div>
        </div>

      </div>

      <div className="overflow-x-scroll">
        {/* cards  */}
        <div className="flex justify-center xl:gap-6 w-max lg:w-full ml-2 ">
          {/* card1 */}
          <div className=" m-4">
            <img className="w-72 lg:w-full" src={img1} alt="" />
            <p>Infinix Pack Note 30 Gold - 8G…</p>
            <p className="font-bold">679.00 TND</p>
            <p className="line-through">799.00 TND</p>
            <div className="w-full">
              <p>1 article restant</p>
              <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <p className="w-full bg-orange-400 h-2.5 rounded-full" style={{ width: "45%" }}></p>
              </div>
            </div>
          </div>
          {/* end of card2 */}
          {/* card1 */}
          <div className=" m-4">
            <img className="w-72 lg:w-full" src={img2} alt="" />
            <p>Infinix Pack Note 30 Gold - 8G…</p>
            <p className="font-bold">679.00 TND</p>
            <p className="line-through">799.00 TND</p>
            <div className="w-full">
              <p>1 article restant</p>
              <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <p className="w-full bg-orange-400 h-2.5 rounded-full" style={{ width: "45%" }}></p>
              </div>
            </div>
          </div>
          {/* end of card2 */}
          {/* card3 */}
          <div className=" m-4">
            <img className="w-72 lg:w-full" src={img3} alt="" />
            <p>Infinix Pack Note 30 Gold - 8G…</p>
            <p className="font-bold">679.00 TND</p>
            <p className="line-through">799.00 TND</p>
            <div className="w-full">
              <p>1 article restant</p>
              <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <p className="w-full bg-orange-400 h-2.5 rounded-full" style={{ width: "45%" }}></p>
              </div>
            </div>
          </div>
          {/* end of card3 */}
          {/* card4 */}
          <div className=" m-4">
            <img className="w-72 lg:w-full" src={img4} alt="" />
            <p>Infinix Pack Note 30 Gold - 8G…</p>
            <p className="font-bold">679.00 TND</p>
            <p className="line-through">799.00 TND</p>
            <div className="w-full">
              <p>1 article restant</p>
              <div className="w-full bg-gray-200 h-2.5 rounded-full">
                <p className="w-full bg-orange-400 h-2.5 rounded-full" style={{ width: "45%" }}></p>
              </div>
            </div>
          </div>

        </div>
        {/* end of card4 */}
      </div>

    </div>
  );
}

export default VenteFlash;