import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage'
import DetailPage from './pages/DetailPage'
import { Reset } from "styled-reset";

export default function App() {
  return (<>    
    <Reset />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}