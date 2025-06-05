import { useContext, useState } from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { TutorialContext } from '../../context/Tutorial'
import VideoModal from '../ModalVideos'
import styles from './card.module.css'

export default function Card() {
  const { filteredTutorial } = useContext(TutorialContext)
  const [videoOpen, setVideoOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleOpenVideo = (videoSrc) => {
    setSelectedVideo(videoSrc)
    setVideoOpen(true)
  }

  return (
    <>
      <section className={styles.tutorials}>
        {filteredTutorial.map((tutorial) => (
          <div key={tutorial.title} className={styles.card}>
            <img
              src={tutorial.image}
              alt={`Imagem do tutorial ${tutorial.title}`}
              className={styles.image}
            />
            <h4 className={styles.title}>{tutorial.title}</h4>
            <p className={styles.desc}>{tutorial.description}</p>
            <button
              className={styles.btn}
              onClick={() => handleOpenVideo(tutorial.video)}
            >
              Assistir <MdOutlineArrowRightAlt size={20} />
            </button>
          </div>
        ))}
      </section>

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoSrc={selectedVideo}
      />
    </>
  )
}
