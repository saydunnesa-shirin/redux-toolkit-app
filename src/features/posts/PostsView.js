import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const PostsView = () => {
  const {isLoading, posts, error} = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());

  }, [])

  return (
    <div>
      <h2>Posts</h2>
       {isLoading && <h3>Loading</h3>}
       {error && <h3>{error}</h3>}
       <section>
        {posts && posts.map((post) => {
            return <article key={post.id}>{post.title}</article>
        })}
       </section>
       
    </div>
  )
}

export default PostsView
