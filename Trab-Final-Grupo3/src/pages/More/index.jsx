import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header2 from "../../components/Header2";

function More() {
  const [ler, setLer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/produtos/${id}`)
      .then((response) => {
        setLer(response.data);
        console.log(response.data.titulo);
      })
      .catch((error) => console.error("Erro na requisição!", error));
  }, [id]);

  return (
    <div>
      <Header2/>
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>{ler.titulo}</h2>
            </header>
            <div className="line" />
            <p>{ler.conteudo}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default More;
