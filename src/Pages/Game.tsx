import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HangmanDrawing from "../components/HangmanDrawing";
import HangmanWord from "../components/HangmanWord";
import Keyboard from "../components/Keyboard";
import Modal from "../components/Modal";

import { FcInfo } from "react-icons/fc";
import { BiLeftArrowAlt } from "react-icons/bi";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  a {
    position: absolute;
    top: 15px;
    left: 15px;
    color: white;
    text-decoration: none;
    font-size: 1.8rem;
    color: white;
    background-color: #0799dd;
    border-radius: 50%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 250px;
`;

const ButtonShowModalInfo = styled.button`
  background-color: transparent;
  padding: 0.3rem 0.8rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: auto;
  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default function Game() {
  const getValueLocalStorage = JSON.parse(
    localStorage.getItem("typeValueGame") || "{}"
  );
  const words = getValueLocalStorage;

  const [showModal, setShowModal] = useState(false);

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); // letra que digitamos
  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter: string) => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    }) as unknown as EventListener;

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, isLoser, isWinner, addGuessedLetters]);

  const correctWordUppercase = wordToGuess.toUpperCase();

  // qnt win and Loses
  const getWinAndLoseFromLocalStorage = JSON.parse(
    localStorage.getItem("winAndLoses") || "{}"
  );

  let qntWinner = getWinAndLoseFromLocalStorage.win || 0;
  let qntLoser = getWinAndLoseFromLocalStorage.lose || 0;

  useEffect(() => {
    if (isWinner === true) {
      qntWinner = qntWinner + 1;
    } else if (isLoser === true) {
      qntLoser = qntLoser + 1;
    }

    const objWithWinAndLoses = {
      win: qntWinner,
      lose: qntLoser,
    };

    localStorage.setItem("winAndLoses", JSON.stringify(objWithWinAndLoses));
  }, [isLoser, isWinner]);

  return (
    <Wrapper>
      <ButtonShowModalInfo onClick={() => setShowModal(!showModal)}>
        <FcInfo />
      </ButtonShowModalInfo>
      <Link to="/" title="voltar a pagina inicial">
        <BiLeftArrowAlt />
      </Link>

      {showModal && (
        <Modal
          closeModal={setShowModal}
          modal={showModal}
          title="Informações"
        />
      )}

      <HangmanPart>
        {isLoser && (
          <Modal
            closeModal={setShowModal}
            modal={showModal}
            title={"Você Perdeu a palavra certa é 👉 " + correctWordUppercase}
          />
        )}
        {isWinner && (
          <Modal
            closeModal={setShowModal}
            modal={showModal}
            title={"🥳Parabéns, a resposta certa é 👉" + correctWordUppercase}
          />
        )}

        {words[0] === "abacate" && <h2>Frutas</h2>}
        {words[0] === "brasil" && <h2>Paises</h2>}
        {words[0] === "gol" && <h2>Carros</h2>}
        {words[0] === "bmw" && <h2>Marca de Automóveis</h2>}
        {words[0] === "mesa" && <h2>Objetos</h2>}
        {words[0] === "abobrinha" && <h2>Legumes, Vegetais e Grãos</h2>}

        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord
          reveal={isLoser}
          word={wordToGuess}
          guessedLetters={guessedLetters}
        />
      </HangmanPart>

      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
    </Wrapper>
  );
}
