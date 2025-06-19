import React from "react";
import styles from "../styles/Footer.module.css";
import { Favebook, Twitter, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.redes}>
        <a href="https://facebook.com" target="_blank">
          <Facebook />
        </a>
        <a href="https://twitter.com" target="_blank">
          <Twitter />
        </a>
        <a href="https://instagram.com" target="_blank">
          <Instagram />
        </a>
      </div>
      <p>Contato: marco@madureiracampanha.com.br</p>
    </footer>
  );
}
