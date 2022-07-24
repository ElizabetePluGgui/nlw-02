import React from "react";

import WhatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="" alt="" />
        <div>
          <strong>name</strong>
          <span>subject</span>
        </div>
      </header>

      <p>bio</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ price</strong>
        </p>
        <a target="_blank" href="">
          <img src={WhatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
