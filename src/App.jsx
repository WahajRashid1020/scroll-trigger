// import logo from "./logo.svg";
// import "./App.css";
// import gsap from "gsap";
// import { useEffect, useRef } from "react";

import Scroll from "./Scroll";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
function App() {
  // const imgRef = useRef();
  // const imgRef1 = useRef();
  // const imgRef2 = useRef();

  // useEffect(() => {
  //   const el = imgRef.current;
  //   gsap.fromTo(
  //     el,
  //     { autoAlpha: 0 },
  //     {
  //       duration: 1,
  //       autoAlpha: 1,
  //       scrollTrigger: {
  //         trigger: el,
  //         markers: true,
  //         start: "top 70%",
  //         end: "bottom 10%",
  //         toggleActions: "play reset play reset", //imp
  //         // rprp
  //       },
  //     }
  //   );
  //   const el1 = imgRef1.current;
  //   gsap.fromTo(
  //     el1,
  //     { autoAlpha: 0 },
  //     {
  //       duration: 1,
  //       autoAlpha: 1,
  //       scrollTrigger: {
  //         trigger: el1,
  //         markers: true,
  //         start: "top 70%",
  //         end: "bottom 10%",
  //         toggleActions: "play reset play reset", //imp
  //         // rprp
  //       },
  //     }
  //   );
  //   const el2 = imgRef2.current;
  //   gsap.fromTo(
  //     el2,
  //     { autoAlpha: 0 },
  //     {
  //       duration: 1,
  //       autoAlpha: 1,
  //       scrollTrigger: {
  //         trigger: el2,
  //         markers: true,
  //         start: "top 70%",
  //         end: "bottom 10%",
  //         toggleActions: "play reset play reset", //imp
  //         // rprp
  //       },
  //     }
  //   );
  // }, []);

  return (
    <Scroll />

    // <div className="App">
    //   <div className="helper"></div>
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" ref={imgRef} /> */}
    //     <div ref={imgRef}>
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
    //       error ratione amet labore, quam excepturi itaque nam laborum
    //       assumenda, atque aut, doloribus facilis libero eaque dolorem quas
    //       animi placeat. Distinctio, nulla quasi! Lorem ipsum dolor sit, amet
    //       consectetur adipisicing elit. Similique error ratione amet labore,
    //       quam excepturi itaque nam laborum assumenda, atque aut, doloribus
    //       facilis libero eaque dolorem quas animi placeat. Distinctio, nulla
    //       quasi Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //       Similique error ratione amet labore, quam excepturi itaque nam laborum
    //       assumenda, atque aut, doloribus facilis libero eaque dolorem quas
    //       animi placeat. Distinctio, nulla quasi
    //     </div>
    //     <p>Scoll Triggers</p>
    //   </header>
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" ref={imgRef} /> */}
    //     <div ref={imgRef1}>
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
    //       error ratione amet labore, quam excepturi itaque nam laborum
    //       assumenda, atque aut, doloribus facilis libero eaque dolorem quas
    //       animi placeat. Distinctio, nulla quasi! Lorem ipsum dolor sit, amet
    //       consectetur adipisicing elit. Similique error ratione amet labore,
    //       quam excepturi itaque nam laborum assumenda, atque aut, doloribus
    //       facilis libero eaque dolorem quas animi placeat. Distinctio, nulla
    //       quasi Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //       Similique error ratione amet labore, quam excepturi itaque nam laborum
    //       assumenda, atque aut, doloribus facilis libero eaque dolorem quas
    //       animi placeat. Distinctio, nulla quasi
    //     </div>
    //     <p>Scoll Triggers</p>
    //   </header>
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" ref={imgRef} /> */}
    //     <div ref={imgRef2}>
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
    //       error ratione amet labore, quam excepturi itaque nam laborum
    //       assumenda, atque aut, doloribus facilis libero eaque dolorem quas
    //       animi placeat. Distinctio, nulla quasi! Lorem ipsum dolor sit, amet
    //       consectetur adipisicing elit. Similique error ratione amet labore,
    //       quam excepturi itaque nam laborum assumenda, atque aut, doloribus
    //       facilis libero eaque dolorem quas animi placeat. Distinctio, nulla
    //       quasi Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //       Similique error ratione amet labore, quam excepturi itaque nam laborum
    //       assumenda, atque aut, doloribus facilis libero eaque dolorem quas
    //       animi placeat. Distinctio, nulla quasi
    //     </div>
    //     <p>Scoll Triggers</p>
    //   </header>
    //   <div className="helper"></div>
    // </div>
  );
}

export default App;
