import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';

function AppRouter() {

    return (
        <Router>
            <div id='naman' className='bg-cover bg-fixed bg-neutral-950'
                style={{
                    backgroundImage: 'url(headerbg.jpg)',
                }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact" element={<GetInTouch />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
