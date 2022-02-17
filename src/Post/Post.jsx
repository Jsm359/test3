import React, {useState, useEffect} from 'react';
import { PostForm } from './PostForm';
import { PostList } from './PostList';
import { Postfilter } from './PostFilter';
import { Modal } from '../components/Modal/Modal';
import { Button } from '../components/Button/Button';
import { UsePostSort } from '../hooks/UsePostSort';
import { ServPost } from '../API/ServPost';
import { Loader } from '../components/Loader/Loader';
import { UseFetching } from '../hooks/UseFetching';
import { getPageCount } from '../utils/pages';
import classnames from 'classnames/bind';
import styles from './Post.module.scss';
import { Pagintaion } from '../components/pagintaion/Pagintaion';



export const Post = () => {
  const [posts, setPosts] = useState([])
  const [isVisible, setVisible] = useState(false)
  const [filter, setFilter] = useState({sort:'', query:''})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const SortedAndSearchPosts = UsePostSort(posts, filter.sort, filter.query) 

  const [fetchPosts, isLoading, err] = UseFetching(async (limit, page) => {
    const response = await ServPost.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages);

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setVisible(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div>
      <Button onClick={fetchPosts} children='GET' />
      <Button children='Создать' onClick={() => setVisible(true)} />
      <Modal open={isVisible} setOpen={setVisible}>
        <PostForm create={createPost} />
      </Modal> 
      <Postfilter filter={filter} setFilter={setFilter} /> 
      {err && <h1>Ошибка ${err}</h1> }
      {isLoading ? <Loader /> : <PostList remove={removePost} posts={SortedAndSearchPosts} title='Список постов' />} 
      <Pagintaion page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}


