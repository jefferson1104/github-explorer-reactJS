import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styled';

// interface para a tipagem do typescript, tipagem para o Estado repositories e setRepositories
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  // Estado, variavel para gravar o valor digitado no campo input, e variavel para alterar o valor
  const [newRepo, setNewRepo] = useState('');

  // Estado para controle de erros
  const [inputError, setInputError] = useState('');

  // Estado, vetores(arrays) onde vamos armazer os repositorios
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // funcao para adicionar novos repositorios
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    // Tratando erro do campo input vazio
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      // consumindo api do github
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      // salvando novo repositorio no array
      setRepositories([...repositories, repository]);

      // limpando campo input apos pesquisar
      setNewRepo('');

      // limpando erro caso fazer uma busca correta
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
