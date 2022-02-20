import React from 'react'
import { Button } from '../Button/Button'
import classnames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { getPagesArray } from '../../utils/pages';

const cx = classnames.bind(styles)

export const Pagintaion = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div>
      {pagesArray.map((p) =>
        <Button key={p} onClick={() => changePage(p)} className={cx(page === p ? 'page-current' : 'page')}>{p}</Button>
      )}
    </div>
  )
}
