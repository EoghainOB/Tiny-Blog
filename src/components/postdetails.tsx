import React from 'react';
import { postTypes } from '../types';
import Gallery from './gallery';

export interface Props {
  post: postTypes,
}

const Postdetails = (post: Props) => {
  const item = post.post;

  return (
  <li>
    <Gallery post={item}/>
    <h2>{item.title}</h2>
    <p>{item.body}</p>
      <div className='tags'>
      <>
      <h3><b>Tags:</b></h3>
        {item.tags.map(tags => (
        <div key={Math.random()}><h4>{tags}</h4></div>
        ))}
      </>
      </div>
  </li>
  );
};

export default Postdetails;
