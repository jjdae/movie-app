import {Routes, Route} from 'react-router-dom'
import './App.scss';
import Home from './routes/Home';
import Sports from './routes/Sports';
import Drama from './routes/Detail';
import MoviesDetail from './routes/MoviesDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import QuickBtn from './components/QuickBtn';
import DramaDetail  from './routes/DramaDetail';
import ComedyDetail from './routes/ComedyDetail'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/sports/:id" element={<ComedyDetail />} />
        <Route path="/drama" element={<Drama />} ></Route>
         <Route path="/drama/:id" element={<DramaDetail/>}></Route>
        <Route path="/movies/:id" element={<MoviesDetail />} />
      </Routes>
      <Footer />
      <QuickBtn />
    </div>
  );
}

export default App;
