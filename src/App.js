import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Itinerary from './components/Itinerary';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="Itinerary" element={<Itinerary/>} />
        
      
      </Route> 
    </Routes>
    </>
  )
}

export default App
