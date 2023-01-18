import { useEffect, useState } from 'react';
import { postTypes } from './types';
import Header from './components/header';
import Filter from './components/filter';
import Crimeposts from './components/crimeposts';
import Englishposts from './components/englishposts';
import Frenchposts from './components/frenchposts';
import Historyposts from './components/historyposts';
import Loveposts from './components/loveposts';
import './App.css';
import Footer from './components/footer';

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
        <>
        <Crimeposts posts={data} tagFilter={tagFilter}/>
        <Englishposts posts={data} tagFilter={tagFilter}/>
        <Frenchposts posts={data} tagFilter={tagFilter}/>
        <Loveposts posts={data} tagFilter={tagFilter}/>
        <Historyposts posts={data} tagFilter={tagFilter}/>
        </>
      </div>
      </>
      <Footer />
    </div>
  );
}

export default App;
