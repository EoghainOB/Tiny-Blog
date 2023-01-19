import React from 'react';
import { postTypes } from '../types';
import Gallery from './gallery';

export interface Props {
  posts: postTypes[],
  tag: string,
}

const Posts = ({posts, tag}: Props) => {

  return (  
    <>
    {posts.filter((post) => {
      if(post.tags.includes(tag)) {
      return post
    } return false;
    }).map((post) => {
      return (
    <ul key={post.id} className='posts'>
      <li>
      <Gallery post={post}/>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
        <div className='tags'>
          <h3><b>Tags:</b></h3>
            {post.tags.map(tags => (
            <div key={Math.random()}><h4>{tags}</h4></div>
            ))}
        </div>
      </li>
    </ul>
    )})}
    </>
  )
};

export default Posts;
