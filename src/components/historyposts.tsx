import { useEffect, useState } from 'react';
import { postTypes } from '../types';
import Postdetails from './postdetails';

export interface Props {
  posts: postTypes[],
  tagFilter: string
}

const Historyposts = (posts: Props) => {
  const post = posts.posts;
  const filter = posts.tagFilter;

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (filter === 'crime' || filter === 'english' || filter === 'french' || filter === 'love') {
      setIsShown(true);
    } else if (filter === 'history' || filter === 'all') {
      setIsShown(false);
    }
  }, [filter]);

  return (
  <>
    {!isShown && <div className='label'>
      <div className='tagLabel'>
        <h1># History</h1>
      </div>
    </div>}
    {post.filter(posts => {
      if (filter === 'all') {
        if (posts.tags.some(tags => tags === 'history')) {
          return posts;
        }
      } else if (filter === 'history') {
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

export default Historyposts;
