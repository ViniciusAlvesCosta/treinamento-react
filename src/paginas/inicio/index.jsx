import React from 'react'
import styles from './inicio.module.css'
import posts from 'Json/posts.json'
import Posts from 'Componentes/Post'

export default function Inicio() {
  return (
      <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
                <Posts post={post}/>
            </li>
          ))}
      </ul>
    
  )
}
