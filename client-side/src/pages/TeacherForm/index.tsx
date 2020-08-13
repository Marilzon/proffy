import React from 'react';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/TextArea';
import Input from '../../components/Input';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel!, você quer lecionar!"
        description="O primeiro passo é preencher o formulário de instrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="subject" label="Nome comlpeto" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobra a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'ReactJS', label: 'ReactJS' },
              { value: 'VueJS', label: 'VueJS' },
              { value: 'NodeJS', label: 'NodeJS' }
            ]}
          />
          <Input name="cost" label="Valor aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponiveis
            <button type="button">Novo Horario</button>
          </legend>
          <div className="schedule-item">
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input name="from" label="Inicio" type="time" />
          <Input name="to" label="Fim" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>

  )
}

export default TeacherForm;
