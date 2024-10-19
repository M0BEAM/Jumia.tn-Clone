import { IoIosArrowForward } from "react-icons/io";
import img1 from "../assets/images/tech (1).png"
import img2 from "../assets/images/tech (2).png"
import img3 from "../assets/images/tech (3).png"
import img4 from "../assets/images/tech (4).png"
import img5 from "../assets/images/tech (5).png"
import img6 from "../assets/images/tech (6).png"

const Tech = () => {
    return ( 
        <>
        <div className="bg-white my-4">
     <div className=" py-4 overflow-hidden">
       <div className="flex flex-col bg-[#FFF2D6]  sm:flex-row w-full sm:justify-between sm:p-6">
         <div className="flex justify-center    gap-x-2 items-center my-2">
           {/* <img src={vf_Logo} alt="vente flash logo" /> */}
           <p className="font-bold">Tech</p>
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
           <p>Smartphones</p>
   
         </div>
         {/* end of card2 */}
         {/* card1 */}
         <div className=" m-4">
           <img className="w-72 lg:w-full" src={img2} alt="" />
           <p>Télévisons & Acc</p>
   
         </div>
         {/* end of card2 */}
         {/* card3 */}
         <div className=" m-4">
           <img className="w-72 lg:w-full" src={img3} alt="" />
           <p>Informatique</p>
    
         </div>
         {/* end of card3 */}
         {/* card4 */}
         <div className=" m-4">
           <img className="w-72 lg:w-full" src={img4} alt="" />
           <p>Acc Téléphonie</p>
     
         </div>
 {/* end of card4 */}
          {/* card4 */}
          <div className=" m-4">
           <img className="w-72 lg:w-full" src={img5} alt="" />
           <p>Gaming</p>
  
         </div>
 {/* end of card4 */}
          {/* card4 */}
          <div className=" m-4">
           <img className="w-72 lg:w-full" src={img6} alt="" />
           <p>Smartwatch</p>
    
         </div>
 {/* end of card4 */}
       </div>
    
       
     </div>

   </div>
     </>
     );
}
 
export default Tech;