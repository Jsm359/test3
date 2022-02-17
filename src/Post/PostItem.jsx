import React from 'react'
import classnames from 'classnames/bind';
import styles from './Post.module.scss';
import { Button } from '../components/Button/Button';

const cx = classnames.bind(styles)

const PostItem = (props) => {
  return (
    <div className={cx('post')}>
      <div className={cx('post-header')}>
         {props.post.id}. {props.post.title}
        <div className={cx('post-content')}>
          {props.post.body}
        </div>
      </div>
      <div className={cx('post-btns')}>
        <Button className={cx('btn-in-post')} onClick={() => props.remove(props.post)} children='Удалить' />
      </div>
    </div>
  )
}

export default PostItem