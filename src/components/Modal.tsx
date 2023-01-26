import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackgroundModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #00000083;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .containerContent {
    background-color: white;
    color: black;
    padding: 3rem 0;
    border-radius: 10px;
  }
  .containerContent h2 {
    width: 85%;
    margin: 0 auto;
  }
  .containerContent h3 {
    width: 80%;
    text-align: center;
    margin: 1rem auto 2rem auto;
  }
  .containerButtonsModal {
    margin: 0 auto;
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 540px) {
    .containerContent {
      max-width: 80%;
    }
  }
`;

interface ModalProps {
  modal?: boolean;
  closeModal: (modal: boolean) => void;
  title: string;
}

export default function Modal({ closeModal, modal, title }: ModalProps) {
  const navigate = useNavigate();

  function Return() {
    const confirmOrCancel = window.confirm(
      "Deseja realmente voltar a pagina inicial"
    );
    if (!confirmOrCancel) {
      return;
    }
    navigate("/");
  }

  function Refresh() {
    window.location.reload();
  }

  return (
    <BackgroundModal>
      <div className="containerContent">
        <h2>{title}</h2>

        <h3>O que deseja?</h3>

        <div className="containerButtonsModal">
          {title === "Informações" && (
            <button onClick={() => closeModal(!modal)}>Continuar</button>
          )}
          <button onClick={Refresh}>Alterar a palavra</button>
          <button onClick={Return}>Retornar a Pagina inicial</button>
        </div>
      </div>
    </BackgroundModal>
  );
}
