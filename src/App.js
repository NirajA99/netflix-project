import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import TaskPopUp from './components/TaskPopUp';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';
function App() {
  return (
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/browse/:platform/' element={<Browse />}></Route>
        <Route path='/browsebygenre/:platform/:id' element={<BrowseByGenre />}></Route>
      </Routes>
      <TaskPopUp />
      </BrowserRouter>
  );
}

export default App;
