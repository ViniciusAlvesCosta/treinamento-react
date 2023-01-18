import styles from './naoEncontrada.module.css'
import error404 from '../../Componentes/assets/erro_404.png'

import React from 'react'

export default function NaoEncontrada() {
  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Sate, sate, sate! página não encontrada.</h1>
            <p className={styles.paragrafo}>Tem certeza que era essa informção que você procura?</p>
            <p className={styles.paragrafo}>Espere um pouco antes de recarregar a Pg, ou volte para a Pg inicial.</p>

            <div className={styles.botaoContainer}><button>Voltar</button></div>
            <img className={styles.imagemCachorro} src={error404} alt="Porquinho do Nanatsu no taizai" />
        </div>
        <div className={styles.espacoEmBranco}></div>
      </>
  )
}
