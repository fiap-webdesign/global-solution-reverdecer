import DescriptionPillar from '../../components/DescriptionPillar'
import Line from '../../components/Line'
import ProjectPillars from '../../components/ProjectPillars'
import Subtitle from '../../components/Subtitle'
import Title from '../../components/Title'
import TitlePillar from '../../components/TitlePillar'
import styles from './introduction.module.css'

import { RiPlantLine } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

export default function Introduction() {
  return (
    <section className={styles.container} id='quem-somos'>
      <div className={styles.firstColumn}>
        <div className={styles.whoWeAre}>
          <Title title={'Quem somos?'} />
          <p className={styles.description}>
            O <strong>Reverdecer</strong> une tecnologia, educação e
            sustentabilidade para capacitar comunidades a enfrentar desafios
            ambientais com autonomia. Por meio de tutoriais práticos e
            acessíveis, já impactamos mais de <strong>4.500 pessoas</strong> em
            todo o Brasil com soluções como hortas, captação de água e energia
            solar.
          </p>
        </div>
        <div className={styles.pillarsContainer}>
          <Subtitle subtitle={'Nossos pilares'} />
          <Line />
          <div className={styles.pillars}>
            <ProjectPillars>
              <TitlePillar title={"Educação Acessível"}>
                <RiPlantLine color='var(--darkGreen)'/>
              </TitlePillar>
              <DescriptionPillar>
                Oferecemos tutoriais gratuitos e simples, com linguagem clara e
                foco no aprendizado prático.
              </DescriptionPillar>
            </ProjectPillars>
            <ProjectPillars>
              <TitlePillar title={"Colaboração Comunitária"}>
                <FaHandshakeSimple color='var(--darkGreen)'/>
              </TitlePillar>
              <DescriptionPillar>
                Valorizamos o saber coletivo, incentivando a troca de experiências entre comunidades.
              </DescriptionPillar>
            </ProjectPillars>
            <ProjectPillars>
              <TitlePillar title={"Sustentabilidade com Propósito"}>
                <BiWorld color='var(--darkGreen)'/>
              </TitlePillar>
              <DescriptionPillar>
                Buscamos impacto real, unindo cuidado ambiental e transformação social.
              </DescriptionPillar>
            </ProjectPillars>
          </div>
        </div>
      </div>
      <div className={styles.secondColumn}>
        <div className={styles.plantingImage}></div>
      </div>
    </section>
  )
}
