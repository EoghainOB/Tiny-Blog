import { postTypes } from '../types'
import Postdetails from './postdetails'

export interface Props {
    data: postTypes[]
}

const Crimeposts = (data: Props) => {

return (
  <div className="postContainer">
    <div className='label'>
        <h1>#Crime</h1>
        <hr/>
    </div>
    <>
    {data.data.map(post => {
      if(post.tags.includes('crime')) {
        return (
          <ul key={post.id.toString()} className='posts'>
          <Postdetails post={post}/>
          </ul>
          )
        }
      })}
    </>
  </div>
  )
}

export default Crimeposts
