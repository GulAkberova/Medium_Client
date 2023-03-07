import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import PrivateLayout from './layout/PrivateLayout';
import PublicLayout from './layout/PublicLayout';
import AllRoute from './routes/AllRoute';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


function App() {
  return (
    <>
  <SkeletonTheme baseColor="#202020" highlightColor="#444">

  <Header/>
    <AllRoute/>
   </SkeletonTheme>

    
    </>
  );
}

export default App;
