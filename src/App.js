import './App.css';
import { NavBar } from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { EditPage } from './pages/edit';

export default function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='entry/:entryId' element={ <EditPage />} />
      </Routes>
    </div>
  );
}
