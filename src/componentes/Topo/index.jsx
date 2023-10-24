import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';

import './style.css';

export default function Topo () {
    return (
        <header className='topo-modo-escuro'>
            <img className="logo" src={Logo} alt='logomarca'/>
            <button className='btn-modo-escuro'>
                <img className='iconesBtn' src={iconeSol} alt='icone-sol'/>
            </button>
        </header>
    );
}
