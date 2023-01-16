import { postTypes } from '../types'
import Postdetails from './postdetails'

export interface Props {
    data: postTypes[]
}

const Loveposts = (data: Props) => {

return (
  <div className="postContainer">
    <div className='label'>
        <h1>#Love</h1>
        <hr/>
    </div>
    <>
    {data.data.map(post => {
      if(post.tags.includes('love')) {
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

export default Loveposts
