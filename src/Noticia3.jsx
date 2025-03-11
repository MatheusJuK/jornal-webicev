import React from 'react';
import { Link } from "react-router-dom";

const Noticia1 = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2>Robôs Humanoides Começam a Trabalhar em Restaurantes nos EUA</h2>
            <div className='flex gap-60'>
                <div>
                    <img src="./src/assets/Noticia1.jpg" alt="Imagem da Notícia 1" className='w-[200px]'/>
                </div>
                    <img src="./src/assets/Noticia3.jpg" alt="Imagem da Notícia 3" className='w-[700px]' />
                <div>
                    <img src="./src/assets/Noticia2.jpg" alt="Imagem da Notícia 2" className='w-[200px]'/>
                </div>
            </div>
            <p class='texto'>A tecnologia robótica acaba de dar mais um passo rumo ao futuro. Restaurantes nos Estados Unidos começaram a empregar robôs humanoides para atender clientes, servindo refeições e interagindo com o público.

Os robôs foram desenvolvidos para otimizar o atendimento e reduzir custos operacionais. Equipados com inteligência artificial avançada, eles conseguem anotar pedidos, entregar pratos e até responder perguntas básicas sobre o cardápio. Além disso, suas expressões faciais simulam emoções humanas, tornando a experiência mais natural para os clientes.

Em um dos restaurantes pioneiros em Nova York, os robôs já fazem parte da rotina. “No começo, os clientes ficavam surpresos, mas agora já acham normal serem atendidos por um robô. Eles são rápidos, eficientes e nunca se cansam”, comentou o gerente do estabelecimento.

No entanto, a novidade gera polêmica. Enquanto os empresários veem a tecnologia como uma solução econômica, muitos trabalhadores temem que os robôs substituam empregos tradicionais. Sindicatos já começaram a debater a questão, buscando regulamentações para equilibrar inovação e segurança no mercado de trabalho.

Especialistas acreditam que, nos próximos anos, o uso de robôs em restaurantes, hotéis e outros serviços será cada vez mais comum, marcando uma nova era na automação comercial.</p>
            <button><Link to="/">Voltar</Link></button>
        </div>
    );
};

export default Noticia1;