import React from 'react'
import PostForm from '../components/PostForm'


const Create = () => {
  return (
    <>
        <PostForm header={"Create your post now"} btnText={"Create Post"} method={"POST"} />
    </>
  )
}

export default Create

