import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

interface Props {
  isVisible: boolean;
}

const SliderElement: React.SFC<Props> = ({ isVisible, children }) => {
  const final = isVisible ? 0 : -100;
  const start = isVisible ? -100 : 0;
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    boxShadow: `
  0 2.8px 3.3px ${final}px rgba(0, 0, 0, 0.02),
  0 6.7px 7.8px ${final}px rgba(0, 0, 0, 0.028),
  0 12.5px 14.8px ${final}px rgba(0, 0, 0, 0.035),
  0 22.3px 26.4px ${final}px rgba(0, 0, 0, 0.042),
  0 41.8px 49.3px ${final}px rgba(0, 0, 0, 0.05),
  0 100px 118px ${final}px rgba(0, 0, 0, 0.07)`,
    from: {
      opacity: isVisible ? 0 : 1,
      boxShadow: `
  0 2.8px 3.3px ${start}px rgba(0, 0, 0, 0.02),
  0 6.7px 7.8px ${start}px rgba(0, 0, 0, 0.028),
  0 12.5px 14.8px ${start}px rgba(0, 0, 0, 0.035),
  0 22.3px 26.4px ${start}px rgba(0, 0, 0, 0.042),
  0 41.8px 49.3px ${start}px rgba(0, 0, 0, 0.05),
  0 100px 118px ${start}px rgba(0, 0, 0, 0.07)
        `,
    },
  });

  return <MainContainer style={props}>{children}</MainContainer>;
};

export default SliderElement;

const MainContainer = styled(animated.div)`
  position: absolute;
  border-radius: 1rem;
  border: solid 0px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;
