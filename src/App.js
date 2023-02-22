import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import PrivateLayout from './layout/PrivateLayout';
import PublicLayout from './layout/PublicLayout';
import AllRoute from './routes/AllRoute';

function App() {
  return (
    <>
  <Header/>
    <AllRoute/>
    
    </>
  );
}

export default App;
