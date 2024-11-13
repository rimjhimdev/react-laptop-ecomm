import React from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useCartContext } from "../context/CartContext";
import StarReview from "./StarReview";
import AddToCart from "./AddToCart";
// import star from "../assets/star.png";
// import half_star from "../assets/rating.png";
import processor from "../assets/processor.png";
import operating_sys from "../assets/operating-system.png";
import graphics_card from "../assets/graphics-card.png";
import hard_disk from "../assets/hard-disk.png";
import memory from "../assets/ram.png";
import weight from "../assets/weight.png";
import display from "../assets/smart-tv.png";
import cpu from "../assets/cpu.png";
import speaker from "../assets/speaker.png";
import security from "../assets/security.png";
import camera from "../assets/camera.png";
import shipping from "../assets/free-shipping.png";
import replacement from "../assets/replacement.png";
import shield from "../assets/shield.png";

const LaptopDetails = ({ laptops }) => {
  const { id } = useParams();
  const laptop = laptops.find((laptop) => laptop.id === parseInt(id));

  // for button add item in cart
  const { addToCart } = useCartContext();

  if (!laptop) {
    return (
      <div>
        <h1>NO LAPTOPS FOUND</h1>
      </div>
    );
  }
  // console.log(laptop);
  return (
    <>
      <div className="all-details">
        <div className="container">
          <div className="laptop-details">
            <div className="laptop-details-specimen">
              <p>{laptop.desc_para}</p>
            </div>
            <div className="laptop-detail-img-desc">
              <div className="laptop-details-img">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {laptop.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image.img} alt={image.alt} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="laptop-details-desc">
                <h1>{laptop.name}</h1>
                <p>Model Name: {laptop.Model_Name}</p>
                <p>Category: {laptop.category}</p>
                <p>{laptop.description}</p>
                <p>Color: {laptop.Colour}</p>
                <p>
                  <b>₹{laptop.price}</b>
                </p>

                <div className="laptop-details-reviewicons">
                  <StarReview stars={laptop.stars} reviews={laptop.reviews} />
                </div>

                <div className="company-facilities">
                  <div className="company-facilities-outer">
                    <div className="company-facilities-inner">
                      <div className="company-facilities-img">
                        <img src={shipping} alt="" />
                      </div>
                      <div className="company-facilities-text">
                        <p>Free Delivery</p>
                      </div>
                    </div>
                    <div className="company-facilities-inner">
                      <div className="company-facilities-img">
                        <img src={replacement} alt="" />
                      </div>
                      <div className="company-facilities-text">
                        <p>30 Days Replacement</p>
                      </div>
                    </div>
                    <div className="company-facilities-inner">
                      <div className="company-facilities-img">
                        <img src={shipping} alt="" />
                      </div>
                      <div className="company-facilities-text">
                        <p>QUANTUM Delivered</p>
                      </div>
                    </div>
                    <div className="company-facilities-inner">
                      <div className="company-facilities-img">
                        <img src={shield} alt="" />
                      </div>
                      <div className="company-facilities-text">
                        <p>2 Year Warranty</p>
                      </div>
                    </div>
                  </div>
                  {/* free delivery, 30days replacement, 2 yrs warranty,quantum delivered */}
                </div>

                {laptop.stock > 0 && <AddToCart laptop={laptop} />}
              </div>
            </div>

            <div className="laptop-details-about">
              <div className="laptop-specialfeature">
                <h2>Special Feature:</h2>
                <p>{laptop.Special_Feature}</p>
              </div>

              <div className="about-details">
                <h2>Tech Specs:</h2>
                <div className="about-detail-grid">
                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={processor} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Processor}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={operating_sys} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Operating_System}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={memory} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.RAM_Memory}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={display} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Display}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={hard_disk} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Storage}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={graphics_card} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Graphics}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={cpu} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>
                        {laptop.CPU_Model}, {laptop.CPU_Speed}
                      </p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={speaker} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Audio_and_Speakers}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={camera} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Camera}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={weight} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.weight}</p>
                    </div>
                  </div>

                  <div className="grid-detail">
                    <div className="about-detail-icon">
                      <img src={security} alt="" />
                    </div>
                    <div className="about-detail-desc">
                      <p>{laptop.Security_Software}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="laptop-details-review">
              {/* reviews from clients */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaptopDetails;
