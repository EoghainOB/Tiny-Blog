import { postTypes } from '../types'

export interface Props {
  item: postTypes,
  tagFilter: string
}

const Postdetails = (item: Props) => {

const posts = item.item
const filter = item.tagFilter


return (
  <li>    
    <h2>{item.item.title}</h2>
    <p>{item.item.body}</p>
      <div className='tags'>
      <>
      <h3><b>Tags:</b></h3> 
        {item.item.tags.map(tags => (
        <div key={Math.random()}><h4>{tags}</h4></div>
        ))}
      </>
      </div>
  </li>
  )
}

export default Postdetails