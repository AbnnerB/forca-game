import styled from "styled-components";

const Base = styled.div`
  height: 10px;
  width: 250px;
  background-color: #ffffff;
`;
const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  background-color: #ffffff;
  margin-left: 50px;
`;
const HorizontalLine = styled.div`
  height: 10px;
  width: 140px;
  background-color: #ffffff;
  position: absolute;
  left: 50px;
`;

const VerticalLineSmall = styled.div`
  height: 50px;
  width: 10px;
  background-color: #ffffff;
  margin-left: 50px;
  position: absolute;
  right: 50px;
  top: 0;
`;

const Head = styled.div`
  height: 20px;
  width: 20px;
  border: 3px solid white;
  border-radius: 50%;
  position: absolute;
  right: 41px;
  top: 47px;
`;

const Body = styled.div`
  height: 60px;
  width: 6px;
  background-color: white;
  position: absolute;
  right: 51px;
  top: 72px;
`;

const RightArm = styled.div`
  height: 3px;
  width: 35px;
  background-color: #f5f3f3;
  position: absolute;
  right: 51px;
  top: 80px;
  rotate: 20deg;
`;
const LeftArm = styled.div`
  height: 3px;
  width: 35px;
  background-color: white;
  position: absolute;
  right: 21px;
  top: 80px;
  rotate: -20deg;
`;
const RightLeg = styled.div`
  height: 4px;
  width: 40px;
  background-color: #f5f3f3;
  position: absolute;
  right: 41px;
  top: 144px;
  rotate: -70deg;
`;
const LeftLeg = styled.div`
  height: 4px;
  width: 40px;
  background-color: white;
  position: absolute;
  right: 27px;
  top: 143px;
  rotate: 70deg;
`;

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
interface HangmanDrawingProps {
  numberOfGuesses: number;
}

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {bodyParts.slice(0, numberOfGuesses).map((BodyPart, index) => {
        return <BodyPart key={index} />;
      })}

      <VerticalLineSmall />
      <HorizontalLine />
      <VerticalLine />
      <Base />
    </div>
  );
}
