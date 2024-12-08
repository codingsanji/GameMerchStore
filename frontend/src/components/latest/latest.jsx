import React from "react";
import "./latest.css";

import heroimg from "../assets/heroimg.png";

import galleryImg1 from "../assets/valo/gekkotee.jpg";
import galleryImg2 from "../assets/valo/cypherblack.jpg";
import galleryImg3 from "../assets/valo/thirsty.jpg";
import galleryImg4 from "../assets/valo/cat.jpg";

import galleryImg5 from "../assets/phasmo/musicbox.jpg";
import galleryImg6 from "../assets/phasmo/pendant.jpg";
import galleryImg7 from "../assets/phasmo/memug.jpg";
import galleryImg8 from "../assets/phasmo/cardcrophood.jpg";

import img1 from "../assets/phasmo/dancecap.jpg";
import img2 from "../assets/valo/glass.jpg";
import img3 from "../assets/valo/stickers.jpg";

import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Latest = () => {
  const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="homepage text-white">
      {/* Hero Section */}
      <div className="container max-w-full pt-12 pb-16 px-8">
        <div className="hero grid md:grid-cols-2 rounded-md mb-8">
          <div className="flex flex-col p-16 2xl:ml-[4rem] xl:ml-[2rem] md:text-left text-center">
            <h2 className="text-[#ff00ff] font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
              FRESH AND FIERCE
            </h2>
            <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
              New👋
            </p>
            <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
              Collections
            </p>
            <p className="font-light xl:text-2xl lg:text-xl sm:text-2xl text-lg">
              For everyone
            </p>
            <Link to="/shop">
              <button className="bg-[#ff00ff] text-[rgb(43,39,91)] font-bold mt-4 p-1 lg:w-70 md:w-60 w-50 h-12 rounded-lg cursor-pointer md:text-lg text-sm transition-colors duration-300 ease-in-out">
                LATEST COLLECTION{" "}
                <FaLongArrowAltRight className="inline mb-1 text-xl" />
              </button>
            </Link>
          </div>
          <img
            src={heroimg}
            alt="Hero"
            className="w-auto m-auto max-w-full h-auto"
          />
        </div>

        {/* Featured Products Section */}
        <section className="featured-products p-8 mb-10">
          <h2 className="shine text-4xl md:text-6xl font-bold mb-7 text-center">
            FEATURED PRODUCTS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="product p-4 rounded-md">
              <img src={img1} alt="Cap" className="w-full h-auto mb-4" />
              <h4 className="text-xl font-bold">Navy-Blue Emote Cap</h4>
              <p className="text-lg">$20</p>
            </div>
            <div className="product p-4 rounded-md">
              <img src={img2} alt=" Glasses" className="w-full h-auto mb-4" />
              <h4 className="text-xl font-bold">Cool Pixel Glasses</h4>
              <p className="text-lg">$10</p>
            </div>
            <div className="product p-4 rounded-md">
              <img src={img3} alt="Stickers" className="w-full h-auto mb-4" />
              <h4 className="text-xl font-bold">Valorant Stickers</h4>
              <p className="text-lg">$8</p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="introduction p-8 rounded-md mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <h3 className="text-3xl font-bold mb-4 text-center">
            To the Newbies,
          </h3>
          <p className="text-lg font-light text-center max-w-4xl mx-auto mb-6">
            Hello there! We are{" "}
            <span className="text-orange-500 font-bold">Gamerch</span> and we
            promote games while making fan-merch. <br />
            This is 100% non-profitable as it is a way to promote games and
            suggest game merch that we, as a fan community, want. In the future,
            if this becomes a successful endeavor, with permission, we shall
            make the merch available for you to order! Feel free to contact us
            (in the section before the footer) to suggest new games to try or
            merch ideas to create. At the moment, we have Valorant and
            Phasmophobia merch on display. Happy exploring!
          </p>
          <hr className="my-6 border-t-2 border-white opacity-50" />
          <h3 className="text-xl font-semibold text-center mb-4">
            Choose a section you'd like to explore from our latest collection:
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/phasmo">
              <button
                className="text-3xl bg-[#263238] text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300 w-full sm:w-auto"
                style={{ fontFamily: "phasmain" }}
              >
                PHASMOPHOBIA
              </button>
            </Link>
            <Link to="/valo">
              <button
                className="bg-[#0f1923] text-[#ece8e1] rounded-lg shadow-md hover:bg-[#ff4655] transition duration-300 w-full sm:w-auto"
                style={{ fontFamily: "valo" }}
              >
                <p className="text-3xl mx-6 pt-3 pb-1">vAlorant</p>
              </button>
            </Link>
          </div>
        </section>

        {/* Gallery Section with Carousel */}
        <section className="gallery p-8 rounded-md mb-8">
          <h2 className="shine text-4xl md:text-6xl font-bold mb-1 text-center">
            MINI GALLERY
          </h2>
          <h3 className="text-base md:text-lg text-center mb-3">
            Featuring a small collection of our products
          </h3>

          <div className="carousel-container">
            <Slider {...settings}>
              {galleryImages.map((img, index) => (
                <div key={index} className="p-2">
                  <img
                    src={img}
                    alt="gallery"
                    className="carousel-img rounded-md shadow-lg w-full"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Latest;
