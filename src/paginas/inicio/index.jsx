import React from 'react'
import styles from './inicio.module.css'
import posts from 'Json/posts.json'
import PostCard from 'Componentes/PostCard'

export default function Inicio() {
  return (
      <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
                <PostCard post={post}/>
            </li>
          ))}
      </ul>
    
  )
}
