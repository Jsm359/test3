import React, {useState, useEffect, useRef} from 'react';
import styles from './Post.module.scss'
import classnames from 'classnames/bind';
import { PostForm } from './PostForm';
import { PostList } from './PostList';
import { Postfilter } from './PostFilter';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { UsePostSort } from '../../hooks/UsePostSort';
import { ServPost } from '../../API/ServPost';
import { Loader } from '../../components/Loader/Loader';
import { UseFetching } from '../../hooks/UseFetching';
import { getPageCount } from '../../utils/pages';
import { Pagintaion } from '../../components/pagintaion/Pagintaion';
import { UseObserver } from '../../hooks/UseObserver';
import { SelectForm } from '../../components/Select/SelectForm';

const cx = classnames.bind(styles)

export const Post = () => {
  const [posts, setPosts] = useState([])
  const [isVisible, setVisible] = useState(false)
  const [filter, setFilter] = useState({sort:'', query:''})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const SortedAndSearchPosts = UsePostSort(posts, filter.sort, filter.query) 
  const lastElement = useRef()

  const [fetchPosts, isPostLoading, err] = UseFetching(async (limit, page) => {
    const response = await ServPost.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  UseObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts,newPost])
    setVisible(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div>
      <Button className={cx('btn-create')} children='Создать' onClick={() => setVisible(true)} />
      <Modal open={isVisible} setOpen={setVisible}>
        <PostForm create={createPost} />
      </Modal> 
      <Postfilter filter={filter} setFilter={setFilter} /> 
      {/* <SelectForm 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
            {value: 10, name: '10'},
            {value: 25, name: '25'},
            {value: -1, name: 'Показать все'},
        ]}
    /> */}

      {err && <h1>Ошибка ${err}</h1> }
      <PostList remove={removePost} posts={SortedAndSearchPosts} title='Список постов' />
      <div ref={lastElement} style={{height:20, background:'transparent'}}></div>
      {isPostLoading && <Loader />}
      {/* <Pagintaion page={page} changePage={changePage} totalPages={totalPages} /> */}
    </div>
  );
}


