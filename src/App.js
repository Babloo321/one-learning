import './App.css';
import Home from '../src/components/home/Home.jsx'
import Academy from './components/pageroute/academy/Academy.jsx';
import PartnerWithUs from './components/pageroute/Partner/PartnerWithUs.jsx';
import { Routes, Route } from "react-router-dom"
import Header from '../src/components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Community from './components/pageroute/community/Community.jsx';
import Dashboard from './components/pageroute/dashboard/Dashboard.jsx';
function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="academy" element={ <Academy /> } />
        <Route path="community" element={ <Community /> } />
        <Route path="withus" element={ <PartnerWithUs /> } />
        <Route path="dashboard" element={ <Dashboard /> } />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
