import S from './Search.module.css';
import Router from 'next/router';
import { useState } from 'react';

export default function Search({ setIsLoading }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    Router.push({
      pathname: `/weather`,
      query: { location: location.trim().replace(/ +/, '+') },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={S.form}>
      <label className={S.label}>
        <input
          className={S.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search for a location..."
        />
        <button className={S.btn} type="submit">
          SEARCH
        </button>
      </label>
    </form>
  );
}
