
import './BottomMenu.css';
import {Link} from "react-router-dom";


function BottomMenu(){
    return(

        <div className="bottom-text">
            <Link  to='/'>Domov</Link>
            <Link to="/product-list">Produkty</Link>
            <Link to="/about">O nás</Link>
            <Link to="/contacts">Kontakty</Link>
        </div>

    );
}

export default BottomMenu;