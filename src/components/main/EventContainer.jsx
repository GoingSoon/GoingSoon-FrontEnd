import React, { useEffect, useState } from "react";
import { styled, keyframes, css } from "styled-components";

const fadeInAnimationKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInAnimation = css`
  animation: ${fadeInAnimationKeyframes} 0.5s ease-in-out;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ffa740;
  background-color: #ffffff;
  margin-bottom: 24px;
  padding: 30px 30px 30px 24px;
  align-items: center;
  justify-content: space-between;
  ${({ animate }) => (animate ? fadeInAnimation : "")}
`;

const SoonSign = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #fe1616;
  font-size: 12px;
`;

const EventContainer = ({ title, members, soon, index }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, index * 100); //컴포넌트 마운트 시 0.1초 간격으로 애니메이션 실행

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <StyledContainer animate={animate}>
      {soon && <SoonSign>약속 임박!</SoonSign>}
      <div>{title}</div>
      <div>{members}명</div>
    </StyledContainer>
  );
};

export default EventContainer;
