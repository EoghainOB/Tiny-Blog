import { useEffect, useState } from 'react';
import { postTypes } from '../types';

export interface Props {
  post: postTypes,
}

const Gallery = (post: Props) => {
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const query = post.post.title;
      const data = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=UBR9sVykX54i9CVol4jSs5JcNg73PFUcExZXzW1X0WY`);
      const json = await data.json();
      return json;
    };
    fetchData().then(result => {
      setImage(result.results[0].urls.regular);
    });
  }, [post.post.title]);

  return (
        <img alt={post.post.title} src={image}/>
  );
};

export default Gallery;
