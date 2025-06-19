import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Marco Madureira</h1>
      <nav className={styles.nav}>
        <Link to="biografia" smooth={true} duration={500}>
          Biografia
        </Link>
        <Link to="propostas" smooth={true} duration={500}>
          Propostas
        </Link>
        <Link to="agenda" smooth={true} duration={500}>
          Agenda
        </Link>
        <Link to="contato" smooth={true} duration={500}>
          Contato
        </Link>
      </nav>
    </header>
  );
}
