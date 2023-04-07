import logo from './logo.svg';
import './App.css';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Table from './components/Table';


import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Table /> } />
          <Route path='/add' element={ <AddContact /> } />
          <Route path='/edit' element={ <EditContact/> } />
        </Routes>
      </Router>

    </>
  );
}

export default App;
