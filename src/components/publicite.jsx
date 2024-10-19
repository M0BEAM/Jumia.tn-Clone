import img1 from "../assets/images/pub (1).jpg"
import img2 from "../assets/images/pub (2).jpg"
const Publicite = () => {
    return (
        <div className="flex flex-col items-center gap-y-4  sm:flex-row bg-white p-10 gap-x-6 justify-center">
          <img className="h-[150px] w-[300px] xl:h-[300px] xl:w-[600px]" src={img1} alt="" />
          <img className="h-[150px] w-[300px] xl:h-[300px] xl:w-[600px]" src={img2}  alt="" />
        </div>
    );
}

export default Publicite;