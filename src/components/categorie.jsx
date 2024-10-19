import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import categorie1 from "../assets/images/categorie (1).png" 
import categorie2 from "../assets/images/categorie (2).png" 
import categorie3 from "../assets/images/categorie (3).png" 
import categorie4 from "../assets/images/categorie (4).png" 
import categorie5 from "../assets/images/categorie (5).png" 
import categorie6 from "../assets/images/categorie (6).png" 
import categorie7 from "../assets/images/categorie (7).png" 
import categorie8 from "../assets/images/categorie (8).png" 
import categorie9 from "../assets/images/categorie (9).png" 
import categorie10 from "../assets/images/categorie (10).png" 
import categorie11 from "../assets/images/categorie (11).png" 

const Categorie = () => {
    return (
        <div className="categorie flex justify-center my-4 mx-auto bg-white py-4">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 6,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
              <img src={categorie1} alt="" />
              <img src={categorie2} alt="" />

              <img src={categorie3} alt="" />
              <img src={categorie4} alt="" />

              <img src={categorie5} alt="" />

              <img src={categorie6} alt="" />

              <img src={categorie7} alt="" />
              <img src={categorie8} alt="" />

              <img src={categorie9} alt="" />

              <img src={categorie10} alt="" />

              <img src={categorie11} alt="" />


            </Carousel>
        </div>
    );
}

export default Categorie;