import React from "react";
import styles from "../styles/Propostas.module.css";
import { Card, CardContent, Typography } from "@mui/material";

const propostasCards = [
  {
    titulo: "Educação de Qualidade",
    imagem: "📚",
    descricao: "Investimento em escolas públicas",
  },
  {
    titulo: "Saúde para Todos",
    imagem: "🏥",
    descricao: "Ampliação do atendimento básico",
  },
  {
    titulo: "Segurança",
    imagem: "🚓",
    descricao: "Mais policiamento nos bairros",
  },
  {
    titulo: "Emprego Jovem",
    imagem: "💼",
    descricao: "Programas de estágio e trainee",
  },
];

const propostasExtras = [
  "Transporte Público Gratuito",
  "Moradia Popular",
  "Incentivo ao Esporte",
  "Cultura nas Periferias",
  "Energia Sustentável",
];

export default function Propostas() {
  return (
    <div className={styles.container}>
      <h2>Propostas</h2>
      <div className={styles.cards}>
        {propostasCards.map((p, i) => (
          <Card Key={i} className={styles.card}>
            <CardContent>
              <Typography variant="h5">
                {p.imagem} {p.titulo}{" "}
              </Typography>
              <Typography variant="body2">{p.descricao}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <ul className={styles.listaExtras}>
        {propostasExtras.map((titulo, i) => (
          <li key={i}>{titulo}</li>
        ))}
      </ul>
    </div>
  );
}
