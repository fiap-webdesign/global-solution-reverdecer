import { createContext, useState } from 'react'
import { tutorials } from '../utils/tutoriais'

export const TutorialContext = createContext({})

export default function TutorialContextProvider({ children }) {
  // Criando variável para o filtro
  const [filteredTutorial, setFilteredTutorial] = useState(tutorials)
  const [category, setCategory] = useState('all')

  // Função de filtro dos tutoriais
  const filterTutorial = category => {
    if (category !== 'all') {
      setCategory(category)
      setFilteredTutorial(
        tutorials.filter(tutorial => tutorial.category.includes(category))
      )
    } else {
      setFilteredTutorial(tutorials)
      setCategory('all')
    }
  }

  // useState para verificar se o popUp esta aberto
  const [open, setOpen] = useState(false)

  // Função a para abrir o popUp
  const handleClickOpen = () => {
    setOpen(true)
  }

  // Função a para fechar o popUp
  const handleClose = () => {
    setOpen(false)
  }


  return (
    <TutorialContext.Provider
      value={{
        filterTutorial,
        filteredTutorial,
        category,
        open,
        setOpen,
        handleClickOpen,
        handleClose,
     
      }}
    >
      {children}
    </TutorialContext.Provider>
  )
}
