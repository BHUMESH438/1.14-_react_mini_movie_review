import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits, removestory } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }
  return (
    <section className='stories'>
      {hits.map(stories => {
        const { objectID, title, num_comments, url, points, author } = stories;
        return (
          <article className='story' key={objectID}>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} by <span>{author}</span>
              {num_comments}
              comments
            </p>
            <div>
              <a href={url} className='read-link' target='_blank' rel='noopener norefernce '>
                read more
              </a>
              <button className='remove-btn' onClick={() => removestory(objectID)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
