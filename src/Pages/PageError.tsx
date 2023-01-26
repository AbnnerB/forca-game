import { Link } from "react-router-dom";

export default function PageError() {
  return (
    <div>
      <h1 style={{ lineHeight: "40px" }}>Pagina não encontrada</h1>
      <Link style={{ color: "white" }} to="/">
        Por favor, volte a pagina inicial
      </Link>
    </div>
  );
}
