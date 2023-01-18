import { useEffect, useState } from 'react';
import { postTypes } from '../types';
import Postdetails from './postdetails';

export interface Props {
  posts: postTypes[],
  tagFilter: string
}

const Loveposts = (posts: Props) => {
  const post = posts.posts;
  const filter = posts.tagFilter;

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (filter === 'crime' || filter === 'english' || filter === 'french' || filter === 'history') {
      setIsShown(true);
    } else if (filter === 'love' || filter === 'all') {
      setIsShown(false);
    }
  }, [filter]);

  return (
  <>
    {!isShown && <div className='label'>
      <h1># Love</h1>
      <hr/>
    </div>}
    {post.filter(posts => {
      if (filter === 'all') {
        if (posts.tags.some(tags => tags === 'love')) {
          return posts;
        }
      } else if (filter === 'love') {
        if (posts.tags.some(tags => tags === filter)) {
          return posts;
        }
      } return false
    }).map(item => (
      <ul key={item.id.toString()} className='posts'>
        <Postdetails post={item}/>
      </ul>
    ))
    }
  </>
  );
};

export default Loveposts;
