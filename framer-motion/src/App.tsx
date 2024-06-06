import AnimationControls from "./components/AnimationControls";
import InteractionAnimation from "./components/InteractionAnimation";
import InView from "./components/InView";
import Motion from "./components/Motion";

const App = () => {
  return (
    <>
      {/* <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
        <Motion />
        <InteractionAnimation />
        <AnimationControls />
      </div> */}
      <InView />
    </>
  );
};

export default App;
