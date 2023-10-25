import './style.css';

export default function SecaoBanner (props) {
    return (
        <section id='secaoBanner'>
            <div id='imagemDeFundo' className={props.ehTemaClaro ? 'fundo-modo-claro' : 'fundo-modo-escuro'}></div>
            <div className='secaoBanner-textos'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    );
}