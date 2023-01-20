import styles from './naoEncontrada.module.css'
import error404 from '../../Componentes/assets/hawk-error-404.png'

import React from 'react'
import BotaoPrincipal from 'Componentes/BoatoPrincipal'
import { useNavigate } from 'react-router'

export default function NaoEncontrada() {

  const navegar = useNavigate()

  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Sate, sate, sate! página não encontrada.</h1>
            <p className={styles.paragrafo}>Tem certeza que era essa informção que você procura?</p>
            <p className={styles.paragrafo}>Espere um pouco antes de recarregar a Pg, ou volte para a Pg inicial.</p>

            <div className={styles.botaoContainer} onClick={() => navegar("/")}><BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal></div>
            <img className={styles.imagemCachorro} src={error404} alt="Porquinho do Nanatsu no taizai" />
        </div>
        <div className={styles.espacoEmBranco}></div>
      </>
  )
}
