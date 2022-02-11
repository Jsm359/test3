import React, {useState} from 'react';
import { PostList } from './Post/PostList';
import styles from './App.module.scss'
import classnames from 'classnames/bind';
import { PostForm } from './Post/PostForm';

const cx = classnames.bind(styles)

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title:'Заголовок1', body:'какой то текст1'},
    {id: 2, title:'Заголовок2', body:'какой то текст2'},
    {id: 3, title:'Заголовок3', body:'какой то текст3'},
    {id: 4, title:'Заголовок4', body:'какой то текст4'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts,newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={cx('App')}>
      <PostForm create={createPost} />
      {posts.length
       ? <PostList remove={removePost} posts={posts} title='Список постов' />
       : <h1>Посты не найдены</h1>
      }
    </div>
  );
}



