import { useEffect, useState } from 'react';
import { postTypes } from '../types';
import Postdetails from './postdetails';

export interface Props {
  posts: postTypes[],
  tagFilter: string
}

const Crimeposts = (posts: Props) => {
  const post = posts.posts;
  const filter = posts.tagFilter;

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (filter === 'history' || filter === 'english' || filter === 'french' || filter === 'love') {
      setIsShown(true);
    } else if (filter === 'crime' || filter === 'all') {
      setIsShown(false);
    }
  }, [filter]);

  return (
  <>
    {!isShown && <div className='label'>
    <div className='tagLabel'>
      <h1># Crime</h1>
      </div>
    </div>}
    {post.filter(posts => {
      if (filter === 'all') {
        if (posts.tags.some(tags => tags === 'crime')) {
          return posts;
        }
      } else if (filter === 'crime') {
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

export default Crimeposts;
