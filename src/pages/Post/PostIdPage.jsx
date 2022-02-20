import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ServPost } from '../../API/ServPost'
import { Loader } from '../../components/Loader/Loader'
import { UseFetching } from '../../hooks/UseFetching'

export const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostById, isLoading, err] = UseFetching( async (id) => {
    const response = await ServPost.getById(id)
    setPost(response.data)
  })

  const [fetchComments, isCimLoading, ComErr] = UseFetching( async (id) => {
    const response = await ServPost.getCommentByPostId(id)
    setComments(response.data)
  })
  
  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста c id = {params.id}</h1>
      {isLoading ? <Loader/> : <div>{post.id}. {post.title}</div>}
      <h1>Комментарии</h1>
      {isCimLoading
        ? <Loader/>
        : <div>
          {comments.map(comm => 
            <div key={comm.id} style={{marginTop:15}}>
              <h3>{comm.email}</h3>
              <div>{comm.body}</div>
            </div>
        )}
      </div>}
    </div>
  )
}
