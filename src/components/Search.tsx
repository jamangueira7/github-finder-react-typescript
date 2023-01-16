import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react';
import classes from './Search.module.css';

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (event: KeyboardEvent) => {
    if(event.key === 'Enter') {
      loadUser(userName);
    }
  }

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(event) => setUserName(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;