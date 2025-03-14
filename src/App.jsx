import './App.css'
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className='flex justify-between'>
        <p>Template de jornal</p>
        <p>11/03/2025</p>
      </div>
      <div className='border solid max-w-[2920px]'></div>
      <h1 class='titulo'>Jornal</h1>
      <div className='border solid max-w-[2920px]'></div>
      <div className='flex justify-around px-20 items-center mt-14'>
        <div className='flex flex-col gap-4'>
          <h2>Avanço Científico: Cientistas Criam Coração Biônico Totalmente Funcional</h2>
          <img src="./src/assets/Noticia1.jpg" alt="Imagem da Notícia 1"/>
          <p class='resumo'>Pesquisadores desenvolveram um coração biônico revolucionário que pode substituir o órgão humano sem necessidade de doadores. O dispositivo imita perfeitamente os batimentos e a circulação do sangue, prometendo salvar milhões de vidas nos próximos anos.</p>
          <Link to="/noticia1"><button>Ver mais</button></Link> 
        </div>
        <div className='flex flex-col gap-4'>
          <h2>Descoberta de Cidade Perdida na Amazônia Surpreende Arqueólogos</h2>
          <img src="./src/assets/Noticia2.jpg" alt="Imagem da Notícia 2"/>
          <p class ='resumo'>Pesquisadores descobriram uma cidade perdida na Amazônia, com indícios de uma civilização avançada que pode ter habitado a região há milhares de anos. O achado desafia a teoria de que a floresta era pouco povoada antes da chegada dos europeus.</p>
          <Link to="/noticia2"><button>Ver mais</button></Link>
        </div>
        <div className='flex flex-col gap-4'>
          <h2>Robôs Humanoides Começam a Trabalhar em Restaurantes nos EUA</h2>
          <img src="./src/assets/Noticia3.jpg" alt="Imagem da Notícia 3"/>
          <p class ='resumo'>Redes de restaurantes nos EUA estão implementando robôs humanoides para servir mesas e interagir com os clientes. A inovação visa melhorar a eficiência e reduzir custos, mas gera debates sobre o impacto no emprego humano.</p>
          <Link to="/noticia3"><button>Ver mais</button></Link>
        </div>
      </div>
      <div className='flex justify-center'>
        <h2>GPT QUE GEROU! FIQUEI COM PREGUIÇA DE FAZER AS NOTÍCIAS</h2>
      </div>
    </>
  )
}

export default App
