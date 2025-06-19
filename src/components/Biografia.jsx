import React from "react";
import styles from "../styles/Biografia.module.css";

export default function Biografia() {
  return (
    <div className={styles.bioContainer}>
      <img
        src="https://placehod.co/300x200"
        alt="Imagem do candidato"
        className={styles.foto}
      />
      <p>Marco Madureira nasceu em 1975, em Londrina (PR). Filho de professores, cresceu acreditando na educaçãoo como ferramenta de transformação social. Formado em Ciências Sociais pela Universidade Estadual de Londrina (UEL) e mestre em Políticas Públicas, Marco iniciou sua vida pública como líder estudantil e construiu uma carreira sólida pautada pela ética e pelo compromisso com a justiça.</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
        consequatur mollitia, modi vero autem dolores eos rem illo repellendus
        hic excepturi dolorum in ducimus id tempore optio iure aliquid itaque.
      </p>
    </div>
  );
}
