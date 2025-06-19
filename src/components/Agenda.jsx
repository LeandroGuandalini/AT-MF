import React from "react";
import styles from "../styles/Agenda.module.css";

const eventos = [
  "20/06 - Caminhada no Centro",
  "21/06 - Visita à escola municipal",
  "23/06 - Entrevista na rádio local",
  "24/06 - Reunião com agricultores",
  "25/06 - Comício no bairro São José",
];

export default function Agenda() {
  return (
    <div className={styles.agenda}>
      <h2>Agenda</h2>
      <div className={styles.eventos}>
        {eventos.map((e, i) => (
          <div className={styles.evento} key={i}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
