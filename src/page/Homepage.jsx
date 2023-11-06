import React, { useState } from "react";
import banner from "../assets/banner-img.png";
import { useNavigate } from "react-router-dom";
import PostCard from "../commponent/PostCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";


// Import Swiper styles
import "swiper/css";

import "swiper/css";

import "swiper/css/autoplay";

let posts = [
  {
    id: 1,
    title: "The law comes for Bankman-Fried.",
    summary:
      "Less than a week after telling a BBC journalist that he didn't think he'd be arrested for his role in crypto...",
    thumbnail: "/src/assets/sam.jpg",
    author: "Sam",
    category: "Tech",
  },
  {
    id: 2,
    title: "The law comes for Bankman-Fried",
    summary:
      "Less than a week after telling a BBC journalist that he didn't think he'd be arrested for his role in crypto...",
    thumbnail: "/src/assets/sam.jpg",
    author: "Sam",
    category: "Tech",
  },
  {
    id: 3,
    title: "The law comes for Bankman-Fried",
    summary:
      "Less than a week after telling a BBC journalist that he didn't think he'd be arrested for his role in crypto...",
    thumbnail: "/src/assets/sam.jpg",
    author: "Sam",
    category: "Tech",
  },
  {
    id: 4,
    title: "The law comes for Bankman-Fried",
    summary:
      "Less than a week after telling a BBC journalist that he didn't think he'd be arrested for his role in crypto...",
    thumbnail: "/src/assets/sam.jpg",
    author: "Sam",
    category: "Tech",
  },
];

const Homepage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const {status} = useSelector(state => state.userState)

  return (
    <div className="">
      <section className="banner max-w-[1020px] px-[30px]  py-[80px] mx-auto flex flex-col lg:flex-row items-center relative justify-center">
        <div className="relative">
          <img
            src={banner}
            className="w-[390px] sm:w-[430px] md:w-[500px] lg:w-full"
            alt=""
          />
          <div className="hidden lg:flex h-[60px] w-[60px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[150px] -left-[30px]"></div>
        </div>
        <div>
          <h1 className="text-[70px] leading-[85px] mt-6 text-center  lg:text-[70px] font-[500] lg:text-end lg:leading-[90px]">
            Write Your <br />{" "}
            <span className="bg-gradient-to-tr from-indigo-600 to-[#7851E9] bg-clip-text text-transparent ">
              Articles
            </span>
            <br /> Here
          </h1>
          <div className="flex justify-center lg:justify-end mt-5">
            {
              status ? <button
              onClick={() => navigate("/articles")}
              className="bg-indigo-600 py-3 font-semibold px-5 rounded-full text-white"
            >
              Read Articles
            </button> : <button
              onClick={() => navigate("/signup")}
              className="bg-indigo-600 py-3 font-semibold px-5 rounded-full text-white"
            >
              Sign IN
            </button>
            }
          </div>
        </div>
        <div className="hidden lg:flex h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[30px] -left-[150px]"></div>

        {/* <div className="h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[20px] -left-[150px]"></div>
        <div className="h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[50px] -left-[150px]"></div>
        <div className="h-[130px] w-[130px] rounded-full bg-gradient-to-tr from-indigo-600 to-[#7851E9] absolute top-[50px] -left-[150px]"></div> */}
      </section>
      <section className="banner py-[80px] mx-auto flex items-center relative bg-gradient-to-br from-indigo-600 to-[#7851E8]">
        <div className="bg-section-bg h-full w-full absolute bg-full bg-no-repeat bg-center"></div>
        <div className="max-w-[1190px] mx-auto relative flex gap-[20px]">
          <div className="w-[35%]">
            <h1 className="text-[90px] font-[500] text-start leading-[110px]">
              Best <br /> <span className="text-white ">Articles</span>
              <br /> Today
            </h1>
            <div className="flex justify-start mt-5">
              <button
                onClick={() => navigate("/articles")}
                className="text-indigo-600 py-3 font-semibold px-5 rounded-full bg-white"
              >
                See All Articles
              </button>
            </div>
          </div>
            <Swiper
            className="w-[65%]"
            spaceBetween={20}
            slidesPerView={3}
            loop
            autoplay
            modules={[A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {posts.map((post, i) => (
              <SwiperSlide virtualIndex={i}>
                <PostCard post={post} />
              </SwiperSlide>
            ))}

          </Swiper>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Homepage;