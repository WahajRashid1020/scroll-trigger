import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Swiper styles
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);
const Scroll = () => {
  const settings = {
    arrows: false,
    Infinity: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const slider = useRef(null);
  let i = 0;
  function scroll(e) {
    if (slider === null) return 0;
    // console.log(e.slider.current);
    e.wheelDelta > 0 ? slider.current.slickNext() : slider.current.slickPrev();
  }

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);

  const [activate, setactivate] = useState(false);

  const myref = useRef();
  const myref1 = useRef();
  const myref2 = useRef();
  const enter = useRef();
  const ball1 = useRef();
  const ball2 = useRef();
  const ball3 = useRef();
  const ball4 = useRef();
  const heading = useRef();
  const mytext = useRef();
  const ref = useRef();

  useEffect(() => {
    // gsap.to(ref.current, {
    //   ease: "none",
    //   backgroundColor: "#DAF7A6",
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     pin: true,
    //     anticipatePin: 1,
    //     invalidateOnRefresh: true,
    //     refreshPriority: 1,
    //     start: "top 0%",
    //     end: "+=300%",
    //     markers: false,
    //     toggleActions: "play reset play reset",
    //   },
    // });

    const text1 = mytext.current;
    gsap.fromTo(
      text1,
      { y: "0.5vh" },
      {
        y: "30vh",
        scrollTrigger: {
          trigger: text1,
          start: "top 20%",
          end: "bottom 30%",
          markers: true,
          toggleActions: "play reset play reset",
          // prpr
        },
      }
    );

    const b1 = ball1.current;
    gsap.fromTo(b1, 1, { y: 50 }, { y: -50, yoyo: true, repeat: -1 });
    const b2 = ball2.current;
    gsap.fromTo(b2, 1.2, { y: 50 }, { y: -50, yoyo: true, repeat: -1 });
    const b3 = ball3.current;
    gsap.fromTo(b3, 1.4, { y: 50 }, { y: -50, yoyo: true, repeat: -1 });
    const b4 = ball4.current;
    gsap.fromTo(b4, 1.6, { y: 50 }, { y: -50, yoyo: true, repeat: -1 });

    const h1 = heading.current;
    gsap.fromTo(h1, 10, { x: "-100vw" }, { x: "100vw", repeat: -1 });

    const e = enter.current;
    !activate
      ? gsap.to(e, { backgroundColor: "skyblue", scale: 1.5, color: "white" })
      : gsap.to(e, { backgroundColor: "maroon", scale: 1, color: "white" });

    const el = myref.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: el,
          autoAlpha: 1,
          start: "top 30%",
          end: "bottom 20%",
          markers: true,
          toggleActions: "play reset play reset",
        },
      }
    );
    const el1 = myref1.current;
    gsap.fromTo(
      el1,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: el1,
          autoAlpha: 1,
          start: "top 30%",
          end: "bottom 20%",
          markers: true,
          toggleActions: "play reset play reset",
        },
      }
    );

    const el2 = myref2.current;
    gsap.fromTo(
      el2,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: el2,
          autoAlpha: 1,
          start: "top 30%",
          end: "bottom 20%",
          markers: true,
          toggleActions: "play reset play reset",
        },
      }
    );
  }, [activate]);

  return (
    <>
      <div className="helper"></div>
      <div className="App-header">
        <div ref={myref}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          delectus itaque ad impedit fugiat amet sunt vitae mollitia, eos et!
        </div>
        <div ref={myref1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          delectus itaque ad impedit fugiat amet sunt vitae mollitia, eos et!
        </div>
        <div ref={myref2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          delectus itaque ad impedit fugiat amet sunt vitae mollitia, eos et!
        </div>
      </div>
      <div className="helper">
        {/* <div
          className="Box"
          onMouseEnter={() => setactivate(true)}
          onMouseLeave={() => setactivate(false)}
          ref={enter}
        ></div> */}
        <div
          className="ball"
          style={{ backgroundColor: "green" }}
          ref={ball1}
        ></div>{" "}
        <div
          className="ball"
          style={{ backgroundColor: "blue" }}
          ref={ball2}
        ></div>{" "}
        <div
          className="ball"
          style={{ backgroundColor: "yellow" }}
          ref={ball3}
        ></div>{" "}
        <div
          className="ball"
          style={{ backgroundColor: "white" }}
          ref={ball4}
        ></div>
      </div>
      <div className="heading">
        <div className="text" ref={heading}>
          This is Header
        </div>
      </div>

      <div className="container">
        <div className="text1" ref={mytext}>
          WE CALL THEM CHANGEMAKERS
        </div>
        <Slider ref={slider} className="Slider" {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

        {/* <Swiper
          style={{
            height: "200px",
            width: "400px",
            backgroundColor: "grey",
            position: "absolute",
          }}
          direction={"vertical"}
          spaceBetween={30}
          slidesPerView={2}
          mousewheelControl={"true"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper> */}
        {/* <div className="box">
          <div className="boximg"></div>
          <div className="boximg"></div>
          <div className="boximg"></div>
          <div className="boximg"></div>
          <div className="boximg"></div>
          <div className="boximg"></div>
          <div className="boximg"></div>
          <div className="boximg"></div>
          <div className="boximg"></div>
        </div> */}
      </div>
      <div className="helper"></div>
    </>
  );
};

export default Scroll;
