import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Grog1",
      company: "LG",
      theme: "dark",
      title: "Front Developer",
      email: "tytyjacob@naver.com",
      message: "I am Grog",
      fileName: "Grog",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Grog2",
      company: "KAKAOTALK",
      theme: "light",
      title: "Front Developer",
      email: "tytyjacob@naver.com",
      message: "I am Grog",
      fileName: null,
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Grog3",
      company: "SAMSUNG",
      theme: "colorful",
      title: "Front Developer",
      email: "tytyjacob@naver.com",
      message: "I am Grog",
      fileName: null,
      fileURL: null,
    },
  });
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      //setCards를 호출할 당시의 cards를 가져옴
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
