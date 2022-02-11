import { useEffect, useState } from 'react';

const Filter = ({ setActiveGenre, activeGenre, popular, setFiltered }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const sendData = async (e) => {
    e.preventDefault();
    const data = {
      email,
      username: name,
    };
    const res = await fetch('http://localhost:4000/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();
    console.log(json);
  };
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) => {
      return movie.genre_ids.includes(activeGenre);
    });
    setFiltered(filtered);
  }, [activeGenre]);

  const captureNameInput = (e) => {
    setName(e.target.value);
  };

  const captureEmailInput = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className='filter-container'>
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => {
          setActiveGenre(0);
        }}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => {
          setActiveGenre(35);
        }}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => {
          setActiveGenre(28);
        }}
      >
        Action
      </button>
      <div className='input-elements'>
        <input
          type='text'
          placeholder='enter your full name'
          value={name}
          onChange={captureNameInput}
        />
        <input
          type='email'
          placeholder='enter your email'
          value={email}
          onChange={captureEmailInput}
        />
        <button type='submit' onClick={sendData}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Filter;
