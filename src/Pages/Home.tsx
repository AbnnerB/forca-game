import { useEffect, useState } from "react";
import styled from "styled-components";

import Fruits from "../Data/Fruits";
import Cars from "../Data/Cars";
import City from "../Data/Country";
import CarBrand from "../Data/CarBrand";

import { Link } from "react-router-dom";
import ObjectsList from "../Data/ObjectsList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .containerButtons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 80%;
  }
  a {
    margin-top: 2rem;
    text-decoration: none;
    background-color: #57585775;
    box-shadow: 2px 2px 5px black;
    padding: 1rem 2rem;
    border-radius: 25px;
  }
`;

const Button = styled.button`
  opacity: 0.6;
  &:hover {
    opacity: 1 !important;
  }
`;

export default function Home() {
  const [words, setWords] = useState(Fruits);

  useEffect(() => {
    localStorage.setItem("typeValueGame", JSON.stringify(words));
  }, [words]);

  return (
    <Wrapper>
      <h1>Jogo da Forca</h1>

      <div className="containerButtons">
        <Button
          style={{ opacity: words === Fruits ? "1" : "0.6" }}
          onClick={() => setWords(Fruits)}
        >
          Frutas
        </Button>
        <Button
          style={{ opacity: words === City ? "1" : "0.6" }}
          onClick={() => setWords(City)}
        >
          Paises
        </Button>
        <Button
          style={{ opacity: words === Cars ? "1" : "0.6" }}
          onClick={() => setWords(Cars)}
        >
          Carros
        </Button>
        <Button
          style={{ opacity: words === CarBrand ? "1" : "0.6" }}
          onClick={() => setWords(CarBrand)}
        >
          Marca de Automóveis
        </Button>
        <Button
          style={{ opacity: words === ObjectsList ? "1" : "0.6" }}
          onClick={() => setWords(ObjectsList)}
        >
          Objetos
        </Button>
      </div>

      <Link style={{ color: "white" }} to="/game">
        Iniciar
      </Link>
    </Wrapper>
  );
}
