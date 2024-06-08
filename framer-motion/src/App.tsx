import AnimationControls from "./components/AnimationControls";
import InteractionAnimation from "./components/InteractionAnimation";
import InView from "./components/InView";
import Motion from "./components/Motion";
import ScrollAnimation from "./components/ScrollAnimation";
import ScrollReveal from "./components/ScrollReveal";
import "./App.css"
import HorizontalScroll from "./components/HorizontalScroll";

const App = () => {
  return (
    // <>
    //   <div
    //     style={{
    //       display: "grid",
    //       placeContent: "center",
    //       height: "100vh",
    //       width: "100vw",
    //     }}
    //   >
    //     {/* <Motion />
    //     <InteractionAnimation />
    //     <AnimationControls /> */}
    //     {/* <ScrollAnimation /> */}
    //   </div>
    //   {/* <InView /> */}
    // </>
    <>
      {/* <ScrollReveal /> */}
      <HorizontalScroll />
    </>
  );
};

export default App;
