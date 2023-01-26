import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: monospace;
  @media screen and (max-width: 650px) {
    max-width: 440px;
  }
  @media screen and (max-width: 550px) {
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

interface HangmanWordProps {
  reveal: boolean;
  word: string;
  guessedLetters: string[];
}

export default function HangmanWord({
  reveal,
  word,
  guessedLetters,
}: HangmanWordProps) {
  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: "0.1em solid white",
            height: "40px",
            minWidth: "40px",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",

              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "white",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </Wrapper>
  );
}
