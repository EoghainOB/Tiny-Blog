import { postTypes } from '../types'
import Crimeposts from './crimeposts';
import Historyposts from './historyposts';
import Frenchposts from './frenchposts';
import Englishposts from './englshposts';
import Loveposts from './loveposts';
// import Postdetails from './postdetails2'

export interface Props {
    data: postTypes[]
    tagFilter: string
}

const Posts = (data: Props) => {

const posts = data.data
const filter = data.tagFilter

return (
  <>    
  <div className="postContainer">
  <div className='label'>
      <h1>#{filter}</h1>
      <hr/>
  </div>
    {posts.filter((post) => {
      if(filter === 'all') {
      return post
    } else {
      if(post.tags.some(tags => tags === filter)) {
        return post
      }
    }
    }).map((item) => (
      <>
      <Crimeposts item={item} tagFilter={filter}/>
      {/* <Historyposts item={item} />
      <Frenchposts item={item} />
      <Englishposts item={item} />
      <Loveposts item={item} /> */}
      </>
      ))
    }
    </div>
  </>
  )
}

export default Posts
