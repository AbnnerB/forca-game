import styled from "styled-components";

const ContainerWinAndLose = styled.div`
  position: absolute;
  top: 10px;
  right: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  gap: 2.5rem;

  span {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export default function WinLose() {
  const getWinAndLoseFromLocalStorage = JSON.parse(
    localStorage.getItem("winAndLoses") || "{}"
  );

  const qntWinner = getWinAndLoseFromLocalStorage.win || 0;
  const qntLoser = getWinAndLoseFromLocalStorage.lose || 0;

  return (
    <ContainerWinAndLose>
      <div>
        <h3>Vitórias</h3>
        <span>{qntWinner}</span>
      </div>
      <div>
        <h3>Derrotas</h3>
        <span>{qntLoser}</span>
      </div>
    </ContainerWinAndLose>
  );
}
