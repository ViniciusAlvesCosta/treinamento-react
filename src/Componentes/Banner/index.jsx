import styles from './Banner.module.css'
import circuloColorido from '../assents/circulo_colorido.png'
import minhaFoto from '../assents/minha_foto.png'

import React from 'react'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá, Mundo!</h1>
            <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo.</p>
        </div>
        <div className={styles.imagens}>
            <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt=""></img>

            <img className={styles.minhaFoto} src={minhaFoto} aria-hidden={true} alt=""></img>
        </div>
        
    </div>
  )
}

