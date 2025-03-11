import React from 'react';
import { Link } from "react-router-dom";

const Noticia1 = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2>Avanço Científico: Cientistas Criam Coração Biônico Totalmente Funcional</h2>
            <div className='flex gap-60'>
                <div>
                    <img src="./src/assets/Noticia2.jpg" alt="Imagem da Notícia 2" className='w-[200px]'/>
                </div>
                    <img src="./src/assets/Noticia1.jpg" alt="Imagem da Notícia 1" className='w-[700px]' />
                <div>
                    <img src="./src/assets/Noticia3.jpg" alt="Imagem da Notícia 3" className='w-[200px]'/>
                </div>
            </div>
            <p class='texto'>Nos últimos anos, a medicina tem testemunhado avanços notáveis na busca por alternativas para transplantes de órgãos. Agora, uma equipe de cientistas anunciou uma inovação que pode revolucionar os tratamentos cardíacos: um coração biônico totalmente funcional, capaz de substituir o órgão humano sem necessidade de doadores.

A pesquisa foi conduzida em um renomado instituto de biotecnologia, onde engenheiros e médicos desenvolveram um dispositivo que imita perfeitamente os batimentos naturais e a circulação do sangue. O coração biônico é feito de materiais sintéticos biocompatíveis e possui sensores avançados que ajustam o fluxo sanguíneo de acordo com a necessidade do corpo.

“Nosso objetivo era criar uma solução definitiva para a insuficiência cardíaca e a longa espera por transplantes. O coração biônico pode durar décadas e se adaptar automaticamente ao paciente, reduzindo o risco de rejeição”, explicou a Dra. Carolina Mendes, uma das responsáveis pelo estudo.

Os testes clínicos iniciais mostraram que o coração biônico pode operar sem falhas por períodos prolongados e tem uma taxa de aceitação superior à de transplantes convencionais. Os pesquisadores agora buscam aprovação para testes em larga escala e esperam que o dispositivo esteja disponível para pacientes nos próximos cinco anos.

Caso seja implementado com sucesso, essa inovação pode salvar milhões de vidas e eliminar a necessidade de doação de órgãos para pacientes cardíacos.

</p>
            <button><Link to="/">Voltar</Link></button>
        </div>
    );
};

export default Noticia1;