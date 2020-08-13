import React from 'react';
import whatsappSvg from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/12675707?s=460&u=a6dfdf2f5476c91126fc9ad26e9a63b2e2edb8b2&v=4" alt="Marilzon de Sousa" />
        <div>
          <strong>Marilzon de Sousa</strong>
          <span>Aula de ReactJS</span>
        </div>
      </header>
      <p>
        Na aula de ReactJS vc aprende a criar interfaces robustas
    </p>
      <footer>
        <p>
          Preco por hora: <strong>60R$</strong>
        </p>
        <button type="button">
          <img src={whatsappSvg} alt="Icone WhatsApp" />
        Contato
      </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
