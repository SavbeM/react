import { Link } from 'react-router-dom';
import './BottomMenu.css';

function BottomMenu(){
    return(
        <div className="bottom-text">
            <a href="/#">Domov</a>
            <a href="/#">Produkty</a>
            <a href="/#">O nás</a>
            <a href="/#">Kontakty</a>
        </div>
    );
}

export default BottomMenu;