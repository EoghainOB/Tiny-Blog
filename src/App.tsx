import { useEffect, useState } from 'react';
import { postTypes } from './types';
import Crimeposts from './components/crimeposts';
import Historyposts from './components/historyposts';
import Frenchposts from './components/frenchposts';
import Englishposts from './components/englshposts';
import Loveposts from './components/loveposts';
import './App.css';

function App() {

  const [ filter, setFilter ] = useState<string>('all')
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
  }, [])

  const handleChange = (e: { preventDefault: () => void; target: any; }) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">

      <form className="form-filter">
          <label>Filter Tags: </label>
          <select onChange={handleChange}>
            <option value="all">All</option>
            <option value="crime">Crime</option>
            <option value="history">History</option>
            <option value="french">French</option>
            <option value="english">English</option>
            <option value="love">Love</option>
          </select>
        </form>
        <>
        <Crimeposts data={data} />
        <Historyposts data={data} />
        <Frenchposts data={data} />
        <Englishposts data={data} />
        <Loveposts data={data} />
        </>
    </div>
  );
}

export default App;
