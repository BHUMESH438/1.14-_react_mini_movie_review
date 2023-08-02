import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { handlesearch, query } = useGlobalContext();
  return (
    <form className='search-from' onSubmit={e => e.preventDefault()}>
      <input type='text' className='form-input' value={query} onChange={e => handlesearch(e.target.value)} />
    </form>
  );
};

export default SearchForm;
