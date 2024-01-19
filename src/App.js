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
                    backgroundImage: 'url(https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150913863.jpg?t=st=1705693728~exp=1705697328~hmac=a0d86369c20e9010c1de26498772b0368c0040aabb6ec70a44b95ecba53deb39&w=996)',
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
