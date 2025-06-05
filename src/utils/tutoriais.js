// Imports de água
import videoCaptacaoDeAgua from '../assets/videos/captacao-de-agua.mp4'
import CaptacaoDeAgua from '../assets/img/captacao-de-agua.png'
// Imports de segurança
import videoAcidenteDomestico from '../assets/videos/acidentes-domesticos.mp4'
import acidenteDomestico from '../assets/img/acidentes-domesticos.png'
// Imports de alimentos
import videoAlimentacaoAcessivel from '../assets/videos/alimentacao-acessivel.mp4'
import alimentacaoAcessivel from '../assets/img/alimentacao-acessivel.png'
import videoComposteiraDeAlimentos from '../assets/videos/composteira-de-alimentos.mp4'
import composteiraDeAlimentos from '../assets/img/composteira-de-alimentos.png'
import videoHortaVertical from '../assets/videos/horta-vertical.mp4'
import hortaVertical from '../assets/img/horta-vertical.png'
// Imports de energia
import videoPlacasSolares from '../assets/videos/placas-solares.mp4'
import placasSolares from '../assets/img/placas-solares.png'

export const tutorials = [
  {
    category: ['security'],
    title: 'Acidentes domésticos',
    description: 'Dicas para prevenir acidentes domésticos em tempos difíceis.',
    video: videoAcidenteDomestico,
    image: acidenteDomestico,
  },
  {
    category: ['food'],
    title: 'Alimentação Acessível',
    description: 'Prepare refeições nutritivas com ingredientes locais.',
    video: videoAlimentacaoAcessivel,
    image: alimentacaoAcessivel,
  },
  {
    category: ['food'],
    title: 'Compostagem',
    description: 'Reaproveite alimentos e crie a sua composteira.',
    video: videoComposteiraDeAlimentos,
    image: composteiraDeAlimentos,
  },
  {
    category: ['food'],
    title: 'Horta Vertical',
    description: 'Aprenda a criar uma horta vertical em espaços pequenos.',
    video: videoHortaVertical,
    image: hortaVertical,
  },
  {
    category: ['water'],
    title: 'Captação de Água',
    description: 'Aprenda a instalar um sistema simples de coleta de água.',
    video: videoCaptacaoDeAgua,
    image: CaptacaoDeAgua,
  },
  {
    category: ['energy'],
    title: 'Painéis Solares',
    description: 'Guia prático para a instalação econômica de painéis solares.',
    video: videoPlacasSolares,
    image: placasSolares,
  },
]