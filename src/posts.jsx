import { useEffect, useState } from "react"
import Post from "./post"

 export default function Posts(params) {
    const [posts,SetPosts]= useState([])
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => SetPosts(data))


    },[])
    return (
        <div>
            <h3>Posts:{posts.length}</h3>
            {

        posts.map(post=><Post post={post}></Post>)

            }
        </div>
    )
}