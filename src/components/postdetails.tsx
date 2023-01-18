import { postTypes } from '../types';

export interface Props {
  post: postTypes,
}

const Postdetails = (post: Props) => (
  <li>
    <h2>{post.post.title}</h2>
    <p>{post.post.body}</p>
      <div className='tags'>
      <>
      <h3><b>Tags:</b></h3>
        {post.post.tags.map(tags => (
        <div key={Math.random()}><h4>{tags}</h4></div>
        ))}
      </>
      </div>
  </li>
);

export default Postdetails;
