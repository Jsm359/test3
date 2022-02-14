import React, {useState, useMemo} from 'react';
import { PostForm } from './PostForm';
import { PostList } from './PostList';
import { Postfilter } from './PostFilter';
import { Modal } from '../components/Modal/Modal';
import { Button } from '../components/Button/Button';

export const Post = () => {
  const [posts, setPosts] = useState([
    {id: 1, title:'fff', body:'iuioiu'},
    {id: 2, title:'ccc', body:'hjkjhk'},
    {id: 3, title:'aaa', body:'nbvnbv'},
    {id: 4, title:'hyhh', body:'qweeqw'},
  ])

  const [isVisible, setVisible] = useState(false)

  const [filter, setFilter] = useState({sort:'', query:''})

  const filteredPost = useMemo(() => {
    console.log('Отработала');
   return filter.sort ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) : posts
  }, [filter.sort, posts])

  const SortedAndSearchPosts = useMemo (() => {
    return filteredPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, filteredPost])

  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setVisible(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div>
      <Button children='Создать' onClick={() => setVisible(true)} />
      <Modal open={isVisible} setOpen={setVisible}>
        <PostForm create={createPost} />
      </Modal> 
      <Postfilter filter={filter} setFilter={setFilter} />  
      <PostList remove={removePost} posts={SortedAndSearchPosts} title='Список постов' />
    </div>
  );
}


