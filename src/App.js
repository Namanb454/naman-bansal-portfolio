import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import GetInTouch from './pages/GetInTouch';
import { useEffect, useState } from 'react';
import Loader from './components/Layout/Loader';
import Aos from 'aos'
import CustomCursor from './components/Layout/CustomCursor';


function AppRouter() {
    useEffect(() => {
        Aos.init()
    }, [])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
        };
        fetchData();
    }, [])

    return (
        <Router>
            <div id='naman' className='cursor-none bg-cover bg-fixed bg-neutral-950'

            >
                
                <CustomCursor />
                {loading ? (
                    <Loader />
                    
                ) :
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/contact" element={<GetInTouch />} />
                    </Routes>
                }
            </div>
        </Router>
    );
}

export default AppRouter;
