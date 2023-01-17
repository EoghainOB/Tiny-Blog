import { postTypes } from '../types'
import Postdetails from './postdetails'

export interface Props {
  item: postTypes,
  tagFilter: string
}

const Crimeposts = (item: Props) => {

  const post = item.item

  return (
      <>
        <ul key={post.id.toString()} className='posts'>
        <Postdetails post={post}/>
        </ul>
      </>
    )

}

export default Crimeposts
