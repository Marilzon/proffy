import React from 'react';
import whatsappSvg from '../../assets/images/icons/whatsapp.svg';
import './style.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>
      <footer>
        <p>
          Preco por hora: <strong>R$ {teacher.cost}</strong>
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
