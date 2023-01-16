import { postTypes } from '../types'

export interface Props {
    data: postTypes[]
}

const Englishposts = (data: Props) => {

return (
    <div className="postContainer">
    <div className='label'>
        <h1>#English</h1>
        <hr/>
    </div>
    <>
    {data.data.map(post => {
      if(post.tags.includes('english')) {
        return (
          <div key={post.id} className='posts'>    
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className='tags'>
            <h3><b>Tags:</b></h3> 
                {post.tags.map(tags => (
                <div><h4>{tags}</h4></div>
                ))}
                </div>
          </div>
          )
        }
      })}
    </>
    </div>
    )
}

export default Englishposts
