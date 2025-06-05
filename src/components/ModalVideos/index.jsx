import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import styles from './modalVideos.module.css'

export default function VideoModal({ open, onClose, videoSrc }) {

  console.log(videoSrc)
  
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Assista ao tutorial</DialogTitle>
      <DialogContent className={styles.videoContent}>
        {videoSrc ? (
          <video
            src={videoSrc}
            controls
            className={styles.videoPlayer}
          />
        ) : (
          <p>Vídeo não encontrado.</p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: 'var(--darkGreen)' }}>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
