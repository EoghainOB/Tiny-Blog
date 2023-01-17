import { useEffect, useState } from 'react';
import { postTypes } from './types';
import Posts from './components/posts';
import Header from './components/header';
import Filter from './components/filter';
import './App.css';

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

  useEffect(() => {
    const blogApi = async () => {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json()
    setData(data.posts)
    }
    blogApi()
  }, [tagFilter])

  return (
    <div className="App">
      <Header />
      <Filter setTagFilter={setTagFilter}/>
      <>
      <div className="postContainer">
      <Posts data={data} tagFilter={tagFilter}/>
      </div>
      </>
    </div>
  );
}

export default App;
