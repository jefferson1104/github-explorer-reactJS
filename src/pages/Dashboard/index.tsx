import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styled';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48356215?s=460&u=71601327f3c8678b4357d31e56428c06f76c598b&v=4"
            alt="Jefferson Soares"
          />

          <div>
            <strong>Jefferson1104/repo</strong>
            <p>Um repositório de Jefferson Soares Costa Junior</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48356215?s=460&u=71601327f3c8678b4357d31e56428c06f76c598b&v=4"
            alt="Jefferson Soares"
          />

          <div>
            <strong>Jefferson1104/repo</strong>
            <p>Um repositório de Jefferson Soares Costa Junior</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/48356215?s=460&u=71601327f3c8678b4357d31e56428c06f76c598b&v=4"
            alt="Jefferson Soares"
          />

          <div>
            <strong>Jefferson1104/repo</strong>
            <p>Um repositório de Jefferson Soares Costa Junior</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
