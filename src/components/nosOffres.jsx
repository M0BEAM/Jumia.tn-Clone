import { IoIosArrowForward } from "react-icons/io"
import img1 from "../assets/images/dnfo (1).png"
import img2 from "../assets/images/dnfo (2).png"
import img3 from "../assets/images/dnfo (3).png"
import img4 from "../assets/images/dnfo (4).png"
import img5 from "../assets/images/dnfo (5).png"
import img6 from "../assets/images/dnfo (6).png"

const NosOffres = () => {
    return ( 
        <>
        <div className="bg-white my-4">
     <div className=" py-4 overflow-hidden">
       <div className="flex flex-col   sm:flex-row w-full sm:justify-between sm:mx-8">
         <div className="flex justify-center  gap-x-2 items-center my-2">
           {/* <img src={vf_Logo} alt="vente flash logo" /> */}
           <p>Découvrir nos offres et services</p>
         </div>
    
         <div className="flex text-sm sm:text-md gap-x-2 sm:w-36 items-center justify-end mr-6 sm:mr-10">
           <p>VOIR PLUS</p>
           <span><IoIosArrowForward /></span>
         </div>
       </div>

     </div>

     <div className="overflow-x-scroll">
       {/* cards  */}
       <div className="flex justify-center  w-max lg:w-full ml-2 ">
         {/* card1 */}
         <div className=" m-4">
           <img className="w-72 lg:w-full" src={img1} alt="" />
          
         </div>
         {/* end of card1 */}
         {/* card2 */}
         <div className=" m-4">
           <img className="w-72 lg:w-full" src={img2} alt="" />
    
         </div>
         {/* end of card2 */}
         {/* card3 */}
         <div className=" m-4">
           <img className="w-72 lg:w-full" src={img3} alt="" />
       
         </div>
         {/* end of card3 */}
    
      {/* card4 */}
      <div className=" m-4">
           <img className="w-72 lg:w-full" src={img4} alt="" />
    
         </div>
 {/* end of card4 */}

       {/* card5 */}
       <div className=" m-4">
           <img className="w-72 lg:w-full" src={img5} alt="" />
     
         </div>
 {/* end of card5 */}
       {/* card6 */}
       <div className=" m-4">
           <img className="w-72 lg:w-full" src={img6} alt="" />
      
         </div>
 {/* end of card6 */}

       </div>
      
       
     </div>

   </div>
     </>
     );
}
 
export default NosOffres;