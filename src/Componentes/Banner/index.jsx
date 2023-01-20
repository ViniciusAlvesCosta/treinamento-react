import styles from './Banner.module.css'
import meliodasMark from '../assets/meliodas-mark.png'
import fotoMinha from '../assets/minha-foto.jpg'

import React from 'react'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Oi, Pessoal!</h1>
            <p className={styles.paragrafo}>Sejam bem vindos ao meu espaço Nanatsu! Eu sou Vinicius Costa, Front-end em treinamento, e aqui compartilho com vocês várias curiosidades sobre Nanatsu no Taizai. Sim sou muito fã da obra do Nakaba Suzuki.</p>
        </div>
        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={meliodasMark} aria-hidden={true} alt=""></img>

            <img className={styles.minhaFoto} src={fotoMinha} aria-hidden={true} alt=""></img>
        </div>
        
    </div>
  )
}

