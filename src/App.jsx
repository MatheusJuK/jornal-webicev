import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between'>
      <p>Template de jornal</p>
      <p>11/03/2025</p>
      </div>
      <div className='border 1920px solid w-[1920px]'></div>
      <h1 class='titulo'>Jornal</h1>
      <div className='border 1920px solid w-[1920px]'></div>
      <div className='flex justify-around'>
        <div className='flex flex-col gap-4'>
          <h2>Avanço Científico: Cientistas Criam Coração Biônico Totalmente Funcional</h2>
          <img src="./src/assets/Noticia1.jpg" alt="Imagem da Notícia 1" className='w-[400px'/>
          <p class='resumo'>Pesquisadores desenvolveram um coração biônico revolucionário que pode substituir o órgão humano sem necessidade de doadores. O dispositivo imita perfeitamente os batimentos e a circulação do sangue, prometendo salvar milhões de vidas nos próximos anos.</p>
          <button>
            <Link to="/noticia1">Ver mais</Link>
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <h2>Descoberta de Cidade Perdida na Amazônia Surpreende Arqueólogos</h2>
          <img src="./src/assets/Noticia2.jpg" alt="Imagem da Notícia 2" className='w-[400px'/>
          <p class ='resumo'>Pesquisadores descobriram uma cidade perdida na Amazônia, com indícios de uma civilização avançada que pode ter habitado a região há milhares de anos. O achado desafia a teoria de que a floresta era pouco povoada antes da chegada dos europeus.</p>
          <button>
            <Link to="/noticia2">Ver mais</Link>
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <h2>Robôs Humanoides Começam a Trabalhar em Restaurantes nos EUA</h2>
          <img src="./src/assets/Noticia3.jpg" alt="Imagem da Notícia 3" className='w-[400px'/>
          <p class ='resumo'>Redes de restaurantes nos EUA estão implementando robôs humanoides para servir mesas e interagir com os clientes. A inovação visa melhorar a eficiência e reduzir custos, mas gera debates sobre o impacto no emprego humano.</p>
          <button>
            <Link to="/noticia3">Ver mais</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
