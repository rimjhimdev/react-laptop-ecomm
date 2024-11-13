"use client";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import laptop from "../assets/images/laptop-xps9340-480x360.avif";
import desktop from "../assets/images/desktop.avif";
import monitor from "../assets/images/monitor.avif";
import accessory from "../assets/images/pc-accessories-wb7022.avif";
import gen_ai from "../assets/images/gen-ai.avif";
import ai from "../assets/images/ai.avif";
import workplace_digi from "../assets/images/solution-digital-workplace.webp";
import cloud_digi from "../assets/images/solution-hybrid-cloud.avif";
import server from "../assets/images/servers-pexe9680.avif";
import storage from "../assets/images/data-powerstore-480x360.avif";
import apex from "../assets/images/multicloud-aas.avif";
import helpgif from "../assets/images/help.gif";
import hpspector from "../assets/images/hpsector.jpg";
import apple from "../assets/images/2a.jpg";
import asus from "../assets/images/laptop-5.jpg";
import delivery from "../assets/images/free-shipping.png";
import Replacement from "../assets/images/replacement.png";
import Warranty from "../assets/images/delivered.png";

import ad_1 from "../assets/super-ad-slider/ad-1.jpg";
import ad_2 from "../assets/super-ad-slider/ad-2.jpg";
import ad_3 from "../assets/super-ad-slider/ad-3.jpg";
import ad_4 from "../assets/super-ad-slider/ad-4.jpg";
import apple_ad from "../assets/super-ad-slider/apple-ad.webp";
import asus_ad from "../assets/super-ad-slider/asus-ad.jpg";
import dell_ad from "../assets/super-ad-slider/dell_ad.webp";
import hp_ad from "../assets/super-ad-slider/hp-laptop-amazon-diwali.webp";
import lenovo_ad from "../assets/super-ad-slider/lenovo_ad.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Home = () => {
  // const images = [slide1, slide2, slide3, slide4];

  const categories = [
    { title: "Laptops", image: laptop },
    { title: "Desktops & All-in-Ones", image: desktop },
    { title: "Monitors", image: monitor },
    { title: "PC Accessories", image: accessory },
    { title: "Artificial Intelligence", image: gen_ai },
    { title: "Servers", image: server },
    { title: "Data Storage", image: storage },
    { title: "Dell APEX Multicloud & aaS", image: apex },
  ];

  const solutions = [
    {
      title: "AI & Edge",
      description:
        "QUANTUM brings AI to your data where and when you need it the most - from the edge to the cloud. We have the expertise and services to help our customers envision, build, and manage their AI and edge solutions.",
      linkText: "View AI & Edge Solutions >",
      imageUrl: ai, // Replace with actual image URL
    },
    {
      title: "Digital Workplace",
      description:
        "Empower your teams for productive hybrid work with complete digital workplace solutions designed for business-class stability and reliability.We share your commitment to building a sustainable future",
      linkText: "View Digital Workplace Solutions >",
      imageUrl: workplace_digi, // Replace with actual image URL
    },
    {
      title: "Hybrid Cloud",
      description:
        "Meet evolving market challenges with comprehensive hybrid cloud and business continuity solutions that optimize workloads and improve efficiency.",
      linkText: "View Hybrid Cloud Solutions >",
      imageUrl: cloud_digi, // Replace with actual image URL
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: "Empowering Businesses",
      content: "Details about empowering businesses...",
    },
    {
      title: "From Pocket to Cloud",
      content: "Details about from pocket to cloud...",
    },
    { title: "Global Reach", content: "Details about global reach..." },
    {
      title: "Delivering Smarter Solutions",
      content: "Details about delivering smarter solutions...",
    },
  ];

  const exploreData = [
    {
      title: "Customer Success Stories",
      description:
        "Learn how QUANTUM is solving real problems for customers across the globe.",
    },
    {
      title: "Executive Briefing Center",
      description:
        "Our world-class facility enables our customers to interact and collaborate with QUANTUM experts.",
    },
    {
      title: "QUANTUM StoryHub",
      description: "Read more about our latest news and product announcements.",
    },
  ];

  const homelaptops = [
    {
      name: "HP Spectre",
      imageUrl: hpspector,
      description:
        "Superior multi-tasking crafted with jaw-dropping performance.",
      price: "₹86,999",
      backgroundColor: "#fba100",
    },
    {
      name: "APPLE",
      imageUrl: apple,
      description:
        "Creativity\nFast-charging, long-life batteries and killer audio.",
      price: "₹86,999",
      backgroundColor: "#b6a19e",
    },
    {
      name: "ASUS",
      imageUrl: asus,
      description: "Work and stream\nConnectivity in an affordable device.",
      price: "₹86,999",
      backgroundColor: "#9d92c6",
    },
  ];

  return (
    <>
      <div className="home">
        <div className="main-home-slider">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="swipeimg" src={ad_1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={ad_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={ad_3} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={apple_ad} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={asus_ad} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={dell_ad} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={hp_ad} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={lenovo_ad} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swipeimg" src={ad_4} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="section-1home">
          <div className="container">
            <div className="headertwo">OUR PRODUCTS</div>
            <div className="categorycontainer">
              {categories.map((category, index) => (
                <div key={index} className="categoryitem">
                  <img src={category.image} alt={category.title} />
                  <Link to="" className="categorytitle">
                    {category.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* </div> */}
          </div>
        </div>

        {/* <div className="section-2home">
          <div className="vdo">
            <video>
              <source src={compuvdo} type="video/mp4" />
            </video>

            <div className="overlay"></div>
          </div>

          <div className="text">
            <div className="box">
              <p>A BRIGHTER FUTURE WITH AI</p>
              <h1>Empowering Your Laptop with Personalized Performance</h1>
              <div className="explore">
                <Link to="">Explore→</Link>
              </div>
            </div>
          </div>
        </div> */}

        <div className="section-3home">
          <div className="container">
            <div className="helptext">
              <p>QUANTUM Support</p>
              <h1>We're Here to Help</h1>
              <span>
                From offering expert advice to solving complex problems, we've
                got you covered.
              </span>
            </div>
            {/* <div className="container"> */}
            <nav className="navbar">
              <Link to="">
                <button>Support Home</button>
              </Link>
              <Link to="">
                <button>Services</button>
              </Link>
              <Link to="">
                <button>Order Support</button>
              </Link>
              <Link to="">
                <button>Deals</button>
              </Link>
              <Link to="">
                <button>Find a Store</button>
              </Link>
            </nav>
          </div>
        </div>

        <div className="section-4home">
          <div className="container">
            <div className="content">
              <div className="accountsection-img">
                <img
                  src={helpgif} // Replace with the actual image source
                  alt="Person using laptop"
                  className="image"
                />
              </div>
              <div className="accountsection">
                <h2>My Account</h2>
                <br />
                <p>
                  My Account is an easy, more centralized way to manage your
                  tech.
                </p>
                <div className="buttons">
                  <button className="signin">Sign In</button>
                  <button className="createaccount">Create Account</button>
                </div>
                <div className="features">
                  <div className="feat-icon">
                    <span>⭐</span>
                    <p>Easy Ordering</p>
                  </div>
                  <div className="feat-icon">
                    <span>🔍</span>
                    <p>Order Tracking</p>
                  </div>
                  <div className="feat-icon">
                    <span>⚙️</span>
                    <p>Profile Setting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-5home">
          <div className="container">
            <div className="displayparent">
              <div className="displaychild">
                <img className="iconimg" src={delivery} alt="" />
                <p>Free delivery</p>
              </div>
              <div className="displaychild">
                <img className="iconimg" src={Replacement} alt="" />
                <p>30 Days Replacement</p>
              </div>
              <div className="displaychild">
                <img className="iconimg" src={delivery} alt="" />
                <p>QUANTUM Delivered</p>
              </div>
              <div className="displaychild">
                <img className="iconimg" src={Warranty} alt="" />
                <p>2 Years Warranty</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-6home">
          <div className="container">
            <div className="solution-1">
              <h1 className="title">Explore Our Solutions</h1>
              <p className="subtitle">
                Helping your business solve challenges and unlock opportunities
                through end-to-end technology solutions.
              </p>
            </div>
            <div className="grid">
              {solutions.map((solution, index) => (
                <div key={index} className="card">
                  <img
                    src={solution.imageUrl}
                    alt={solution.title}
                    className="image"
                  />
                  <h2 className="cardTitle">{solution.title}</h2>
                  <p className="description">{solution.description}</p>
                  <Link to="#" className="link">
                    <button>{solution.linkText}</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-7home">
          <div className="container">
            <div className="carouselcontainer">
              <div className="ch1">
                <h1>Best Seller</h1>
              </div>
              <div className="carousel">
                {homelaptops.map((hlaptop, index) => (
                  <div
                    key={index}
                    className="cardy"
                    style={{ backgroundColor: hlaptop.backgroundColor }}
                  >
                    <div className="cardcontent">
                      <h2>{hlaptop.name}</h2>
                      <img src={hlaptop.imageUrl} alt="" />
                      <p>{hlaptop.description}</p>
                      <p>Starting from {hlaptop.price}</p>
                      <div className="buttons">
                        <Link to="">
                          <button className="shopnow">Shop Now</button>
                        </Link>
                        <Link to="">
                          <button className="learnmore">Learn More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
