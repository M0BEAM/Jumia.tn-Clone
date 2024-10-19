import img1 from '../assets/images/nmo (1).png'
import img2 from '../assets/images/nmo (2).png'
import img3 from '../assets/images/nmo (3).png'
import img4 from '../assets/images/nmo (4).png'
import { IoIosArrowForward } from "react-icons/io";

const MeilleureOffre = () => {
    return ( 
        <div className="bg-white my-4">
        <div className="bg-[#ffb726]  text-black py-4 overflow-hidden">
          <div className="flex flex-col   sm:flex-row w-full sm:justify-between sm:mx-8">
            <div className="flex justify-center  gap-x-2 items-center my-2">
              {/* <img src={vf_Logo} alt="vente flash logo" /> */}
              <p>Nos Meilleures Offres | Jusqu'à -60%</p>
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
              
              </div>
            </div>
  
          </div>
          {/* end of card4 */}
        </div>
  
      </div>
     );
}
 
export default MeilleureOffre;