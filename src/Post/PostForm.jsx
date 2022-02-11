import React, {useState} from 'react'
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';

export const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title:'', body: ''})
  }
  return (
    <form>
        <Input value={post.title} placeholder='Название поста' onChange={e => setPost({...post,title:e.target.value})} />
        <Input value={post.body} placeholder='Описание поста' onChange={e => setPost({...post,body:e.target.value})} />
        <Button children='Создать пост' onClick={addNewPost} />
    </form>
  )
}
