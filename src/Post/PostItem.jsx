import React from 'react'
import classnames from 'classnames/bind';
import styles from './Post.module.scss';
import { Button } from '../components/Button/Button';

const cx = classnames.bind(styles)

const PostItem = (props) => {
  return (
    <div className={cx('post')}>
      <div className={cx('post-header')}> {props.number}. {props.post.title}</div>
      <div className={cx('post-content')}>
        {props.post.body}
      </div>
      <Button onClick={() => props.remove(props.post)} children='Удалить' />
    </div>
  )
}

export default PostItem