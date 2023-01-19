import React, { useEffect, useState } from 'react';
import { postTypes } from './types';
import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import Footer from './components/footer';
import Posts from './components/posts';

function App() {

  const [ tagFilter, setTagFilter ] = useState<string>('all')
  const [ data, setData ] = useState<postTypes[]>([{
    id: 0,
    title: '',
    body: '',
    userId: 0,
    tags: [''],
    reactions: 0,
    }
  ])
  
  const tags = ['crime', 'english', 'french', 'love', 'history']

  useEffect(() => {
    const blogApi = async () => {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json()
    setData(data.posts)
    }
    blogApi()
  }, [])

  return (
    <div className="App">
      <Header />
      <Filter setTagFilter={setTagFilter}/>
        <>
        {tags.filter((tags => {
          if(tagFilter === 'all') {
            return tags
          } else {
            if(tagFilter !== 'all') {
              return tags === tagFilter
            }
          } return false
        }
        )).map((tag) => (
          <>
          <div className="postContainer">
          <div className='label'>
            <div className='tagLabel'>
              <h1># {tag}</h1>
            </div>
          </div>
          <Posts posts={data} tag={tag}/>
        </div>
          </>
        ))}
        </>
      <Footer />
    </div>
  );
}

export default App;
