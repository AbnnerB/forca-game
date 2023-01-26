import styled from "styled-components";

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Wrapper = styled.div`
  margin-top: 2rem;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(75px, 1fr));
  gap: 0.5rem;
  @media screen and (max-width: 650px) {
    max-width: 440px;
  }
  @media screen and (max-width: 500px) {
    max-width: 380px;
  }
  @media screen and (max-width: 400px) {
    max-width: 100%;
  }
`;

const Button = styled.button<{ isActive: boolean }>`
  opacity: ${(p) => (p.isActive ? "null" : "0.3")};
  &:focus:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
  &:focus-visible:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
  &:hover:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
`;

interface KeyBoardProps {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
}

export default function Keyboard({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetters,
}: KeyBoardProps) {
  return (
    <Wrapper>
      {keys.map((letter) => {
        const isActive = !activeLetters.includes(letter);
        const isInActive = !inactiveLetters.includes(letter);

        return (
          <Button
            isActive={isActive && isInActive}
            key={letter}
            onClick={() => addGuessedLetters(letter)}
            disabled={!(isActive && isInActive) || disabled}
            style={{
              //   backgroundColor: isInActive ? "" : "red",
              backgroundColor: isInActive ? "" : "red",
              color: !isActive ? "green" : "",
              opacity: disabled ? "0.3" : "",
            }}
          >
            {letter.toUpperCase()}
          </Button>
        );
      })}
    </Wrapper>
  );
}
