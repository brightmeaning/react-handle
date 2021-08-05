import { useEffect,useState, useRef } from "react";
import Lottie from "react-lottie";
import Circle from "./lottie/circle.json";
import Animation from "./lottie/animation.json";
import Dot from "./lottie/dots.json";
/*import Uiux from "./lottie/uiux.json";*/
import Video1 from "./images/1.mp4"
import Video2 from "./images/2.mp4"
import Video3 from "./images/3.mp4"
import Dots from "./Dots";

import "./App.css";

const lottieOptions1 = {
    animationData: Circle,
    loop: true,
    autoplay: true,
    rendererSettings: {
        className: 'add-class', // svg에 적용
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const lottieOptions2 = {
    animationData: Animation,
    loop: true,
    autoplay: true,
    rendererSettings: {
        className: 'add-class', // svg에 적용
        preserveAspectRatio: 'xMidYMid slice'
    }
};
const lottieOptions3 = {
    animationData: Dot,
    loop: true,
    autoplay: true,
    rendererSettings: {
        className: 'add-class', // svg에 적용
        preserveAspectRatio: 'xMidYMid slice'
    }
};


function App() {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight ,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log("현재 2페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 ,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                } else {
                    // 현재 3페이지
                    console.log("현재 3페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 ,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    //현재 2페이지
                    console.log("현재 2페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else {
                    // 현재 3페이지
                    console.log("현재 3페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight ,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);
    return (
        <div ref={outerDivRef} className="outer">
            <Dots scrollIndex={scrollIndex} />
            <div className="inner bg-img1">
                <video src={Video1} type="video/mp4" autoPlay muted loop/>
                <div className="Circle">
                    <Lottie options={lottieOptions1}
                            style={{position: 'absolute', top:'10%', left:'65%', zIndex:4 , width: '600px', height: '600px'}}/>
                </div>
                <div className="Animation">
                    <Lottie options={lottieOptions2}
                            style={{position: 'absolute', top:'0%', left:'29.1%', zIndex:4 , width: '800px', height: '800px'}}/>
                </div>
                <div className="Dot">
                    <Lottie options={lottieOptions3}
                            style={{position: 'absolute', top:'0%', left:'0%', zIndex:4 , width: '800px', height: '800px'}}/>
                </div>
            </div>
            <div className="divider"></div>
            <div className="inner ">
                <video src={Video2} type="video/mp4" autoPlay muted loop/>
            </div>
            <div className="divider"></div>
            <div className="inner ">
                <video src={Video3} type="video/mp4" autoPlay muted loop/>
            </div>
        </div>
    );
}

export default App;