import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import MovieDetail from './pages/MovieDetail';
import Hard from './pages/Hard';
import TaskDetail from './pages/TaskDetail';
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
                <Route path="/medium/:id" element={<MovieDetail />} />
                <Route path="/hard" element={<Hard />} />
                <Route path="/hard/:id" element={<TaskDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
