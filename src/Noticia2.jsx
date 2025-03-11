import React from 'react';
import { Link } from "react-router-dom";

const Noticia1 = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2>Descoberta de Cidade Perdida na Amazônia Surpreende Arqueólogos</h2>
            <div className='flex gap-60'>
                <div>
                    <img src="./src/assets/Noticia1.jpg" alt="Imagem da Notícia 1" className='w-[200px]'/>
                </div>
                    <img src="./src/assets/Noticia2.jpg" alt="Imagem da Notícia 2" className='w-[700px]' />
                <div>
                    <img src="./src/assets/Noticia3.jpg" alt="Imagem da Notícia 3" className='w-[200px]'/>
                </div>
            </div>
            <p class='texto'>Uma descoberta arqueológica surpreendente está reescrevendo parte da história das civilizações pré-colombianas na América do Sul. Uma equipe de pesquisadores revelou a existência de uma cidade perdida no meio da floresta amazônica, com estruturas de pedra bem preservadas, sistemas de irrigação e indícios de uma sociedade complexa.

A expedição foi liderada por especialistas em arqueologia e antropologia, que usaram tecnologia de varredura a laser (LiDAR) para mapear a região densa da floresta. O estudo revelou uma rede de estradas interligadas, templos e casas de pedra, indicando que a cidade pode ter sido o lar de milhares de pessoas há mais de mil anos.

"Antes acreditávamos que a Amazônia era habitada apenas por pequenas tribos nômades, mas essa descoberta mostra que existiam sociedades organizadas e prósperas aqui", afirmou o arqueólogo responsável, Dr. Ricardo Fonseca.

Os pesquisadores encontraram ainda inscrições e cerâmicas que indicam um sistema de escrita rudimentar, além de vestígios de plantações sofisticadas. Isso sugere que essa civilização possuía conhecimentos avançados de agricultura e engenharia.

A descoberta reforça a teoria de que civilizações amazônicas antigas eram mais desenvolvidas do que se pensava. Agora, os arqueólogos se dedicam a estudar os achados e entender como essa sociedade desapareceu ao longo dos séculos.</p>
            <button><Link to="/">Voltar</Link></button>
        </div>
    );
};

export default Noticia1;