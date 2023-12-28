import Carousel from "react-multi-carousel"
import postImg from "./../assets/images/post-details.png";
import './carousel.style.css'
import { CarouselImage } from "./styled/PostDetails.styled";
import 'react-multi-carousel/lib/styles.css';
export const CarouselImages = () => {
    return (
        <div style={{ maxWidth: '750px', width: '100%' }}>


            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}

                containerClass="container"

                draggable
                focusOnSelect={false}
                infinite
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
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <CarouselImage>
                    <img src={postImg} alt="post-details" />
                </CarouselImage>
                <CarouselImage>
                    <img src={postImg} alt="post-details" />
                </CarouselImage>
                <CarouselImage>
                    <img src={postImg} alt="post-details" />
                </CarouselImage>

            </Carousel>
        </div>
    )
}