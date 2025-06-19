import "./styles.css";
import Header from "./components/Header";
import Biografia from "./components/Biografia";
import Footer from "./components/Footer";
import Propostas from "./components/Propostas";
import Agenda from "./components/Agenda";
// import { Element } from "react-scroll";

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Element name="biografia">
          <Biografia />
        </Element>
        <Element name="proposta">
          <Propostas />
        </Element>
        <Element name="agenda">
          <Agenda />
        </Element>
        <Element name="footer">
          <Footer />
        </Element> */}
      </main>
    </>
  );
}
