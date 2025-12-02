import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import BlogDetail from './pages/blogDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />  {/* Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;