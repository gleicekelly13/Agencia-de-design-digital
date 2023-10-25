import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';

import './style.css';

export default function Topo (props) {
    return (
        <header className={props.ehTemaClaro ? 'topo-modo-claro' : 'topo-modo-escuro'}>
            <img className="logo" src={Logo} alt='logomarca'/>
            <button onClick={props.alterarTema} className={props.ehTemaClaro ? 'btn-modo-claro' : 'btn-modo-escuro'}>
                <img className='iconesBtn' src={props.ehTemaClaro ? iconeLua : iconeSol} alt='icone-sol'/>
            </button>
        </header>
    );
}
