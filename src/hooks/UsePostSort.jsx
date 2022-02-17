import {useMemo} from 'react'

export const UsePostSort = (posts, sort) => {
  const filteredPost = useMemo(() => {
    return sort ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) : posts
  }, [sort, posts])

  return filteredPost
}

export const UsePosts = (posts, sort, query) => {
  const filteredPost = UsePostSort(posts, sort)
  
  const SortedAndSearchPosts = useMemo (() => {
    return filteredPost.filter(post => post.title.toLowerCase().includes(query))
  }, [query, filteredPost])

  return SortedAndSearchPosts
}