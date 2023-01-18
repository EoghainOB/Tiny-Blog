import { useEffect, useState } from 'react';
import { postTypes } from '../types';
import Postdetails from './postdetails';

export interface Props {
  posts: postTypes[],
  tagFilter: string
}

const Frenchposts = (posts: Props) => {
  const post = posts.posts;
  const filter = posts.tagFilter;

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (filter === 'crime' || filter === 'english' || filter === 'history' || filter === 'love') {
      setIsShown(true);
    } else if (filter === 'french' || filter === 'all') {
      setIsShown(false);
    }
  }, [filter]);

  return (
  <>
    {!isShown && <div className='label'>
      <h1># French</h1>
      <hr/>
    </div>}
    {post.filter(posts => {
      if (filter === 'all') {
        if (posts.tags.some(tags => tags === 'french')) {
          return posts;
        }
      } else if (filter === 'french') {
        if (posts.tags.some(tags => tags === filter)) {
          return posts;
        }
      } return false;
    }).map(item => (
      <ul key={item.id.toString()} className='posts'>
        <Postdetails post={item}/>
      </ul>
    ))
    }
  </>
  );
};

export default Frenchposts;
