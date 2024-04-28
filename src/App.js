import Header from './header/Header';
import ItemContainer from './item-container/ItemContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contacts} from "./components/Contacts";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product-list" element={<ItemContainer/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
