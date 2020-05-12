import React from "react";
import styled from "styled-components";
import SliderElement from "./SliderElement";

interface Props {}

const Slider: React.SFC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = React.useState({
    ind: 0,
    childCnt: Array.isArray(children) && children.length ? children.length : 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currIndex) => {
        if (currIndex.ind < currIndex.childCnt - 1) {
          return { ...currIndex, ind: currIndex.ind + 1 };
        } else {
          return { ...currIndex, ind: 0 };
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLeftClick = () => {
    if (currentIndex.ind > 0) {
      setCurrentIndex({ ...currentIndex, ind: currentIndex.ind - 1 });
    }
  };

  const handleRightClick = () => {
    if (Array.isArray(children) && currentIndex.ind < children.length - 1) {
      setCurrentIndex({ ...currentIndex, ind: currentIndex.ind + 1 });
    }
  };

  return (
    <SliderLayout>
      <div style={{ width: 640, height: 350, marginTop: "1rem" }}>
        {Array.isArray(children) &&
          children.map((x, ind) => (
            <SliderElement isVisible={ind === currentIndex.ind} key={ind}>
              {x}
            </SliderElement>
          ))}
      </div>
      <ControlLayout>
        <button onClick={handleLeftClick}>{"<"}</button>
        <button onClick={handleRightClick}>{">"}</button>
        <button>Reset</button>
      </ControlLayout>
    </SliderLayout>
  );
};

export default Slider;

const SliderLayout = styled.main`
  grid-area: slider;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  border: solid 0px;
`;

const ControlLayout = styled.section`
  display: none;
`;
