import Card from '../Card';
import './style.css';

export default function SecaoExperienciaTrabalho (props) {
    return (
        <section id='secaoXpTrabalho' className={props.ehTemaClaro ? 'secao-modo-claro' : 'secao-modo-escuro'}>
            <div id='container-texto' className={props.ehTemaClaro ? 'container-texto-modo-claro' : 'container-texto-modo-escuro'}>
                <h2>Experiências de Trabalho</h2> 
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital,
                nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className='container-cards limitar-secao'>
                <Card ehTemaClaro = {props.ehTemaClaro}
                    data = "JUNHO 2012 - 2016"
                    titulo = "Web Designer"
                    empresa = "Pied Piper StartUp."
                    paragrafo = "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card ehTemaClaro = {props.ehTemaClaro}
                    data = "AGOSTO 2016 - 2019"
                    titulo = "Product Designer"
                    empresa = "E Corp."
                    paragrafo = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card ehTemaClaro = {props.ehTemaClaro}
                    data = "FEVEREIRO 2019 - 2021"
                    titulo = "Digital Consulting"
                    empresa = "Arasaka Inc."
                    paragrafo = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
    );
}