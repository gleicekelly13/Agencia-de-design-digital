import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png'

import './style.css';

export default function Topo () {
    return (
        <header className='topo-modo-claro'>
            <img className="logo" src={Logo} alt='logomarca'/>
            <button className='btn-modo-claro'>
                <img className='iconesBtn' src={iconeLua} alt='icone-lua'/>
            </button>
        </header>
    );
}