import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/easy" element={<Easy />} />
                <Route path="/medium" element={<Medium />} />
                <Route path="/hard" element={<Hard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
