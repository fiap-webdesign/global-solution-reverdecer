import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { useContext, useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { TutorialContext } from '../../context/Tutorial'
import styles from './modal.module.css'

export default function Modal() {
  const { open, handleClose } = useContext(TutorialContext)

  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')
  const [imagem, setImagem] = useState(null)
  const [video, setVideo] = useState(null)
  const [errors, setErrors] = useState({})

  const handleSubmit = () => {
    const newErrors = {}

    if (!nome.trim()) newErrors.nome = 'Campo obrigatório'
    if (!desc.trim()) newErrors.desc = 'Campo obrigatório'
    if (!imagem) newErrors.imagem = 'Imagem obrigatória'
    if (!video) newErrors.video = 'Vídeo obrigatório'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Tutorial criado com sucesso!')
      // Aqui você pode enviar os dados para sua API ou salvar
      handleClose()
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Criar um novo tutorial</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Nome do tutorial"
          type="text"
          variant="standard"
          fullWidth
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          error={!!errors.nome}
          helperText={errors.nome}
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: 'var(--darkGreen)' },
            '& .MuiInput-underline:after': { borderBottomColor: 'var(--darkGreen)' },
            '& label': { color: 'var(--darkGreen)' },
            '& label.Mui-focused': { color: 'var(--darkGreen)' },
          }}
        />
        <TextField
          margin="dense"
          label="Descrição do tutorial"
          type="text"
          variant="standard"
          fullWidth
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          error={!!errors.desc}
          helperText={errors.desc}
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: 'var(--darkGreen)' },
            '& .MuiInput-underline:after': { borderBottomColor: 'var(--darkGreen)' },
            '& label': { color: 'var(--darkGreen)' },
            '& label.Mui-focused': { color: 'var(--darkGreen)' },
          }}
        />
        <div className={styles.containerFile}>
          <label className={styles.uploadButton}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImagem(e.target.files[0])}
              className={styles.input}
            />
            <FiUploadCloud size={20} />
            <span>Escolher imagem</span>
          </label>
          {errors.imagem && <p className={styles.errorText}>{errors.imagem}</p>}

          <label className={styles.uploadButton}>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              className={styles.input}
            />
            <FiUploadCloud size={20} />
            <span>Escolher vídeo</span>
          </label>
          {errors.video && <p className={styles.errorText}>{errors.video}</p>}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: 'var(--darkGreen)' }}>
          Cancelar
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: 'var(--darkGreen)',
            '&:hover': { backgroundColor: 'var(--lightGreen)' },
            color: 'var(--white)',
          }}
        >
          Criar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
