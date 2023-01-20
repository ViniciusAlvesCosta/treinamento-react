import PostModelo from 'Componentes/PostModelo'
import React from 'react'
import nanatsuCapa from '../../Componentes/assets/sobre_mim_capa_nanatsu.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from '../../Componentes/assets/foto-sobre-mim.JPG'

export default function SobreMim() {
  return (
    <PostModelo
     fotoCapa={nanatsuCapa}
     titulo=" Um pouco sobre Mim...">
     <h3 className={styles.subtitulo}>Oi sou Vini!</h3>
     <img src={fotoSobreMim} alt="foto do vinivius" className={styles.fotoSobreMim} />

          <p className={styles.paragrafo}>Tudo bem? Eu sou  um Front-end em treinamento e estou feliz de te ver por aqui.</p>           

          <p className={styles.paragrafo}>Minha história com programação começou no meu ensino médio, quando descobri a plataforma de ensino do Alura. Dei uma boa olhada em lógica de programação e no básico sobre Front-End. Me pareceu bastante interessante, mas infelizmente na época não eu não tinha como bancar os cursos.
          </p> 

          <p className={styles.paragrafo}>Então me aprofundei em áreas do meu interesse, escolhi fazer cursos de Mecâninca industrial, Enfermagem e Bombeiro Civil, até por fim cursar Design gráfico na Universidade da Cruzeiro do Sul, onde meu amor por Front-End e programação reacenderam.</p> 

          <p className={styles.paragrafo}>Foi quando tive um reencontro com a plataforma do Alura mais uma vez, onde tive a oportunidade de aprofundar meus conhecimentos não só em Design como também enfim mergulhar de cabeça na área de Front.
          </p>      

          <p className={styles.paragrafo}> Desde então, tem sido aprenas aprendizados atrás de aprendizados. Hoje sou muito feliz de ter a oportunidade de mostrar os  conteúdos que tenho aprendido, especialmente o React! </p>         
    </PostModelo>
  )
}
