import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png'


export default function Topo () {
    return (
        <header>
            <div>
                <img src={Logo} alt='logomarca'/>
                <button>
                    <img src={iconeLua} alt='icone-lua'/>
                </button>
            </div>
        </header>
    );
}