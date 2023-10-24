import './style.css';

export default function Card (props) {
    return (
        <div id='card' className='card-modo-escuro'>
            <p className='primeiro-paragrafo'>{props.data}</p>
            <h4>{props.titulo}</h4>
            <p className='segundo-paragrafo'>{props.empresa}</p>
            <p>{props.paragrafo}</p>
        </div>
    );
}